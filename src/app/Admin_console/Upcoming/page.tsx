import Side_nav from "@/components/admin_console/upcoming/side_nav";
import Nav from "@/components/admin_console/upcoming/nav";
export default function Upcoming(){
    return (
      <>
       <Nav />
      <div className="flex mt-[84px]"> {/* Offset for Nav bar */}
        <Side_nav />
        
      </div>
    </>
  );
}
   
