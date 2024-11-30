'use client';

import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

interface LivePreviewProps {
  formData: {
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
  };
}

const LivePreview: React.FC<LivePreviewProps> = ({ formData }) => {
  const previewRef = useRef<HTMLDivElement>(null); // Reference for the preview container
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;

    const previewElement = previewRef.current;

    // Use `html2canvas` to capture the content
    const canvas = await html2canvas(previewElement, { scale: 2 }); // High-resolution capture
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("live-preview.pdf");
  };

  const handleDownloadTXT = () => {
    if (!previewRef.current) return;

    // Extract text content from the live preview section
    const previewContent = previewRef.current.innerText;

    const blob = new Blob([previewContent], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "live-preview.txt");
  };

  const handleDownloadDOCX = async () => {
    if (!previewRef.current) return;

    const previewContent = previewRef.current.innerHTML;

    const doc = new Document({
      sections: [
        {
          children: Array.from(previewRef.current.querySelectorAll("div.preview-item")).flatMap(
            (item) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: item.querySelector("h4")?.innerText || "",
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                text: item.querySelector("p")?.innerText || "N/A",
              }),
            ]
          ),
        },
      ],
    });

    // Generate the `.docx` file and trigger download
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "live-preview.docx");
  };

  return (
    <div className="w-[40%] p-7 bg-[#3F3F3FCC]">
      {/* Download Button */}
      <div className="flex justify-end gap-4 relative">
        <button
          className="px-4 py-2 text-white rounded-lg bg-black mb-2"
          onClick={handleDownloadPDF}
        >
          Download
        </button>
        <button
          className="relative"
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          <Image src="/3dots.svg" alt="Options" width={40} height={0} />
        </button>

        {/* Dropdown Menu */}
        {isDropdownVisible && (
          <div className="absolute right-0 top-12 bg-white shadow-md border rounded-lg z-50">
            <button
              className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
              onClick={() => {
                handleDownloadTXT();
                setIsDropdownVisible(false);
              }}
            >
              Download as .txt
            </button>
            <button
              className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
              onClick={() => {
                handleDownloadDOCX();
                setIsDropdownVisible(false);
              }}
            >
              Download as .docx
            </button>
          </div>
        )}
      </div>

      {/* Scrollable and Wrapping Preview Content */}
      <div
        ref={previewRef}
        className="bg-white p-8 h-[87vh] overflow-y-auto"
        style={{
          overflowX: "hidden", // Prevent horizontal scrolling
          wordWrap: "break-word", // Wrap words if too long
          whiteSpace: "pre-wrap", // Preserve whitespace while wrapping long text
        }}
      >
        <h2 className="text-xl font-bold text-center mb-6">Live Preview</h2>
        <div className="space-y-6">
          <div className="preview-item">
            <h4 className="text-sm font-semibold">1. Project Title</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.projectTitle }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">
             2. Name and Address of Principal Implementing Agency(s)
            </h4>
            <p dangerouslySetInnerHTML={{ __html: formData.principalAgency }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">
             3. Name and Address of Sub-Implementing Agency(s)
            </h4>
            <p dangerouslySetInnerHTML={{ __html: formData.subAgency }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">4. Definition of the Issue</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.issueDefinition }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">5. Objectives</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.objectives }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">6. Justification</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.justification }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">
              7. How the Project is Beneficial to the Coal Industry
            </h4>
            <p dangerouslySetInnerHTML={{ __html: formData.projectBenefits }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">8. Work Plan</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.workPlan }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">8.1. Methodology</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.methodology }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">8.2. Organization of Work Elements</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.workOrganization }} />
          </div>
          <div className="preview-item">
            <h4 className="text-sm font-semibold">8.3. Time Schedule of Activities</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.timeSchedule }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
