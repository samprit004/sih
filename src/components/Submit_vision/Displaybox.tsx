'use client';
import React from 'react';

interface DisplayBoxProps {
  tableData: { [key: string]: string };
}

const DisplayBox: React.FC<DisplayBoxProps> = ({ tableData }) => {
  const renderRow = (id: string, label: string) => (
    <tr key={id}>
      <td className="border border-black px-4 py-2 text-center">{id}</td>
      <td className="border border-black px-4 py-2">{label}</td>
      {['total', '1st', '2nd', '3rd'].map((period) => (
        <td key={`${id}_${period}`} className="border border-black px-4 py-2">
          {tableData[`${id}_${period}`] || ''}
        </td>
      ))}
    </tr>
  );

  return (
    <div className="overflow-x-auto bg-white mt-8">
      <table className="table-auto border-collapse border border-black w-full text-black">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Sl. No.</th>
            <th className="border border-black px-4 py-2">Items</th>
            <th className="border border-black px-4 py-2">Total project cost</th>
            <th className="border border-black px-4 py-2">1st Year</th>
            <th className="border border-black px-4 py-2">2nd Year</th>
            <th className="border border-black px-4 py-2">3rd Year</th>
          </tr>
        </thead>
        <tbody>
          {/* Similar rows as in ProposedOutlayTable */}
          {[
            { id: "9.1", label: "Land & Building" },
            { id: "9.2", label: "Equipment" },
            { id: "9.3", label: "Total Capital (9.1+9.2)" },
            { id: "9.4", label: "Salaries/allowances" },
            { id: "9.5", label: "Consumables" },
            { id: "9.6", label: "Travel" },
            { id: "9.7", label: "Contingency" },
            { id: "9.8", label: "Institutional Overhead" },
            { id: "9.9", label: "Attending or organizing Workshop/Seminar" },
            { id: "9.10", label: "Total Revenue Expenditure" },
            { id: "9.11", label: "Applicable taxes/duties/charges etc." },
            { id: "9.12", label: "Grand Total (9.3+9.8+9.9+9.10+9.11)" }
          ].map((row) => renderRow(row.id, row.label))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayBox;
