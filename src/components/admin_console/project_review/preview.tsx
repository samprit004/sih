import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import Image from "next/image";
import React, { useState, useRef } from "react";

const Preview = () => {
  const previewRef = useRef<HTMLDivElement>(null); // Reference for the preview container
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle PDF download
  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    
    const canvas = await html2canvas(previewRef.current);
    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imageData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("download.pdf");
  };

  // Handle TXT download
  const handleDownloadTXT = () => {
    if (!previewRef.current) return;
    const text = previewRef.current.innerText;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "download.txt");
  };

  // Handle DOCX download
  const handleDownloadDOCX = async () => {
    if (!previewRef.current) return;
    
    const text = previewRef.current.innerText;
    const paragraph = new Paragraph({
      children: [new TextRun(text)],
    });
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [paragraph],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    saveAs(blob, "download.docx");
  };

  return (
    <div className="w-[40%] p-7 bg-[#3F3F3FCC]">
      {/* Download Button */}
      <div className="flex justify-end gap-4 relative">
        <button
          className="px-4 py-2 text-white rounded-lg bg-black mb-2"
          onClick={handleDownloadPDF}
        >
          Download as PDF
        </button>
        <button
          className="relative"
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          <Image src="/3dots.svg" alt="Options" width={40} height={40} />
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
        {/* Content to preview (this could be dynamic content based on your use case) */}
        <p>Here is the content you want to preview and download as PDF, TXT, or DOCX.</p>
      </div>
    </div>
  );
};

export default Preview;
