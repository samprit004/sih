import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  response: string;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, response }) => {
  if (!isOpen) return null; // Render nothing when dialog is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[500px]  p-6 border-2 border-black rounded-lg shadow-lg">
        {/* Adjust the layout of the close button */}
        <div className="flex justify-end">
          <button
            className="p-2 hover:bg-gray-500 rounded-full"
            onClick={onClose}
          >
            <Image src="/cross.svg" alt="Close" width={20} height={20} />
          </button>
        </div>

        <div className="border-2 border-black rounded-md mb-2">
          <h2 className="text-2xl mb-4 bg-black text-white">AI Score</h2>
          <div className="flex items-center p-1">85.6</div>
        </div>

        <div className="border-2 border-black rounded-md">
          <h2 className="text-2xl mb-4 bg-black text-white">Acceptance Response</h2>
          {/* Render response as a list */}
          <ul className="pl-6 text-sm">
            {response.split("\n").map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <Link href="/Admin_console/proposal_overview">
            <button className="bg-black text-white rounded-md mt-4 p-2 text-sm">
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
