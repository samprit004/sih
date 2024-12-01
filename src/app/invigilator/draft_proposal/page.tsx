import Table from "@/components/draft proposal/table";
import Side_nav from "@/components/draft proposal/side_nav";
import Nav from "@/components/draft proposal/nav";
import { redirect } from "next/navigation";
import { getSession } from "@/app/lib";
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