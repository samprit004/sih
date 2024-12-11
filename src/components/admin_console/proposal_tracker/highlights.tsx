'use client';
import { useState } from "react";
import Image from "next/image";
import PSide_nav from "../project_review/PSide_nav";
import Calender from "./calender";

import React from 'react';

interface HighlightsProps {
    isOpen: boolean; // Controls visibility
    onClose: () => void;
    pid?: string;
    submission_date?: Date;
    document_name?: string;
    status?: string;    
    total_fund_requested?: number;
    fund_allocated?: number;
    fund_requested_date?: Date;
    fund_allocated_date?: Date;
    remaining_funds?: number;
    date_of_transaction?: Date;
    utilization_details?: string;
    amount_utilized?: number;
}

const Highlights: React.FC<HighlightsProps> = ({ 
    isOpen, 
    onClose, 
    pid, 
    submission_date, 
    document_name, 
    status, 
    total_fund_requested, 
    fund_allocated, 
    fund_requested_date, 
    fund_allocated_date, 
    remaining_funds, 
    date_of_transaction, 
    utilization_details, 
    amount_utilized 
}) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [fixedDate, setFixedDate] = useState<string | null>(null);
    const [fixedSlots, setFixedSlots] = useState<string[]>([]);

    const handleFixMeeting = (date: string | null, slots: string[]) => {
        setFixedDate(date);
        setFixedSlots(slots);
        setIsCalendarOpen(false); // Close calendar after fixing
    };

    return (
        <div className="w-[60%]">
             <div className="flex m-4">
                        <button onClick={() => setIsNavVisible(true)}>
                            <Image src="/menu.svg" alt="Menu Icon" width={40} height={120} />
                        </button>
                    <PSide_nav 
                        isVisible={isNavVisible} 
                        onClose={() => setIsNavVisible(false)} 
                    />
                    <div className="mt-4 ml-2 w-64 h-9 rounded-md bg-black text-white">
                        <div className="flex mt-1 ml-4">
                            Project ID: {pid !== undefined ? pid : "  Loading..."} 
                        </div>   
                    </div>
                    <div>
                    
                    </div>
                    <button 
                        className="w-36 bg-black border-2 mt-5 ml-[360px] text-white h-8 rounded-md"
                        onClick={() => setIsCalendarOpen(true)} // Open calendar dialog
                    >
                        Fix Meeting
                    </button>
                </div>
            <Calender
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
                onFix={handleFixMeeting}
            />
            {fixedDate && (
                <div className="mt-4 ml-4">
                    <h3 className="font-semibold text-lg underline mb-2">Time Slot Review</h3>
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
            <div>
                {/* Button to toggle side navigation */}
               
            <div>
                <h1 className="ml-4 text-2xl mt-2 font-semibold"><u>Submission Records</u></h1>
            </div>
            <table className="w-[800px] ml-4 text-xl border-2 border-black">
                <tbody>
                    <tr className="font-xl font-semibold">
                        <td className="border-2 border-black text-center">Submission date</td>
                        <td className="border-2 border-black text-center">Document Name</td>
                        <td className="border-2 border-black text-center">Document</td>
                    </tr>
                    <tr className="font-xl">
                        <td className="border-2 border-black text-center"> {submission_date !== undefined ? submission_date.toDateString() : "  Loading..."} </td>
                        <td className="border-2 border-black text-center">{document_name !== undefined ? document_name : "  Loading..."}</td>
                        <td className="border-2 border-black text-center"> <button
                            className="bg-black text-white w-20 h-7 rounded-md hover:bg-gray-500"
                            >
                            View
                            </button></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
        
        <div className="flex mt-2">
            <h1 className="ml-4 mt-4 text-2xl font-semibold"><u>Fund Credentials overview:</u></h1>
            <button className="w-40 bg-black border-2 mt-8 ml-[350px] text-white h-8 rounded-md ">
                Status:{status !== undefined ? status : "  Loading..."}
            </button>
        </div>
        <table className="w-[800px] mt-4 ml-4 text-xl border-2 border-black" >
            <tbody>
                <tr className="font-xl font-semibold">
                    <td className="border-2 border-black text-center">Total Fund 
                    Requested</td>
                    <td className="border-2 border-black text-center">Fund Allocated</td>
                    <td className="border-2 border-black text-center">Fund Requested
                    Date</td>
                    <td className="border-2 border-black text-center">Fund Allocated
                    Date</td>
                    <td className="border-2 border-black text-center">Document</td>
                </tr>
                <tr>
                    <td className="border-2 border-black text-center"> {total_fund_requested !== undefined ? total_fund_requested : "  Loading..."} </td>
                    <td className="border-2 border-black text-center">{fund_allocated !== undefined ? fund_allocated : "  Loading..."}</td>
                    <td className="border-2 border-black text-center">{fund_requested_date !== undefined ? fund_requested_date.toDateString() : "  Loading..."}</td>
                    <td className="border-2 border-black text-center">{fund_allocated_date !== undefined ? fund_allocated_date.toDateString() : "  Loading..."}</td>
                    <td className="border-2 border-black text-center"> <button
                        className="bg-black text-white w-20 h-7 rounded-md hover:bg-gray-500"
                        >
                        View
                        </button></td>
                </tr>
            </tbody>
        </table>
        <div className="flex justify-center">
            <div className=" w-60 text-xl border-2 p-1 border-black bg-black h-9 rounded-md mt-2 text-white">
                Remaining Funds: {remaining_funds !== undefined ? remaining_funds : "  Loading..."}
            </div>
        </div>

        <div className="ml-4 mt-2 text-2xl font-semibold"><u>Fund Utilization Report:</u></div>
        <table className="w-[800px] mt-4 ml-4 text-xl border-2 border-black" >
            <tbody>
                <tr className="font-xl font-semibold">
                    <td className="border-2 border-black text-center">Date of Transaction</td>
                    <td className="border-2 border-black text-center">Utilization Details</td>
                    <td className="border-2 border-black text-center">Amount Utilized</td>
                    <td className="border-2 border-black text-center">Document</td>
                </tr>
                <tr>
                    <td className="border-2 border-black text-center"> {date_of_transaction !== undefined ? date_of_transaction.toDateString() : "  Loading..."} </td>
                    <td className="border-2 border-black text-center">{utilization_details !== undefined ? utilization_details : "  Loading..."}</td>
                    <td className="border-2 border-black text-center">{amount_utilized !== undefined ? amount_utilized : "  Loading..."}</td>
                    <td className="border-2 border-black text-center"> <button
                        className="bg-black text-white w-20 h-7 rounded-md hover:bg-gray-500"
                        >
                        View
                        </button></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default Highlights;