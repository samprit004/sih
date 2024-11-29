import React from "react";
import Image from "next/image";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  response: string;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, response }) => {
  if (!isOpen) return null; // Render nothing when dialog is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] h-[450px] p-6 border-2 border-black rounded-lg shadow-lg">
        
        {/* Adjust the layout of the close button */}
        <div className="flex justify-end">
          <button
            className="p-2 hover:bg-gray-500 rounded-full"
            onClick={onClose}
          >
            <Image src="/cross.svg" alt="Close" width={20} height={20} />
          </button>
        </div>
        <div className="border-2 border-black rounded-md">
        <h2 className="text-2xl   mb-4 bg-black text-white">Acceptance Response</h2>
        
        {/* Render response as a list */}
        <ul className="pl-6 text-sm">
          {response.split("\n").map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        </div>
        <div className="flex justify-center">
        <button className="bg-black text-white rounded-md mt-4 p-2 text-sm">view both <br /> 
        (Proposal and AI Report)</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
