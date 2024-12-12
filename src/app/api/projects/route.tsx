import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

interface project_body {
  id: string,
  org_name: string,
  pi_name: string,
  title: string,
}

export async function GET(req: Request) {
  let jsbody: project_body[] = [];
  const records = await pb.collection('Project_records').getFullList({
    filter: "(approval_status=true)",
  });
  const strings = ["Project Planning", "Project Funding", "Quarterly report"];
  
  for(let i=0;i<records.length;i++){
    const randomString = strings[Math.floor(Math.random() * strings.length)];
    const pi = await pb.collection('PI_records').getOne(records[i].PI)
    jsbody.push({
      id: records[i].id,
      org_name: records[i].org_name,
      pi_name: pi.name,
      title: randomString,
    })
  }

  return new Response(JSON.stringify(jsbody))
}