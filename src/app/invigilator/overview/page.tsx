import Content from "@/components/overview/Content";
import Nav from "@/components/overview/Nav";
import Side_nav from "@/components/overview/Side_nav";
import { getSession } from "@/app/lib";
import { redirect } from "next/navigation";

export default async function Overview() {
  "use server";
  const session = getSession();
  if(!session){
    redirect('/');
  }
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
