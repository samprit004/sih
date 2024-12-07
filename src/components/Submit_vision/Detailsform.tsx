'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TextEditor from '@/components/Submit_vision/Texteditor';
import DisplayBox from './Displaybox';
import ProposedOutlayTable from './ProposedOutlayTable';
import SideNav from '@/components/Submit_vision/Side_nav'; // Import the Side_nav component
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

interface FormData {
  projectTitle: string;
  principalAgency: string;
  subAgency: string;
  issueDefinition: string;
  objectives: string;
  justification: string;
  projectBenefits: string;
  workPlan: string;
  methodology: string;
  workOrganization: string;
  timeSchedule: string;
}

const WORD_LIMIT = 300;

interface DetailsFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const DetailsForm: React.FC<DetailsFormProps> = ({
  formData,
  setFormData,
  progress,
  setProgress,
}) => {
  const [isNavVisible, setIsNavVisible] = useState(false); // Manage Side_nav visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDownloadDropdownVisible, setIsDownloadDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [tableData, setTableData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (key: string, value: string) => {
    setTableData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEditorChange = (name: string, content: string) => {
    const wordCount = getWordCount(content);

    if (wordCount > WORD_LIMIT) {
      alert('Word limit exceeded. Maximum allowed is 300 words.');
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: content }));
  };

  const getWordCount = (text: string | undefined | null) => {
    // Ensure the input is a string
    const plainText = (text || '').replace(/<[^>]*>/g, '').trim(); // Remove HTML tags like <br>
    if (!plainText) return 0; // Return 0 if empty after trimming
    return plainText.split(/\s+/).length; // Split by whitespace to count words
  };
  
  useEffect(() => {
    const totalFields = 11;
    const completedFields = Object.values(formData).filter(
      (val) => val.trim() !== ''
    ).length;
    const progressValue = (completedFields / totalFields) * 100;
    setProgress(progressValue);
  }, [formData]);

  const handleDownloadPDF = () => {
    if (!previewRef.current) return;
  
    const previewElement = previewRef.current;
    const textContent = previewElement.innerText; // Extract text content from the element
  
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 10; // Margin from the edges
    const contentWidth = pageWidth - margin * 2;
  
    // Split the text into lines that fit within the PDF width
    const lines = pdf.splitTextToSize(textContent, contentWidth);
  
    // Add the lines to the PDF, starting with a margin at the top
    pdf.text(lines, margin, margin);
  
    pdf.save('text-content.pdf');
  };
  
  const handleDownloadTXT = () => {
    if (!previewRef.current) return;

    const previewContent = previewRef.current.innerText;
    const blob = new Blob([previewContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'live-preview.txt');
  };

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

    <div className="w-full flex gap-4 max-h-screen bg-white px-3 relative">
      <div className="w-1/2 flex overflow-y-auto flex-col ">
      <SideNav isVisible={isNavVisible} onClose={() => setIsNavVisible(false)} />

      <div className="flex justify-between">
        <button onClick={() => setIsNavVisible(true)}>
          <Image src="/menu.svg" alt="Menu Icon" width={40} height={120} />
        </button>

        <button
          disabled={!Object.values(formData).every((val) => val.trim() !== '')}
          className={`mt-4 px-14 py-3 text-white ${
            Object.values(formData).every((val) => val.trim() !== '') ? 'bg-black' : 'bg-gray-300 cursor-not-allowed'
          } rounded-lg shadow-md`}
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col mt-4 mb-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-md">Progress Tracker:</span>
          <span className="text-md bg-black text-white mb-1 px-2 py-1 rounded-md font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="flex items-center w-full bg-gray-300 rounded-full h-3 mt-2">
          <div
            className="bg-black h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between">
        <h2 className="font-semibold">
          In which category would you like to proceed with your project?
        </h2>
        <button onClick={toggleDropdown} className="relative">
  <div className="flex bg-[#AAA2A2] px-2 gap-1 rounded">
    S&T
    <Image
      className={`transition-transform transform ${
        isDropdownOpen ? 'rotate-180' : 'rotate-0'
      }`}
      src="/drop.svg"
      alt="Dropdown Icon"
      width={20}
      height={20}
    />
  </div>
</button>
{isDropdownOpen && (
  <div className="absolute left-0 w-auto bg-[#AAA2A2] px-2 py-1 gap-1 rounded shadow-md">
    <ul className="py-1">
      <li>
        <a
          href="#"
          className="block px-2 py-1 text-sm text-black hover:text-white hover:bg-gray-700 rounded"
        >
          R&D
        </a>
      </li>
    </ul>
  </div>
)}

      </div>

      {/* <div className="flex space-x-4"> */}
                  
         <div className="space-y-4">
            {[
              { label: 'Project Title', name: 'projectTitle' },
              { label: 'Principal Agency', name: 'principalAgency' },
              { label: 'Sub Agency', name: 'subAgency' },
              { label: 'Issue Definition', name: 'issueDefinition' },
              { label: 'Objectives', name: 'objectives' },
              { label: 'Justification', name: 'justification' },
              { label: 'Project Benefits', name: 'projectBenefits' },
              { label: 'Work Plan', name: 'workPlan' },
              { label: 'Methodology', name: 'methodology' },
              { label: 'Work Organization', name: 'workOrganization' },
              { label: 'Time Schedule', name: 'timeSchedule' },
            ].map(({ label, name }) => (
              <div className="question-card" key={name}>
                <label className="mb-1 block text-md font-semibold">{label}</label>
                <TextEditor
                  onContentChange={(content: string) => handleEditorChange(name, content)}
                />
                <div className="text-right text-sm text-gray-600 mt-1 flex justify-between mb-2">
                  <span>Recruiter tip: write 300 words to increase interview chances</span>
                  {getWordCount(formData[name as keyof FormData] || '')}/{WORD_LIMIT}
                </div>
              </div>
            ))}
          </div>


          <div>
            <h1 className='text-md font-medium mt-4 mb-2'>9. Details of proposed outlay</h1>
            <ProposedOutlayTable tableData={tableData} onInputChange={handleInputChange} />
            {/* <DisplayBox tableData={tableData} /> */}
          </div>
        </div>

        <div className="w-1/2 p-6 bg-[#3F3F3FCC]">
          <div className="flex justify-end gap-4 relative">
            <button
              className="px-4 py-2 text-white rounded-lg bg-black mb-2"
              onClick={handleDownloadPDF}
            >
              Download
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

          <div
            ref={previewRef}
            className="bg-white p-8 h-[87vh] overflow-y-auto"
            style={{
              overflowX: 'hidden',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
            }}
          >
            <h2 className="text-lg font-semibold text-center mb-8">PROJECT PROPOSAL FOR <a className='font-bold'>S&T</a> GRANT OF MOC</h2>
            <div className="space-y-6">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="preview-item">
                  <h4 className="font-bold text-md mb-2">{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
            <div>
            <DisplayBox tableData={tableData} />
            </div>
          </div>
        </div>

      {/* </div> */}
    </div>
  );
};

export default DetailsForm;
