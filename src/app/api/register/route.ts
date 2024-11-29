import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

async function create_user(first_name: string, last_name: string, username: string, password: string){
  // example create data
  const currentDate = new Date(); // Get the current date
  const Auth_expDate = new Date(currentDate); // Clone the current date
  Auth_expDate.setDate(currentDate.getDate() + 7); // Add 7 days
  const OTP_expDate = new Date(currentDate);
  OTP_expDate.setMinutes(currentDate.getMinutes() + 5);

  const data = {
    "user_email": username,
    "user_type": "PI",
    "Auth_exp": Auth_expDate.toISOString(),
    "OTP_exp": OTP_expDate.toISOString(),
    "verify_status": "PI docs pending",
    "password": password,
    "first_name": first_name,
    "last_name": last_name,
  };
  const record = await pb.collection('CMPDI_users').create(data);
  return record;
}


export async function POST(req: Request) {
  const { first_name, last_name, username, password } = await req.json();
  const user = await create_user(first_name, last_name, username, password);
  return new Response(JSON.stringify(user))
}