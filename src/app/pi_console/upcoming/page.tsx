import Side_nav from "@/components/pi_console/upcoming/side_nav";
import Nav from "@/components/pi_console/upcoming/nav";
import Content from "@/components/pi_console/upcoming/content";
export default function quarterly_report() {
    return (
      <>
      <div className="flex">
        <Nav/>
        <Side_nav />
        </div>
        <Content/>
      </>
    );
  }