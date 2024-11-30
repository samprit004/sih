'use client';
import React from "react";

const ProposedOutlayTable: React.FC = () => {
  // State to capture input values entered in the table
  const [tableData, setTableData] = React.useState<{ [key: string]: string }>({});

  // Function to handle changes in input fields and update the state
  const handleInputChange = (key: string, value: string) => {
    setTableData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="overflow-x-auto bg-white">
      {/* Table container for horizontal scrolling on small screens */}
      <table className="table-auto border-collapse border border-black w-full text-black">
        <thead>
          {/* Table header */}
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
          <tr>
            <td className="border border-black px-4 py-2 text-center">9.1</td>
            <td className="border border-black px-4 py-2">Land & Building</td>
            {/* Input for Total project cost */}
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.1_total", e.target.value)}
              />
            </td>
            {/* Input for 1st year cost */}
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.1_1st", e.target.value)}
              />
            </td>
            {/* Input for 2nd year cost */}
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.1_2nd", e.target.value)}
              />
            </td>
            {/* Input for 3rd year cost */}
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.1_3rd", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            {/* Similar row structure for Equipment */}
            <td className="border border-black px-4 py-2 text-center">9.2</td>
            <td className="border border-black px-4 py-2">Equipment</td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.2_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.2_1st", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.2_2nd", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.2_3rd", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            {/* Summarizing Capital Expenditure */}
            <td className="border border-black px-4 py-2 text-center">9.3</td>
            <td className="border border-black px-4 py-2">Total Capital (9.1+9.2)</td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.3_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.3_1st", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.3_2nd", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.3_3rd", e.target.value)}
              />
            </td>
          </tr>
          {/* Revenue Expenditure Section */}
          {[
            { id: "9.4", label: "Salaries/allowances" },
            { id: "9.5", label: "Consumables" },
            { id: "9.6", label: "Travel" },
            { id: "9.7", label: "Contingency" },
            { id: "9.8", label: "Institutional Overhead" },
            { id: "9.9", label: "Attending or organizing Workshop/Seminar" },
          ].map((row) => (
            <tr key={row.id}>
              {/* Mapping through Revenue Expenditure items */}
              <td className="border border-black px-4 py-2 text-center">{row.id}</td>
              <td className="border border-black px-4 py-2">{row.label}</td>
              <td className="border border-black px-4 py-2">
                <input
                  type="text"
                  className="w-full border border-black p-1"
                  onChange={(e) => handleInputChange(`${row.id}_total`, e.target.value)}
                />
              </td>
              <td className="border border-black px-4 py-2">
                <input
                  type="text"
                  className="w-full border border-black p-1"
                  onChange={(e) => handleInputChange(`${row.id}_1st`, e.target.value)}
                />
              </td>
              <td className="border border-black px-4 py-2">
                <input
                  type="text"
                  className="w-full border border-black p-1"
                  onChange={(e) => handleInputChange(`${row.id}_2nd`, e.target.value)}
                />
              </td>
              <td className="border border-black px-4 py-2">
                <input
                  type="text"
                  className="w-full border border-black p-1"
                  onChange={(e) => handleInputChange(`${row.id}_3rd`, e.target.value)}
                />
              </td>
            </tr>
          ))}
          <tr>
            {/* Summarizing Revenue Expenditure */}
            <td className="border border-black px-4 py-2 text-center">9.10</td>
            <td className="border border-black px-4 py-2">Total Revenue Expenditure</td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.10_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
            <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.10_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
            <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.10_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
            <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.10_total", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            {/* Additional Costs Section */}
            <td className="border border-black px-4 py-2 text-center">9.11</td>
            <td className="border border-black px-4 py-2">Applicable taxes/duties/charges etc.</td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.11_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
            <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.11_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
            <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.11_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
            <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.11_total", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            {/* Grand Total */}
            <td className="border border-black px-4 py-2 text-center">9.12</td>
            <td className="border border-black px-4 py-2">Grand Total (9.3+9.8+9.9+9.10+9.11)</td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.12_total", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.12_1st", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.12_2nd", e.target.value)}
              />
            </td>
            <td className="border border-black px-4 py-2">
              <input
                type="text"
                className="w-full border border-black p-1"
                onChange={(e) => handleInputChange("9.12_3rd", e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProposedOutlayTable;
