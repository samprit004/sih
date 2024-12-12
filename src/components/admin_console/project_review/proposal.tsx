'use client';
import React, { useState } from "react";
import Image from "next/image";
import PSide_nav from "./PSide_nav";
import TextEditor from "@/components/Submit_vision/Texteditor";
import Dialog2 from "./dialog2";

interface DialogProps {
    isOpen: boolean; // Controls visibility
    onClose: () => void; // Callback for closing the dialog
    aiScore?: number; // Placeholder for AI Score (to be populated by backend)
    response?: string; // Placeholder for response content (to be populated by backend)
  }
  
  const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, aiScore, response }) => {
        if (!isOpen) return null;
    
        return (
          <div className="dialog">
            <div className="dialog-content">
              <button onClick={onClose}>Close</button>
              <div>AI Score: {aiScore}</div>
              <div>Response: {response}</div>
            </div>
          </div>
        );
      };
interface ProposalProps {
    aiScore?: string;
    response?: string;
}

const Proposal: React.FC<ProposalProps> = ({ aiScore, response }) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isApprovedChecked, setIsApprovedChecked] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [fixedDate, setFixedDate] = useState<string | null>(null);
    const [fixedSlots, setFixedSlots] = useState<string[]>([]);

    const handleApprovedChange = () => {
        setIsApprovedChecked(!isApprovedChecked);
    };

    const handleFixMeeting = (date: string | null, slots: string[]) => {
        setFixedDate(date);
        setFixedSlots(slots);
        setIsDialogOpen(false);
    };
    // console.log(response)

    return (
        <div className="w-[60%]">
            {/* Button to toggle side navigation */}
            <div className="flex m-4">
                <button onClick={() => setIsNavVisible(true)}>
                    <Image src="/menu.svg" alt="Menu Icon" width={40} height={120} />
                </button>
            </div>

            <PSide_nav 
                isVisible={isNavVisible} 
                onClose={() => setIsNavVisible(false)} 
            />
             <div className="flex-1 overflow-y-auto">
          {/* AI Score Section */}
          <div className="border-2 border-black rounded-md mb-4 m-4">
            <h2 className="text-2xl mb-4 bg-black text-white text-left">Agent Score</h2>
            <div className="flex items-center justify-center p-2 text-xl font-bold">
              {aiScore !== undefined ? aiScore : "Loading..."}
            </div>
          </div>

          {/* Acceptance Response Section */}
          <div className="border-2 border-black rounded-md m-4">
            <h2 className="text-2xl mb-4 bg-black text-white text-left">Acceptance Response</h2>
            <ul className="pl-6 text-sm">
                {response !== undefined ? response : <li>Loading...</li>}
              {/* {response
                ? response.split("\n").map((line, index) => <li key={index}>{line}</li>)
                : <li>Loading...</li>} */}
            </ul>
          </div>
        </div>
            <div className="flex">
                <TextEditor />
            </div>

            {/* Buttons below the TextEditor */}
            <div className="mt-4 flex gap-4">
                {/* Approved Button */}
                <button
                    className={`p-2 border rounded ${
                        isApprovedChecked ? "bg-gray-200" : "bg-white"
                    }`}
                    onClick={handleApprovedChange}
                >
                    <input type="checkbox" checked={isApprovedChecked} readOnly className="mr-2" />
                    Approve
                </button>

                {/* Resubmit Button */}
                <button
                    className="p-2 border rounded bg-white text-black"
                    disabled={isApprovedChecked}
                >
                    Resubmit
                </button>

                {/* Cancel Button */}
                <button
                    className="p-2 border rounded bg-white text-black"
                    disabled={isApprovedChecked}
                >
                    Cancel
                </button>

                {/* Fix Meeting Date Button */}
                <button
                    onClick={() => setIsDialogOpen(true)}
                    className="p-2 border rounded bg-white text-black"
                    disabled={!isApprovedChecked}
                >
                    Fix Meeting Date
                </button>
            </div>

            {/* Dialog */}
            <Dialog2
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onFix={handleFixMeeting}
            />

            {/* Fixed Meeting Details */}
            {fixedDate && (
                <div className="mt-4">
                    <h3 className="font-semibold text-lg underline mb-2">Fixed Meeting Details</h3>
                    <table className="w-96 border-2 border-black rounded-lg">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2 bg-black text-white">Date</th>
                                <td className="border border-gray-300 p-2">{fixedDate}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border border-gray-300 p-2 bg-black text-white">Time</th>
                                <td className="border border-gray-300 p-2">
                                    {fixedSlots.length > 0 ? fixedSlots.join(' or ') : 'N/A'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Proposal;
