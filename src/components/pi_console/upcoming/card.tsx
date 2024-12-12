import React from 'react';
import Image from 'next/image';

interface CardProps {
  meetingTopic: string;
  projectId: string;
  projectInvestigator: string;
  onButtonClick: (button: string) => void;
}

const Card: React.FC<CardProps> = ({ meetingTopic, projectId, projectInvestigator, onButtonClick }) => {
  return (
    <div className="flex border rounded-2xl  shadow-md w-10/12 m-4">

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
          className="bg-black text-white py-1 px-1 rounded-lg  h-8 text-sm"
          onClick={() => onButtonClick('Button 1')}
        >
         Date: 20-12-2024 (Friday)
        </button>
        <button
          className="bg-black text-white py-1 px-1 rounded-md  text-sm"
          onClick={() => onButtonClick('Button 2')}
        >
        Time: 8:00 PM        
        </button>
      
        
      </div>


      <div className="flex gap-4">
      <button
          className="bg-black flex text-white py-2 px-2  h-8 rounded-lg items-center "
          onClick={() => onButtonClick('Button 3')}
        >
          <Image src="/call.svg" alt="Accept" width="20" height="20" className='mt-1 mr-2'/>
          Join Call
        </button>

        <button
          className="bg-black flex text-white py-2 px-2  h-8 rounded-lg items-center "
          onClick={() => onButtonClick('Button 3')}
        >
          <Image src="/chat2.svg" alt="Accept" width="20" height="20" className='mt-1 mr-2'/>
          Chat
        </button>
        <button
          className="bg-black flex text-white py-2 px-2 rounded-lg h-8 items-center "
          onClick={() => onButtonClick('Button 3')}
        >
          <Image src="/clock.svg" alt="Accept" width="20" height="20" className='mt-1 mr-2'/>
          2 hours
        </button>


        </div>  
        
      </div>

      {/* Separator Line */}
      <div className="border-l border-black h-full"></div>

      
    </div>
  );
};

export default Card;

