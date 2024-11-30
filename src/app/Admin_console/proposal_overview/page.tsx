'use client';
import PNav from "@/components/admin_console/project_review/p_nav";
import Proposal from "@/components/admin_console/project_review/proposal";
import Preview from "@/components/admin_console/project_review/preview";

export default function proposal(){
    return (
      <>
      <PNav/>
      <div className=" flex">
      <Proposal/>
      <Preview/>
        </div>
      </>
  );
}
   