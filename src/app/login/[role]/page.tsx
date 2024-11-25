"use client"
import { useRouter, redirect, usePathname } from 'next/navigation'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default function RoleLogin() {
  const router = useRouter();
  const role = usePathname().substring(7);
  let redir = '';
  if( role === 'invigilator' ){
    redir = 'invigilator';
  }else if( role === 'admin' ){
    redir = 'admin';
  }else{
    redirect('/404');
  }
  const handel_log = async () => {
    console.log(`Logged in ${role}`);
    router.push('/'+redir);
  };

  return (
    <>
    <Nav/>
    <h1>Login for {role}</h1>
    <button onClick={handel_log}>Login</button>
    <Footer/>
    </>
  );
}