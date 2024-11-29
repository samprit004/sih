import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
async function search_user(email: string){
  // you can also fetch all records at once via getFullList
    const records = await pb.collection('CMPDI_users').getFullList({
      filter: `(user_email='${email}')`
    });
  return records;
}
async function create_user(first_name: string, last_name: string, email: string, phone: string){
  // example create data
  const currentDate = new Date(); // Get the current date
  const Auth_expDate = new Date(currentDate); // Clone the current date
  Auth_expDate.setDate(currentDate.getDate() + 7); // Add 7 days
  const OTP_expDate = new Date(currentDate);
  OTP_expDate.setMinutes(currentDate.getMinutes() + 5);

  const data = {
    "user_email": email,
    "user_type": "PI",
    "Auth_exp": Auth_expDate.toISOString(),
    "OTP_exp": OTP_expDate.toISOString(),
    "verify_status": "OTP pending",
    "first_name": first_name,
    "last_name": last_name,
  };
  const user = await pb.collection('CMPDI_users').create(data);
  const docs = {
    'CMPDI_id': user.id,
    'phone_no': phone,
    'username': `${first_name} ${last_name}`,
  }
  console.log(docs)
  await pb.collection('PI_records').create(docs);
  return user;
}

/**
 * 
 * @param req - first_name, last_name, email, phone
 * @returns message, id
 */
export async function POST(req: Request) {
  const { first_name, last_name, email, phone } = await req.json();
  const search_result = await search_user(email);
  if(search_result.length > 1){
    return new ForbiddenError(JSON.stringify({'message':"This Email has been Used"}));
  }else if(search_result.length == 1){
    return new Response(JSON.stringify({
      'message':"User already there",
      'id': search_result[0].id,
    }));
  }else{
    const user = await create_user(first_name, last_name, email, phone);
    return new Response(JSON.stringify({
      'message':"User Created",
      'id': user.id,
    }));
  }
  
}