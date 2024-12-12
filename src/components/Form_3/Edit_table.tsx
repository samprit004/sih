"use client";
import React from "react";

interface EditableTableProps {
  title: string; // Section Title (e.g., "A. Land & Building")
  rows: string[]; // Labels for each row
  data: string[]; // Current data for inputs
  onRowChange: (rowIndex: number, value: string) => void; // Change handler
}

const EditableTable: React.FC<EditableTableProps> = ({ title, rows, data, onRowChange }) => {
  return (
    <div className="mb-8 w-full lg:w-1/2">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {rows.map((label, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            type="text"
            value={data[index]}
            onChange={(e) => onRowChange(index, e.target.value)}
            className="w-full border border-gray-300 px-4 py-2"
          />
        </div>
      ))}
    </div>
  );
};

export default EditableTable;
