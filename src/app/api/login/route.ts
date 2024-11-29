import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
async function search_user(username: string, password: string, token: string){
  // you can also fetch all records at once via getFullList
    const records = await pb.collection('CMPDI_users').getFullList({
      filter: `(user_email='${username}' && password='${password}' && Auth_token='${token}')`
    });
    return records;
  }

/**
 * 
 * @param req - username, password, Auth_token
 * @returns message, id, Auth_token, Auth_exp
 */
export async function POST(req: Request) {
  const { username, password, Auth_token } = await req.json();
  const user = await search_user(username, password, Auth_token);
  if(user.length > 0){
    const jsbody = {
      id: user[0].id,
      Auth_token: user[0].Auth_token,
      Auth_exp: user[0].Auth_exp,
    }
    return new Response(JSON.stringify(jsbody))
  }
  return new NotFoundError("User Not Found!!")
}