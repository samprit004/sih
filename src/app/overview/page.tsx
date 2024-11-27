import Content from "@/components/overview/Content";
import Nav from "@/components/overview/Nav";
import Side_nav from "@/components/overview/Side_nav";

export default function overview() {
    return (
      <>
      <Nav/>
      <div className="flex">
      <Side_nav/>
      <Content/>
      </div>
      
      </>
    );
  }