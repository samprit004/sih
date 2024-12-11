'use client'
import Table from "@/components/submit_proposal/pop_up";
import Side_nav from "@/components/submit_proposal/side_nav";
import Nav from "@/components/submit_proposal/nav";
import { getSession } from "@/app/lib";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default async function DraftProposal(){
  useEffect(()=>{
    const session = sessionStorage.getItem('margsathi_session');
    if(!session){
      redirect('/');
    }
  }, [redirect])
  
    return (
      <>
        <Nav/>
        <div className="flex">
        
      <Side_nav/>
        
      <Table/>
      </div>
        
        </>
    );
    }