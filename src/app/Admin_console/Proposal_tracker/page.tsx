import Side_nav from "@/components/admin_console/proposal_tracker/side_nav";
import Nav from "@/components/admin_console/proposal_tracker/nav";
import Table from "@/components/admin_console/proposal_tracker/table";
export default function Upcoming(){
    return (
      <>
       <Nav />
      <div className="flex mt-[84px]"> {/* Offset for Nav bar */}
        <Side_nav />
        <Table />
      </div>
    </>
  );
}
   
