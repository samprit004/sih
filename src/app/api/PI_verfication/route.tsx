import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
/**
 * 
 * @param req - id, username, password
 * @returns message
 */
export async function POST(req: Request){
  const {id, username, password}= await req.json();
  const PI = await pb.collection('PI_records').getOne(id);
  console.log(PI);
  
  try{
    await pb.collection('PI_records').update(id, {username: username});
    await pb.collection('CMPDI_users').update(PI.CMPDI_id, {
      password: password, 
      verify_status: "Verified",
    });
    return new Response(JSON.stringify({message: "Done Verified"}))
  }catch{
    return new Response(JSON.stringify({message: "Couldn't update"}))
  }
  
}