"use client"
import React, { useState } from 'react';
import DisplayBox from './DisplayBox';  // Import DisplayBox component

// Row Component to render each row in both Table and DisplayBox
interface RowProps {
  label: string;
  values: string[];
  onInputChange?: (colIndex: number, value: string) => void; // Optional input change handler
}

const Row: React.FC<RowProps> = ({ label, values, onInputChange }) => {
  return (
    <tr>
      <td className="border border-gray-400 px-4 py-2">{label}</td>
      {values.map((value, index) => (
        <td key={index} className="border border-gray-400 px-4 py-2">
          {onInputChange ? (
            // Editable input field if onInputChange is provided
            <input
              type="text"
              value={value}
              onChange={(e) => onInputChange(index, e.target.value)}
              className="w-1/2 border border-gray-300 px-2 py-1"
            />
          ) : (
            // Display value if no input field
            value
          )}
        </td>
      ))}
    </tr>
  );
};

// Table Component to render the editable table
interface TableProps {
  rows: string[];
  data: string[][];
  onRowChange: (rowIndex: number, colIndex: number, value: string) => void;
}

const Table: React.FC<TableProps> = ({ rows, data, onRowChange }) => {
  return (
    <div className="overflow-x-auto mt-[15%] mb-8 w-1/2"> {/* 50% width and allow horizontal scrolling */}
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
              onInputChange={(colIndex, value) => onRowChange(rowIndex, colIndex, value)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// App Component to manage rows and data
const App: React.FC = () => {
  const rows = [
    "A. Land & Building", 
    "B. Equipment", 
    "C. Machinery", 
    "D. Infrastructure", 
    "E. Miscellaneous", 
    "F. Salaries", 
    "G. Maintenance", 
    "H. Other Costs", 
    "I. Investments", 
    "J. Revenue"
  ];

  const [data, setData] = useState<string[][]>([
    ["", "", "", "", "", ""], // A. Land & Building
    ["", "", "", "", "", ""], // B. Equipment
    ["", "", "", "", "", ""], // C. Machinery
    ["", "", "", "", "", ""], // D. Infrastructure
    ["", "", "", "", "", ""], // E. Miscellaneous
    ["", "", "", "", "", ""], // F. Salaries
    ["", "", "", "", "", ""], // G. Maintenance
    ["", "", "", "", "", ""], // H. Other Costs
    ["", "", "", "", "", ""], // I. Investments
    ["", "", "", "", "", ""], // J. Revenue
  ]);

  const handleRowChange = (rowIndex: number, colIndex: number, value: string) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  return (
    <div>
      {/* Editable Table Component */}
      <Table rows={rows} data={data} onRowChange={handleRowChange} />
      
      {/* Read-only DisplayBox Component */}
      <DisplayBox rows={rows} data={data} />
    </div>
  );
};

export default App;
