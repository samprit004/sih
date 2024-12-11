import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
/**
 * 
 * @param req - Admin_Auth_token
 * @returns message, [id, name, phone_no, email, aadhar_no, password]
 */
export async function POST(req: Request) {
  console.log(req);
  const records = await pb.collection('PI_records').getFullList();
  let rec_list: { piId: string; piName: string;
    contactNumber: number; email: string;
    adharNumber: number; password: string; }[] = [];
  records.forEach(async rec => {
    const user = await pb.collection('CMPDI_users').getOne(rec.CMPDI_id, {
      fields: 'user_email,password',
    });
    rec_list.push({
      piId: rec.id,
      piName: rec.username,
      contactNumber: rec.phone_no,
      email: user.user_email,
      adharNumber: rec.aadhar_no,
      password: user.password,
    })
  });

  return new Response(JSON.stringify(rec_list));
}