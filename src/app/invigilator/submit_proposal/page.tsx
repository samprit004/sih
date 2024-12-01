import Table from "@/components/submit_proposal/pop_up";
import Side_nav from "@/components/submit_proposal/side_nav";
import Nav from "@/components/submit_proposal/nav";
import { getSession } from "@/app/lib";
import { redirect } from "next/navigation";

export default function DraftProposal(){
  "use server";
  const session = getSession();
  if(!session){
    redirect('/');
  }
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