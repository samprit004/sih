import PocketBase from 'pocketbase';
import {TableRow} from '@/components/admin_console/proposal_tracker/table'

const pb = new PocketBase('http://127.0.0.1:8090');

export async function GET(req: Request) {
  const records = await pb.collection('PI_proposals').getFullList();
  let jsbody: TableRow[]= [];
  for (let index = 0; index < records.length; index++) {
    const element = records[index];
    const PI = await pb.collection('PI_records').getOne(element.PI_id, {
        fields: "name",
    });
    jsbody.push({
      projectId: element.Project_id,
      piName: PI.name,
      response: element.response,
      proposalStatus: `${element.proposalStatus}`,
      meetingTimeSlot: element.meetingTimeSlot
    })
    console.log(element)
  }
  return new Response(JSON.stringify(jsbody));
}