import React from 'react';

interface CardProps {
  description: string;
  viewDetails: () => void; // Function to open the dialog
}

const Card: React.FC<CardProps> = ({ description, viewDetails }) => {
  return (
    <div className="p-2 w-5/6 rounded mt-2 border border-black">
      <div className="p-4">
        <p className="text-black text-xl">{description}</p>
      </div>
      <div className="flex mt-1 items-center justify-center" style={{ marginLeft: '720px' }}>
        <button
          className="bg-black text-white w-36 h-8 border-2 border-black rounded-md hover:bg-gray-500"
          onClick={viewDetails} // Open dialog on click
        >
          <h1 className="text-xl">View Problem</h1>
        </button>
        <button className="flex justify-center items-center w-36 h-8 border-2 border-black rounded-md hover:bg-gray-500 bg-black text-white ml-4">
          <h1 className="text-xl">Submit Vision</h1>
        </button>
      </div>
    </div>
  );
};

export default Card;
