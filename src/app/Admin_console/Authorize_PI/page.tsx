import Side_nav from "@/components/admin_console/authorize_PI/side_nav";
import Nav from "@/components/admin_console/authorize_PI/nav";
import Table1 from "@/components/admin_console/authorize_PI/table1";
import Table2 from "@/components/admin_console/authorize_PI/table2";
export default function Upcoming(){
    return (
      <>
       <Nav />
      <div className="flex mt-[84px]"> {/* Offset for Nav bar */}
        <Side_nav />
        <div>
        <Table1/>
        <Table2/>
        </div>
      </div>
    </>
  );
}
   
