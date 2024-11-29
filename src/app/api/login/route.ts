import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
async function search_user(username: string, password: string, type: string){
  // you can also fetch all records at once via getFullList
    const records = await pb.collection('CMPDI_users').getFullList({
      filter: `(user_email='${username}' && password='${password}' && user_type='${type}')`
    });
    return records;
  }
  
export async function POST(req: Request) {
  const { username, password, type } = await req.json();
  const user = await search_user(username, password, type);
  if(user.length > 0){
    const jsbody = {
      Auth_token: user[0].Auth_token,
      Auth_exp: user[0].Auth_exp,
    }
    return new Response(JSON.stringify(jsbody))
  }
  return new NotFoundError("User Not Found!!")
}