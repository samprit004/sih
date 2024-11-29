import Table from "@/components/draft proposal/table";
import Side_nav from "@/components/draft proposal/side_nav";
import Nav from "@/components/draft proposal/nav";
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