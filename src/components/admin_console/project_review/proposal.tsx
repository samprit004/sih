'use client';
import React, { useState } from "react";
import Image from "next/image";
import PSide_nav from "./PSide_nav";
import TextEditor from "@/components/Submit_vision/Texteditor";
import Dialog2 from "./dialog2";

const Proposal = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isApprovedChecked, setIsApprovedChecked] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleApprovedChange = () => {
        setIsApprovedChecked(!isApprovedChecked);
    };

    return (
        <div className="w-[60%]">
            {/* Button to toggle side navigation */}
            <div className="flex">
                <button onClick={() => setIsNavVisible(true)}>
                    <Image src="/menu.svg" alt="Menu Icon" width={40} height={120} />
                </button>
            </div>

            <PSide_nav 
                isVisible={isNavVisible} 
                onClose={() => setIsNavVisible(false)} 
            />
            
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
            <Dialog2 isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </div>
    );
};

export default Proposal;
