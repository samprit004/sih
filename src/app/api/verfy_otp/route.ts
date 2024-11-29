import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

/**
 * 
 * @param req - id, otp
 * @returns message, id
 */
export async function POST(req: Request){
  const { id, otp } = await req.json();
}