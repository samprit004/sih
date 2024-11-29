'use client';

import React from "react";

interface LivePreviewProps {
  formData: {
    sampritWho: string;
    sampritDOB: string;
    sampritAge: string;
    sampritFavFootballer: string;
    sampritLove: string;
  };
}

const LivePreview: React.FC<LivePreviewProps> = ({ formData }) => {
  return (
    <div className="w-[40%] p-7 bg-[#3F3F3FCC]">
      <div className="flex justify-end">
        <button
          className="px-4 py-2 text-white rounded-lg bg-black mb-2"
          onClick={() => {
            alert("Download functionality is not implemented yet.");
          }}
        >
          Download CV
        </button>
      </div>

      <div className="bg-white p-8 h-[87vh] sticky">
        <h2 className="text-xl font-bold text-center mb-6">Live Preview</h2>
        <div className="space-y-6">
          <div className="preview-item">
            <h4 className="text-md font-semibold">Who is Samprit?</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritWho }} />
          </div>
          <div className="preview-item">
            <h4 className="text-md font-semibold">Samprit's Date of Birth</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritDOB }} />
          </div>
          <div className="preview-item">
            <h4 className="text-md font-semibold">Samprit's Age</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritAge }} />
          </div>
          <div className="preview-item">
            <h4 className="text-md font-semibold">Samprit's Favorite Footballer</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritFavFootballer }} />
          </div>
          <div className="preview-item">
            <h4 className="text-md font-semibold">Samprit's Love</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritLove }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
