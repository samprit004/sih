"use client"
import React from 'react';

interface RowProps {
  label: string;
  values: string[];
  onInputChange: (colIndex: number, value: string) => void;
}

const Row: React.FC<RowProps> = ({ label, values, onInputChange }) => {
  return (
    <tr>
      <td className="border border-gray-400 px-4 py-2">{label}</td>
      {values.map((value, index) => (
        <td key={index} className="border border-gray-400 px-4 py-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onInputChange(index, e.target.value)}
            className="w-1/2 border border-gray-300 px-2 py-1"
          />
        </td>
      ))}
    </tr>
  );
};

interface TableProps {
  rows: string[];
  data: string[][];
  onRowChange: (rowIndex: number, colIndex: number, value: string) => void;
}

const Table: React.FC<TableProps> = ({ rows, data, onRowChange }) => {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
      <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Items</th>
            <th className="border border-gray-400 px-4 py-2">Total Approved Cost</th>
            <th className="border border-gray-400 px-4 py-2">Sanctioned  provision in the  Year</th>
            <th className="border border-gray-400 px-4 py-2">Expenditure  incurred up to  Previous year  (1) (1)</th>
            <th className="border border-gray-400 px-4 py-2">Total Expenditure up to previous quarter of the  current financial  year (2)</th>
            <th className="border border-gray-400 px-4 py-2">Expenditure in  the present  quarter ending</th>
            <th className="border border-gray-400 px-4 py-2">Progressive  expenditure till the  end of this quarter 
            (4) = (1)+(2)+(3)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <Row
              key={rowIndex}
              label={row}
              values={data[rowIndex]}
              onInputChange={(colIndex, value) => onRowChange(rowIndex, colIndex, value)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
