'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import TextEditor from '@/components/Submit_vision/Texteditor';
import SideNav from '@/components/Submit_vision/Side_nav'; // Import the Side_nav component
import ProposedOutlayTable from './ProposedOutlayTable';

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  

  useEffect(() => {
    const totalFields = 11; // Updated number of fields
    const completedFields = Object.values(formData).filter(
      (val) => val.trim() !== ''
    ).length;
    const progressValue = (completedFields / totalFields) * 100;
    setProgress(progressValue);
  }, [formData]);

  const handleEditorChange = (name: string, content: string) => {
    const wordCount = getWordCount(content);

    if (wordCount > WORD_LIMIT) {
      alert('Word limit exceeded. Maximum allowed is 300 words.');
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: content }));
  };

  const getWordCount = (text: string | undefined | null) => {
    const trimmedText = (text || '').trim(); // Use an empty string if text is null or undefined
    if (!trimmedText) return 0;
    return trimmedText.split(/\s+/).length;
  };

  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ''
  );

  return (
    <div className="w-[60%] max-h-screen overflow-y-auto bg-white p-8 relative">
      {/* Side Navigation */}
      <SideNav isVisible={isNavVisible} onClose={() => setIsNavVisible(false)} />

      {/* Top Buttons */}
      <div className="flex justify-between">
        <button onClick={() => setIsNavVisible(true)}>
          {/* Show Side_nav */}
          <Image src="/menu.svg" alt="Menu Icon" width={40} height={120} />
        </button>

        <button
          disabled={!isFormComplete}
          className={`mt-4 px-14 py-3 text-white ${
            isFormComplete ? 'bg-black' : 'bg-gray-300 cursor-not-allowed'
          } rounded-lg shadow-md`}
        >
          Submit
        </button>
      </div>

      {/* Progress Bar */}
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
      <div>
        <div className='flex justify-between'>
          <h2 className='font-semibold'>
          In which category would you like to proceed with your project?
          </h2>
          <div>
            
            
          <button onClick={toggleDropdown}>
    <div className="flex bg-[#AAA2A2] px-2 gap-1 rounded">
      S&T
      <Image
        className={`transition-transform transform ${
          isDropdownOpen ? "rotate-180" : "rotate-0"
        }`}
        src="/drop.svg"
        alt="Dropdown Icon"
        width={20}
        height={20}
      />
    </div>
  </button>
  {isDropdownOpen && (
    <div className="absolute right-0 w-auto bg-[#AAA2A2] px-2 py-1 gap-1 rounded shadow-md">
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
        </div>
        
      </div>

      {/* Form Fields */}
      {[
        { label: '1. Project Title', name: 'projectTitle' },
        {
          label: '2. Name and Address of Principal Implementing Agency(s) and Investigator(s)',
          name: 'principalAgency',
        },
        {
          label: '3. Name and Address of Sub-Implementing Agency(s) and Co-Investigator(s)',
          name: 'subAgency',
        },
        { label: '4. Definition of the Issue', name: 'issueDefinition' },
        { label: '5. Objectives', name: 'objectives' },
        { label: '6. Justification for Subject Area', name: 'justification' },
        {
          label: '7.How the Project is Beneficial to Coal Industry',
          name: 'projectBenefits',
        },
        { label: '8. Work Plan', name: 'workPlan' },
        { label: '8.1. Methodology', name: 'methodology' },
        { label: '8.2. Organization of Work Elements', name: 'workOrganization' },
        { label: '8.3. Time Schedule of Activities Giving Milestones', name: 'timeSchedule' },
      ].map(({ label, name }) => (
        <div className="question-card" key={name}>
          <label className="mb-1 block text-md font-semibold">{label}</label>
          <TextEditor
            onContentChange={(content: string) =>
              handleEditorChange(name, content)
            }
          />
          <div className="text-right text-sm text-gray-600 mt-1 flex justify-between mb-2">
            <span>Recruiter tip: write 300 words to increase interview chances</span>
            {getWordCount(formData[name as keyof FormData])}/{WORD_LIMIT}
          </div>
        </div>
      ))}
      <div>
        <ProposedOutlayTable/>
      </div>
    </div>
  );
};

export default DetailsForm;
