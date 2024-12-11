'use client'
import HNav from "@/components/admin_console/proposal_tracker/hnav";
import Highlights from "@/components/admin_console/proposal_tracker/highlights";
import Preview from "@/components/admin_console/project_review/preview";

export default function ProgressHighlights() {
  return (
    <>
    
      <HNav />
      <div className="flex">
      <Highlights isOpen={false} onClose={function (): void {
                  throw new Error("Function not implemented.");
              } } />
      <Preview/>
      </div>

    </>
  );

};
