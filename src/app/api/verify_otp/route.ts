import { login } from '@/app/lib';
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

/**
 * 
 * @param req - id, otp
 * @returns message, id, Auth_token, Auth_exp
 */
export async function POST(req: Request){
  const { id, otp } = await req.json();
  console.log(otp);
  const record = await pb.collection('CMPDI_users').getOne(id, {
    expand: 'Auth_token,Auth_exp',
  });
  if(otp!==record.OTP){
    return new ForbiddenError(JSON.stringify({message: "Invalid OTP"}));
  }
  await pb.collection('CMPDI_users').update(id, {verify_status: "PI docs pending"});
  const jsbody = {
    message: "Done!",
    id: id,
    Auth_token: record.Auth_token,
    Auth_exp: record.Auth_exp,
  }
  login({id:jsbody.id, Auth_token:jsbody.Auth_token});
  return new Response(JSON.stringify(jsbody));
}