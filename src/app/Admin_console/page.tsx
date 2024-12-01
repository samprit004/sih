import { getCookie, getSession, login } from "@/app/lib";
import { redirect } from "next/navigation";

export default async function Upcoming(){
  "use server"
  const session = getSession();
  if(!session){
    redirect('/');
  }
  const jsbody = {
    id: getCookie('margsathi_id'),
    Auth_token: getCookie('Auth_token'),
  }
  const res = await login(jsbody);
  if(res) redirect('/Admin_console/Project_records');
  else redirect('/')
}