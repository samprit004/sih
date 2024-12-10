import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DialogProps {
  isOpen: boolean; // Controls visibility
  onClose: () => void; // Callback for closing the dialog
  aiScore?: number; // Placeholder for AI Score (to be populated by backend)
  response?: string; // Placeholder for response content (to be populated by backend)
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, aiScore, response }) => {
  if (!isOpen) return null; // Render nothing when the dialog is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[500px] h-[600px] p-6 border-2 border-black rounded-lg shadow-lg flex flex-col">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            className="p-2 hover:bg-gray-500 rounded-full"
            onClick={onClose}
          >
            <Image src="/cross.svg" alt="Close" width={20} height={20} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {/* AI Score Section */}
          <div className="border-2 border-black rounded-md mb-4">
            <h2 className="text-2xl mb-4 bg-black text-white text-center">Agent Score</h2>
            <div className="flex items-center justify-center p-2 text-xl font-bold">
              {aiScore !== undefined ? aiScore : "Loading..."}
            </div>
          </div>

          {/* Acceptance Response Section */}
          <div className="border-2 border-black rounded-md">
            <h2 className="text-2xl mb-4 bg-black text-white text-center">Acceptance Response</h2>
            <ul className="pl-6 text-sm">
              {response
                ? response.split("\n").map((line, index) => <li key={index}>{line}</li>)
                : <li>Loading...</li>}
            </ul>
          </div>
        </div>

        {/* Fixed View Both Button */}
        <div className="flex justify-center mt-4">
          <Link href="/Admin_console/proposal_overview">
            <button className="bg-black text-white rounded-md p-2 text-sm fixed bottom-6">
              View Both <br />
              (Proposal and AI Report)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
