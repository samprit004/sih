"use client";
import React, { useState } from "react";
import EditableTable from "./Edit_table";
import DisplayBox from "./DisplayBox";

const App: React.FC = () => {
  const sections = [
    {
      title: "A. Land & Building",
      rows: [
        "Total approved cost",
        "Sanctioned provision in the Year",
        "Expenditure incurred up to Previous year (1)",
        "Total Expenditure up to previous quarter of the current financial year (2)",
        "Expenditure in the present quarter ending (3)",
        "Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)",
      ],
    },
    {
      title: "B. Capital Equipment",
      rows: [
        "Total approved cost",
        "Sanctioned provision in the Year",
        "Expenditure incurred up to Previous year (1)",
        "Total Expenditure up to previous quarter of the current financial year (2)",
        "Expenditure in the present quarter ending (3)",
        "Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)",
      ],
    },
    {
      title: "C. Salaries/Wages",
      rows: [
        "Total approved cost",
        "Sanctioned provision in the Year",
        "Expenditure incurred up to Previous year (1)",
        "Total Expenditure up to previous quarter of the current financial year (2)",
        "Expenditure in the present quarter ending (3)",
        "Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)",
      ],
    },
    {
      title: "D. Consumables",
      rows: [
        "Total approved cost",
        "Sanctioned provision in the Year",
        "Expenditure incurred up to Previous year (1)",
        "Total Expenditure up to previous quarter of the current financial year (2)",
        "Expenditure in the present quarter ending (3)",
        "Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)",
      ],
    },
    {
      title: "E. Travel",
      rows: [
        "Total approved cost",
        "Sanctioned provision in the Year",
        "Expenditure incurred up to Previous year (1)",
        "Total Expenditure up to previous quarter of the current financial year (2)",
        "Expenditure in the present quarter ending (3)",
        "Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)",
      ],
    },
    {
      title: "F. Contingency",
      rows: [
        "Total approved cost",
        "Sanctioned provision in the Year",
        "Expenditure incurred up to Previous year (1)",
        "Total Expenditure up to previous quarter of the current financial year (2)",
        "Expenditure in the present quarter ending (3)",
        "Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)",
      ],
    },
    {
      title: "G. Institutional Charges",
      rows: [
        "Total approved cost",
        "Sanctioned provision in the Year",
        "Expenditure incurred up to Previous year (1)",
        "Total Expenditure up to previous quarter of the current financial year (2)",
        "Expenditure in the present quarter ending (3)",
        "Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)",
      ],
    },
    {
      title: "H. Other Costs",
      rows: [
        "Total approved cost",
        "Sanctioned provision in the Year",
        "Expenditure incurred up to Previous year (1)",
        "Total Expenditure up to previous quarter of the current financial year (2)",
        "Expenditure in the present quarter ending (3)",
        "Progressive expenditure till the end of this quarter (4) = (1)+(2)+(3)",
      ],
    },
  ];

  const [data, setData] = useState(
    sections.map(() => Array(6).fill("")) // Initialize empty data for each section
  );

  const handleRowChange = (sectionIndex: number, rowIndex: number, value: string) => {
    const newData = [...data];
    newData[sectionIndex][rowIndex] = value;
    setData(newData);
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-8">Quarterly Expenditure Statement</h1>

      <div className="flex flex-col flex-wrap">
        {/* Render EditableTable components first */}
        {sections.map((section, sectionIndex) => (
          <EditableTable
            key={sectionIndex}
            title={section.title}
            rows={section.rows}
            data={data[sectionIndex]}
            onRowChange={(rowIndex, value) => handleRowChange(sectionIndex, rowIndex, value)}
          />
        ))}

        {/* Wrap all DisplayBox components inside a separate div */}
        <div className="">
          {sections.map((section, sectionIndex) => (
            <DisplayBox
              key={sectionIndex}
              title={section.title}
              rows={section.rows}
              data={data[sectionIndex]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
