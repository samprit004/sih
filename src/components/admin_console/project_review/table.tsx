'use client';
import React, { useState, useEffect } from "react";
import Dialog from "./dialog";
import Link from "next/link";

interface TableRow {
  projectId: string;
  piName: string;
  response: string;
  proposalStatus: string;
}

const Table = () => {
  const [tableData, setTableData] = useState<TableRow[]>([
    {
      projectId: "P12345",
      piName: "John Doe",
      response: "This is a sample response for design purposes.",
      proposalStatus: "Pending",
    },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState("");

  const handleViewClick = (response: string) => {
    setSelectedResponse(response);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="ml-48">
      <div className="mt-32 px-8 w-full">
        <h1 className="text-2xl font-semibold ml-24 underline">Proposal Overview</h1>
      </div>
      <table className="w-[1200px] ml-32 border-4 border-black mt-2 mx-8 content-center">
        <thead>
          <tr>
            <th className="border-4 border-black px-4 py-2">Project ID</th>
            <th className="border-4 border-black px-4 py-2">PI Name</th>
            <th className="border-4 border-black px-4 py-2">Proposal</th>
            <th className="border-4 border-black px-4 py-2">Agent Analysis</th>
            <th className="border-4 border-black px-4 py-2">Decision</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="border-4 border-black px-4 py-2 text-center">{row.projectId}</td>
              <td className="border-4 border-black px-4 py-2 text-center">{row.piName}</td>
              <td className="px-4 py-2">
                <button className="w-20 ml-6 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
              <Link href="/Admin_console/proposal_overview">
                <button
                  className="bg-black text-white w-20 h-7 rounded-md hover:bg-gray-500"
                  onClick={() => handleViewClick(row.response)}
                >
                  View
                </button>
                </Link>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">{row.proposalStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} response={selectedResponse} />
    </div>
  );
};

export default Table;
