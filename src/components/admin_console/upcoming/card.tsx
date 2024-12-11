import React from 'react';

interface CardProps {
  meetingTopic: string;
  projectId: string;
  projectInvestigator: string;
  onButtonClick: (button: string) => void;
}

const Card: React.FC<CardProps> = ({ meetingTopic, projectId, projectInvestigator, onButtonClick }) => {
  return (
    <div className="flex border rounded-lg overflow-hidden shadow-md w-full m-4">

      {/* Right Section with Text Info */}
      <div className="p-4 w-1/2 bg-gray-100">
        <p><strong>Meeting Topic:</strong> {meetingTopic}</p>
        <p><strong>Project ID:</strong> {projectId}</p>
        <p><strong>Project Investigator:</strong> {projectInvestigator}</p>
      </div>
 

      {/* Left Section with Buttons */}
      <div className="flex flex-col items-center p-4 w-1/2 space-y-2 bg-gray-100">
      <div className="flex gap-8">
      
      <button
          className="bg-black text-white py-1 px-1 rounded-md w-full text-sm"
          onClick={() => onButtonClick('Button 1')}
        >
         Date: 20-12-2024 (Friday)
        </button>
        <button
          className="bg-black text-white py-1 px-1 rounded-md w-full text-sm"
          onClick={() => onButtonClick('Button 2')}
        >
        Time: 8:00 PM        
        </button>
      
        
      </div>


      <div className="flex">
      <button
          className="bg-green-500 text-white py-2 px-4 rounded-md w-full"
          onClick={() => onButtonClick('Button 3')}
        >
          Button 3
        </button>

        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md w-full"
          onClick={() => onButtonClick('Button 4')}
        >
          Button 4
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md w-full"
          onClick={() => onButtonClick('Button 5')}
        >
          Button 5
        </button>
        </div>  
        
      </div>

      {/* Separator Line */}
      <div className="border-l border-black h-full"></div>

      
    </div>
  );
};

export default Card;

