'use client'
import { getSession, login } from "@/app/lib";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default async function Upcoming(){
  useEffect(()=>{
    const session = sessionStorage.getItem('margsathi_session');
    if(!session){
      redirect('/');
    }
  }, [redirect])
  const jsbody = {
    id: localStorage.getItem("margsathi_id"),
    Auth_token: localStorage.getItem('margsathi_Auth_token'),
  }
  const res = await login(jsbody);
  if(res) redirect('/Admin_console/Project_records');
  else redirect('/')
}