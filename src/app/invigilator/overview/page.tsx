'use client'
import Content from "@/components/overview/Content";
import Nav from "@/components/overview/Nav";
import Side_nav from "@/components/overview/Side_nav";
import { getSession } from "@/app/lib";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default async function Overview() {
  useEffect(()=>{
    const session = sessionStorage.getItem('margsathi_session');
    if(!session){
      redirect('/');
    }
  }, [redirect])
  return (
    <>
      <Nav />
      <div className="flex mt-[84px]"> {/* Offset for Nav bar */}
        <Side_nav />
        <Content />
      </div>
    </>
  );
}
