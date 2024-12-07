import PocketBase from 'pocketbase';
import {verify_user} from '@/app/send_mail';
const pb = new PocketBase('http://127.0.0.1:8090');
async function search_user(id: string){
  // you can also fetch all records at once via getFullList
    const records = await pb.collection('PI_records').getFullList({
      filter: `(CMPDI_id='${id}')`
    });
  return records;
}
/**
 * 
 * @param req - id, Auth_token, aadhar_no, pi_id
 * @returns message
 */
export async function POST(req: Request){
  const { id, Auth_token,aadhar_no, pi_id } = await req.json();
  const user = await pb.collection('CMPDI_users').getOne(id);
  if(Auth_token !== user.Auth_token){
    return new ForbiddenError(JSON.stringify({message:"auth_token invalid"}))
  }
  const data = {
    "aadhar_no": aadhar_no,
    "PI_id": pi_id,
  };
  const resultList = await pb.collection('PI_records').getFullList({
    filter: `(CMPDI_id='${id}')`,
  });

  const record = await pb.collection('PI_records').update(resultList[0].id, data);
  await pb.collection('CMPDI_users').update(id, {verify_status: "Verification pending"});
  
  await verify_user(resultList[0].id, resultList[0].PI_id, resultList[0].aadhar_no, user.user_email);
  const pi = await pb.collection('CMPDI_users').getOne(id);
  const jsbody = {
    message: 'docs added',
    success: pi.verify_status,
  }

  return new Response(JSON.stringify(jsbody));
}