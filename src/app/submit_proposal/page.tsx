import Table from "@/components/submit_proposal/pop_up";
import Side_nav from "@/components/submit_proposal/side_nav";
import Nav from "@/components/submit_proposal/nav";

export default function DraftProposal(){
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