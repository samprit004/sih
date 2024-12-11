'use client';
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


export interface TableRow {
  projectId: string;
  piName: string;
  response: string;
  proposalStatus: string;
  meetingTimeSlot: string;
  fileURL: string;
}

const Table = () => {
  const router = useRouter();
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState("");

  // Fetch table data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/proposal_list"); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setTableData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewClick = (response: React.SetStateAction<string>) => {
    setSelectedResponse(response);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="ml-48">
      <div className="mt-12 px-8 w-full">
        <h1 className="text-2xl font-semibold ml-24 underline">Project Oversight</h1>
      </div>
      <table className="w-[1200px] ml-32 border-4 border-black mt-2 mx-8 content-center">
        <thead>
          <tr>
            <th className="border-4 border-black px-4 py-2">Project ID</th>
            <th className="border-4 border-black px-4 py-2">PI Name</th>
            <th className="border-4 border-black px-4 py-2">Proposal</th>
            <th className="border-4 border-black px-4 py-2">Latest Updates</th>
            <th className="border-4 border-black px-4 py-2">Current Status</th>
            <th className="border-4 border-black px-4 py-2">Meeting time slot</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="border-4 border-black px-4 py-2 text-center">{row.projectId}</td>
              <td className="border-4 border-black px-4 py-2 text-center">{row.piName}</td>
              <td className="px-4 py-2">
                <button className="w-20 ml-6 bg-black text-white h-7 rounded-md hover:bg-gray-500"
                onClick={()=>{window.open(row.fileURL, '_blank', 'noopener,noreferrer')}}>
                  View
                </button>
              </td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button
                  className="bg-black text-white w-20 h-7 rounded-md hover:bg-gray-500"
                  onClick={() => handleViewClick(row.response)}
                >
                  View
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">{row.proposalStatus}</td>
              <td className="border-4 border-black px-4 py-2 text-center">{row.meetingTimeSlot}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default Table;
