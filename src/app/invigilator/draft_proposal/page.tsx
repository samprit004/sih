'use client'
import Table from "@/components/draft proposal/table";
import Side_nav from "@/components/draft proposal/side_nav";
import Nav from "@/components/draft proposal/nav";
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