"use client";

import React from "react";

interface DisplayBoxProps {
  data: string[][];
  inputs: string[];
  onInputChange: (rowIndex: number, colIndex: number, value: string) => void;
}

const DisplayBox: React.FC<DisplayBoxProps> = ({ data, inputs, onInputChange }) => {
  const columnLabels = [
    "Items",
    "total approved cost*",
    "Sectioned provision in the year",
    "expenditure incurred up to previous year (1)",
    "Total Expenditure up to previous quater of the current financial year(2)",
    "Expenditure in the present quater ending(3)",
    "progressive expenditure till the end of this quater (4) = (1)+(2)+(3)",
  ];

  const rowLabels = [
    "A. land & Building",
    "B. Capital Equipement",
    "C. Man Power",
    "D. consumable",
    "E. TA/DA",
    "F. contingencies",
    "G. attending /organizing seminar ect.",
    "H. others",
  ];

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2"></h2>
        <ul>
          {inputs.map((value, index) => (
            <li key={index} className="mb-1">
              <strong>Input {index + 1}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
          <thead>
            <tr>
              {columnLabels.map((label, colIndex) => (
                <th key={colIndex} className="border border-gray-400 px-4 py-2">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowLabels.map((rowLabel, rowIndex) => (
              <tr key={rowIndex}>
                {/* First column with labels */}
                <td className="border border-gray-400 px-4 py-2">{rowLabel}</td>
                {/* Non-editable cells */}
                {data[rowIndex].map((value, colIndex) => (
                  <td key={colIndex} className="border border-gray-400 px-4 py-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}

            {/* Total Row with inputs */}
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">Total</td>
              {columnLabels.slice(1).map((_, colIndex) => (
                <td key={colIndex} className="border border-gray-400 px-4 py-2 font-bold">
                  <input
                    type="text"
                    value=""
                    onChange={(e) => onInputChange(8, colIndex, e.target.value)} // 8 corresponds to the "Total" row
                    className="w-full border border-gray-300 px-2 py-1"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <div>
        <div><h1 className="text-xl font-semibold my-2">*Details to be submitted as per sanction letter</h1></div>
        <div className="">
          <div className="flex flex-col gap-2">
            <div>
            <label>Funds advanced till date</label>
            <input type="text" /></div>
            <div>
            <label>expenditure incurred till date</label>
            <input type="text" /></div>
            <div>
            <label>Funds advanced till date</label>
            <input type="text" /></div>
          </div>

          <div className="flex justify-between mb-4 mt-2">
            <div className="flex flex-col gap-2">
              <h1>Signature of Associate Finance officer</h1>
              <label>Sign:</label>
              <input type="text" />
              <label>Designation:</label>
              <input type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Signature of Associate Finance officer</h1>
              <label>Sign:</label>
              <input type="text" />
              <label>Designation:</label>
              <input type="text" />
            </div>
            
          </div>
          <div className="flex justify-center">
                <div className="flex"><label>Seal</label><input type="text" /></div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;
