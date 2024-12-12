import Side_nav from "@/components/pi_console/quarterly_report/side_nav";
import Nav from "@/components/pi_console/quarterly_report/Nav";
export default function quarterly_report() {
    return (
      <>
      <div className="flex">
        <Nav/>
      <Side_nav />
      </div>
        
      </>
    );
  }