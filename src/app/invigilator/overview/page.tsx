import Content from "@/components/overview/Content";
import Nav from "@/components/overview/Nav";
import Side_nav from "@/components/overview/Side_nav";

export default function Overview() {
  return (
    <>
      <Nav />
      <div className="flex mt-[84px]"> {/* Offset for Nav bar */}
        <Side_nav />
        <Content />
      </div>
    </>
  );
}
