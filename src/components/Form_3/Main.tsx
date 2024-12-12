'use client';

import React, { useState, useEffect, useRef } from "react";
import Table from "./Table";
import DisplayBox from "./DisplayBox";
import Image from 'next/image';
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import ExpandableCard from './ex_card';

const Main: React.FC = () => {
  // Shared state for table data
  const [data, setData] = useState<string[][]>(
    Array.from({ length: 8 }, () => Array(6).fill(""))
  );

  // State for additional input boxes
  const [inputs, setInputs] = useState<string[]>(Array(4).fill(""));

  // State for progress tracking
  const [progress, setProgress] = useState<number>(0);

  // State for the 3-dot dropdown
  const [isDownloadDropdownVisible, setIsDownloadDropdownVisible] = useState(false);
  
  // Reference for preview content
  const previewRef = useRef<HTMLDivElement>(null);

  // Update handler for table data with bounds checks
  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    // Ensure rowIndex and colIndex are valid
    if (rowIndex < 0 || rowIndex >= data.length) {
      console.error('Invalid rowIndex:', rowIndex);
      return;
    }
    if (colIndex < 0 || colIndex >= data[rowIndex].length) {
      console.error('Invalid colIndex:', colIndex);
      return;
    }

    // Proceed to update data if indices are valid
    const updatedData = [...data];
    updatedData[rowIndex][colIndex] = value;
    setData(updatedData);
  };

  // Update handler for input boxes
  const handleBoxChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  // Function to calculate progress
  const calculateProgress = () => {
    const filledInputs = inputs.filter(input => input.trim() !== "").length;
    const filledTableCells = data.flat().filter(cell => cell.trim() !== "").length;

    const totalFields = inputs.length + data.length * data[0].length;
    const completedFields = filledInputs + filledTableCells;

    const progressValue = (completedFields / totalFields) * 100;
    setProgress(progressValue);
  };

  // Use effect to recalculate progress whenever form data changes
  useEffect(() => {
    calculateProgress();
  }, [data, inputs]);

  // Handle downloading as PDF
  const handleDownloadPDF = () => {
    if (!previewRef.current) return;

    const previewElement = previewRef.current;
    const textContent = previewElement.innerText;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 10;
    const contentWidth = pageWidth - margin * 2;

    const lines = pdf.splitTextToSize(textContent, contentWidth);

    pdf.text(lines, margin, margin);

    pdf.save('text-content.pdf');
  };

  // Handle downloading as TXT
  const handleDownloadTXT = () => {
    if (!previewRef.current) return;

    const previewContent = previewRef.current.innerText;
    const blob = new Blob([previewContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'live-preview.txt');
  };

  // Handle downloading as DOCX
  const handleDownloadDOCX = async () => {
    if (!previewRef.current) return;

    const doc = new Document({
      sections: [
        {
          children: Array.from(previewRef.current.querySelectorAll('div.preview-item')).flatMap(
            (item) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: item.querySelector('h4')?.innerText || '',
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                text: item.querySelector('p')?.innerText || 'N/A',
              }),
            ]
          ),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'live-preview.docx');
  };

  return (
    <div>
      <div className="border-black border-t-2 w-full mt-[10%]"></div>
      
      <div className="flex">
        <div className="mt-[1%] px-4 w-1/2">
          <div className="flex justify-between">
            <div className="flex">
              <button className="flex items-center gap-4">
                <Image
                  className=''
                  src="/menu.svg"
                  alt="Next.js logo"
                  width={40}
                  height={40}
                />
                <h1 className="font-semibold">pd1564 Quarterly Project Portal</h1>
              </button>
            </div>
            <div className="flex gap-4 text-md font-semibold">
              <button className="font-semibild px-2  bg-black rounded-lg text-white">Upload</button>
              <button className="font-semibild px-2  bg-black rounded-lg text-white">Submit</button>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="flex justify-between items-center mt-3 mb-2">
            <span className="font-bold text-md">Progress Tracker:</span>
            <span className="text-md bg-black text-white mb-1 px-2 py-1 rounded-md font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="flex items-center w-full bg-gray-300 rounded-full h-3 mb-3">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <h1 className="text-2xl font-bold mb-6">Editable Table with Input Fields</h1>

          {/* Input Boxes */}
          <div className="flex flex-col flex-wrap gap-4 mb-6">
            {["Label 1", "Label 2", "Label 3", "Label 4"].map((label, index) => (
              <div key={index} className="flex flex-col">
                <label htmlFor={`input-${index}`} className="mb-2 text-sm font-medium">
                  {label}
                </label>
                <input
                  id={`input-${index}`}
                  type="text"
                  value={inputs[index]}
                  onChange={(e) => handleBoxChange(index, e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-md"
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
              </div>
            ))}
          </div>

          {/* Editable Table */}
          <Table data={data} onInputChange={handleInputChange} />
          
        </div>
        
        {/* display */}
        <div className="w-1/2 bg-[#3F3F3FCC]">
          
          {/* Download Options */}
          <div className="flex justify-end gap-4 relative mt-4 px-8">
            <button
              className="px-4 py-2 text-white rounded-lg bg-black mb-2"
              onClick={handleDownloadPDF}
            >
              Download PDF
            </button>
            <button
              className="relative"
              onClick={() => setIsDownloadDropdownVisible(!isDownloadDropdownVisible)}
            >
              <Image src="/3dots.svg" alt="Options" width={40} height={0} />
            </button>
            {isDownloadDropdownVisible && (
              <div className="absolute right-0 top-12 bg-white shadow-md border rounded-lg z-50">
                <button
                  className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
                  onClick={() => {
                    handleDownloadTXT();
                    setIsDownloadDropdownVisible(false);
                  }}
                >
                  Download as .txt
                </button>
                <button
                  className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
                  onClick={() => {
                    handleDownloadDOCX();
                    setIsDownloadDropdownVisible(false);
                  }}
                >
                  Download as .docx
                </button>
              </div>
            )}
          </div>

          <div className="bg-white h-[100vh] m-8 overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xl font-bold mt-10 mb-4">Display Data</h2>
              <DisplayBox data={data} inputs={inputs} onInputChange={handleInputChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
