'use client';
import React from 'react';

interface ProposedOutlayTableProps {
  tableData: { [key: string]: string };
  onInputChange: (key: string, value: string) => void;
}

const ProposedOutlayTable: React.FC<ProposedOutlayTableProps> = ({ tableData, onInputChange }) => {
  const renderRow = (id: string, label: string) => (
    <tr key={id}>
      <td className="border border-black px-4 py-2 text-center">{id}</td>
      <td className="border border-black px-4 py-2">{label}</td>
      {['total', '1st', '2nd', '3rd'].map((period) => (
        <td key={`${id}_${period}`} className="border border-black px-4 py-2">
          <input
            type="text"
            className="w-full border border-black p-1"
            value={tableData[`${id}_${period}`] || ''}
            onChange={(e) => onInputChange(`${id}_${period}`, e.target.value)}
          />
        </td>
      ))}
    </tr>
  );

  return (
    <div className="overflow-x-auto bg-white">
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
          {/* Capital Expenditure Section */}
          {[
            { id: "9.1", label: "Land & Building" },
            { id: "9.2", label: "Equipment" },
            { id: "9.3", label: "Total Capital (9.1+9.2)" },
          ].map((row) => renderRow(row.id, row.label))}

          {/* Revenue Expenditure Section */}
          {[
            { id: "9.4", label: "Salaries/allowances" },
            { id: "9.5", label: "Consumables" },
            { id: "9.6", label: "Travel" },
            { id: "9.7", label: "Contingency" },
            { id: "9.8", label: "Institutional Overhead" },
            { id: "9.9", label: "Attending or organizing Workshop/Seminar" },
          ].map((row) => renderRow(row.id, row.label))}

          {/* Total Revenue Expenditure */}
          <tr>
            <td className="border border-black px-4 py-2 text-center">9.10</td>
            <td className="border border-black px-4 py-2">Total Revenue Expenditure</td>
            {['total', '1st', '2nd', '3rd'].map((period) => (
              <td key={`9.10_${period}`} className="border border-black px-4 py-2">
                <input
                  type="text"
                  className="w-full border border-black p-1"
                  value={tableData[`9.10_${period}`] || ''}
                  onChange={(e) => onInputChange(`9.10_${period}`, e.target.value)}
                />
              </td>
            ))}
          </tr>

          {/* Additional Costs Section */}
          <tr>
            <td className="border border-black px-4 py-2 text-center">9.11</td>
            <td className="border border-black px-4 py-2">Applicable taxes/duties/charges etc.</td>
            {['total', '1st', '2nd', '3rd'].map((period) => (
              <td key={`9.11_${period}`} className="border border-black px-4 py-2">
                <input
                  type="text"
                  className="w-full border border-black p-1"
                  value={tableData[`9.11_${period}`] || ''}
                  onChange={(e) => onInputChange(`9.11_${period}`, e.target.value)}
                />
              </td>
            ))}
          </tr>

          {/* Grand Total */}
          <tr>
            <td className="border border-black px-4 py-2 text-center">9.12</td>
            <td className="border border-black px-4 py-2">Grand Total (9.3+9.8+9.9+9.10+9.11)</td>
            {['total', '1st', '2nd', '3rd'].map((period) => (
              <td key={`9.12_${period}`} className="border border-black px-4 py-2">
                <input
                  type="text"
                  className="w-full border border-black p-1"
                  value={tableData[`9.12_${period}`] || ''}
                  onChange={(e) => onInputChange(`9.12_${period}`, e.target.value)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProposedOutlayTable;