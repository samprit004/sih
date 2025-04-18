"use client";

import React from "react";

interface TableProps {
  data: string[][];
  onInputChange: (rowIndex: number, colIndex: number, value: string) => void;
}

const Table: React.FC<TableProps> = ({ data, onInputChange }) => {
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
    <div className="overflow-x-auto mb-8">
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
              {/* Editable cells */}
              {data[rowIndex].map((value, colIndex) => (
                <td key={colIndex} className="border border-gray-400 px-4 py-2">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => onInputChange(rowIndex, colIndex, e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1"
                  />
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
    </div>
  );
};

export default Table;
