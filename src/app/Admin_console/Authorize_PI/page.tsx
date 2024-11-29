import Side_nav from "@/components/admin_console/authorize_PI/side_nav";
import Nav from "@/components/admin_console/authorize_PI/nav";
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
   
