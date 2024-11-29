import Side_nav from "@/components/admin_console/project_review/side_nav";
import Nav from "@/components/admin_console/project_review/nav";
import Table from "@/components/admin_console/project_review/table";
export default function Upcoming(){
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
   
