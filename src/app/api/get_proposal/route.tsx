import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function POST(req: Request) {
  const {id} = await req.json();
  const records = await pb.collection('PI_proposals').getOne(id);
  const jsbody = {
    response: records.response,
    agent_score: records.Agent_Score,
    id: records.id,
  }
  return new Response(JSON.stringify(jsbody));
}