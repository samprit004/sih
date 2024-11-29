'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TextEditor from '@/components/Submit_vision/Texteditor';
import SideNav from '@/components/Submit_vision/Side_nav'; // Import the Side_nav component

interface FormData {
  sampritWho: string;
  sampritDOB: string;
  sampritAge: string;
  sampritFavFootballer: string;
  sampritLove: string;
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

  useEffect(() => {
    const totalFields = 5;
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

  const getWordCount = (text: string) => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
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
      <div className="flex flex-col mt-4 mb-5">
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

      {/* Form Fields */}
      {[
        { label: 'Who is Samprit?', name: 'sampritWho' },
        { label: "What is Samprit's Date of Birth?", name: 'sampritDOB' },
        { label: 'How old is Samprit?', name: 'sampritAge' },
        {
          label: "Who is Samprit's Favorite Footballer?",
          name: 'sampritFavFootballer',
        },
        { label: 'What does Samprit Love?', name: 'sampritLove' },
      ].map(({ label, name }) => (
        <div className="question-card" key={name}>
          <label className="mb-1 block text-md font-semibold">{label}</label>
          <TextEditor
            onContentChange={(content: string) =>
              handleEditorChange(name, content)
            }
          />
          <div className="text-right text-sm text-gray-600 mt-1">
            {getWordCount(formData[name as keyof FormData])}/{WORD_LIMIT}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsForm;
