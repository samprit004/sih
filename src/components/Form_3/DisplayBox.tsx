"use client"
import React from 'react';

// Row Component to render each row in DisplayBox (Read-only)
interface RowProps {
  label: string;
  values: string[];
}

const Row: React.FC<RowProps> = ({ label, values }) => {
  return (
    <tr>
      <td className="border border-gray-400 px-4 py-2">{label}</td>
      {values.map((value, index) => (
        <td key={index} className="border border-gray-400 px-4 py-2">
          {value}
        </td>
      ))}
    </tr>
  );
};

// DisplayBox Component to render the table with read-only data
interface DisplayBoxProps {
  rows: string[];
  data: string[][];
}

const DisplayBox: React.FC<DisplayBoxProps> = ({ rows, data }) => {
  return (
    <div className="overflow-x-auto mb-8 w-1/2"> {/* 50% width and allow horizontal scrolling */}
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Items</th>
            <th className="border border-gray-400 px-4 py-2">Total Approved Cost</th>
            <th className="border border-gray-400 px-4 py-2">Sanctioned provision in the Year</th>
            <th className="border border-gray-400 px-4 py-2">Expenditure incurred up to Previous year (1)</th>
            <th className="border border-gray-400 px-4 py-2">Total Expenditure up to previous quarter of the current financial year (2)</th>
            <th className="border border-gray-400 px-4 py-2">Expenditure in the present quarter ending</th>
            <th className="border border-gray-400 px-4 py-2">Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <Row
              key={rowIndex}
              label={row}
              values={data[rowIndex]} // No extra empty columns
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayBox;
