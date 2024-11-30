'use client';

import React, { useState } from "react";
import DetailsForm from "@/components/Submit_vision/Detailsform";
import LivePreview from "@/components/Submit_vision/Livepreview";

interface FormData {
  sampritWho: string;
  sampritDOB: string;
  sampritAge: string;
  sampritFavFootballer: string;
  sampritLove: string;
}

const ParentComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    sampritWho: "",
    sampritDOB: "",
    sampritAge: "",
    sampritFavFootballer: "",
    sampritLove: "",
  });

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <div>
      <hr className='border-t-2 border-2 border-black w-full rounded-md'/>
      </div>
    <div className="flex bg-[#3F3F3FCC] justify-center">
      <DetailsForm
        formData={formData}
        setFormData={setFormData}
        progress={progress}
        setProgress={setProgress}
      />
      <LivePreview formData={formData} />
    </div>
    </div>
  );
};

export default ParentComponent;