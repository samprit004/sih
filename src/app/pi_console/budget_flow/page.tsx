import Side_nav from "@/components/pi_console/budget_flow/side_nav";
import Nav from "@/components/pi_console/budget_flow/nav";
export default function budget_flow() {
    return (
      <>
      <div className="flex">
        <Nav/>
        <Side_nav />
        </div>
        
      </>
    );
  }