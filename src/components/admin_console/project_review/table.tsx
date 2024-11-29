// components/Table.js
'use client'
import React, { useState } from "react";
import Dialog from "./dialog";

// Data stored in a variable (array of objects)
const tableData = [
  {
    projectId: "pd1564",
    piName: "Dr. Aditi Sharma (JNCASR, Bangalore)",
    proposalStatus: "Accepted by AI",
    response: `• Well-Defined Objectives: The proposal articulates clear and achievable objectives.
• Impactful Solution: The project addresses a critical issue with the potential for wide-reaching impact.
• Methodological Soundness: The research methodology is robust and feasible.
• Resource Alignment: Requested resources and budget allocation are appropriate and justified.
• Compliance with Criteria: All proposal sections meet the evaluation guidelines and requirements.`,
  },
  {
    projectId: "pd1580",
    piName: "Dr. Rajeev Menon (IIT Kharagpur)",
    proposalStatus: "Rejected by AI",
    response: `Rejection Responses
Rejection Response 1:
Ambiguous Goals: The project lacks clear, measurable objectives.
Weak Feasibility: The methodology proposed is impractical or lacks detail.
Unjustified Budget: Budget allocation is excessive or fails to justify requested resources.
Limited Relevance: The proposal does not adequately align with funding priorities.
Insufficient Supporting Data: Essential data and evidence to support claims are missing.`,
  },
  {
    projectId: "pd1596",
    piName: "Dr. Neha Gupta (IIT Bombay)",
    proposalStatus: "Accepted by AI",
    response: `Acceptance Response 2:
Innovative Approach: The proposal offers a novel solution to an existing problem.
Strong Technical Feasibility: The technical framework and execution plan are highly credible.
Qualified Team: The PI demonstrates expertise, and the team structure supports successful execution.
Sustainability: Long-term benefits and scalability of the project are evident.
Strategic Fit: The proposal aligns with the funding agency's priorities and vision.`,
  },
  {
    projectId: "pd1602",
    piName: "Dr. Vikram Reddy (IIT-ISM, Dhanbad)",
    proposalStatus: "Rejected by AI",
    response: `Rejection Response 2:
Incomplete Proposal: Key sections of the proposal are missing or poorly developed.
Redundant Concept: The project duplicates existing research without significant advancements.
Overestimated Costs: Budget exceeds reasonable limits without justification.
Non-Aligned Goals: Objectives do not address the core aims of the funding body.
Poor Risk Management: The proposal lacks strategies for addressing potential risks.`,
  },
  {
    projectId: "pd1664",
    piName: "Dr. Meera Narayanan (CCL, Jharkhand)",
    proposalStatus: "Accepted by AI",
    response: `Acceptance Response 3:
Scientific Contribution: The project is expected to make a significant contribution to the field.
Realistic Timeline: The timeline for project completion is achievable and well-planned.
Effective Budget Use: Budget is meticulously planned and demonstrates cost-effectiveness.
Risk Mitigation: Potential risks are identified with a clear mitigation strategy.
Comprehensive Documentation: The proposal includes all required sections with substantial supporting data.`,
  },
];

const Table = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState("");

  const handleViewClick = (response: React.SetStateAction<string>) => {
    setSelectedResponse(response);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="ml-56">
      <div className="mt-32 px-8 w-full">
        <h1 className="text-2xl font-semibold ml-24 underline">Proposal Overview</h1>
      </div>
      <table className="w-[1200px] ml-32 border-4 border-black mt-2 mx-8 content-center">
        <thead>
          <tr>
            <th className="border-4 border-black px-4 py-2">Project ID</th>
            <th className="border-4 border-black px-4 py-2">PI Name</th>
            <th className="border-4 border-black px-4 py-2">Proposal</th>
            <th className="border-4 border-black px-4 py-2">AI Analysis</th>
            <th className="border-4 border-black px-4 py-2">Decision</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="border-4 border-black px-4 py-2 border-t-2 text-center">{row.projectId}</td>
              <td className="border-4 border-black px-4 py-2 border-t-2 text-center">{row.piName}</td>
              <td className="px-4 py-2 border-b-4 border-black ">
                <button className=" w-20 ml-6 bg-black text-white items-center  h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
              <td className="px-4 py-2 flex justify-center border-2 border-l-4 border-black">
                <button
                  className="bg-black text-white items-center  w-20 h-7 rounded-md hover:bg-gray-500"
                  onClick={() => handleViewClick(row.response)}
                >
                  View
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 border-t-2 text-center">{row.proposalStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} response={selectedResponse} />
    </div>
  );
};

export default Table;
