'use client';

import React, { useState } from "react";
import DetailsForm from "@/components/Submit_vision/Detailsform";
import LivePreview from "@/components/Submit_vision/Livepreview";
import ProposedOutlayTable from "./ProposedOutlayTable";

import DisplayBox from "./Displaybox";

interface FormData {
  projectTitle: string;
  principalAgency: string;
  subAgency: string;
  issueDefinition: string;
  objectives: string;
  justification: string;
  projectBenefits: string;
  workPlan: string;
  methodology: string;
  workOrganization: string;
  timeSchedule: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    projectTitle: "",
    principalAgency: "",
    subAgency: "",
    issueDefinition: "",
    objectives: "",
    justification: "",
    projectBenefits: "",
    workPlan: "",
    methodology: "",
    workOrganization: "",
    timeSchedule: "",
  });

  const [progress, setProgress] = useState(0);

  const [tableData, setTableData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (key: string, value: string) => {
    setTableData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div>
        <hr className="border-t-2 border-2 border-black w-full rounded-md" />
      </div>
      <div className="flex bg-[#3F3F3FCC] justify-center">

        <div className="flex flex-col w-full">
        <DetailsForm
          formData={formData}
          setFormData={setFormData}
          progress={progress}
          setProgress={setProgress}
        />
        <div className="w-full"> 
        {/* <ProposedOutlayTable tableData={tableData} onInputChange={handleInputChange} /> */}
        </div>
        
        {/* <Table2 tableData={tableData} onInputChange={handleInputChange} /> */}
       
        <div className="w-full">
        {/* <DisplayBox tableData={tableData} /> */}
        
        </div>
        </div>
        <LivePreview formData={formData} />
      </div>
    </div>
  );
};

export default Form;
