'use client';

import React from "react";

interface CardProps {
  title: string;
  button1Text: string;
  button2Text: string;
  onButton1Click: () => void;
  onButton2Click: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  button1Text,
  button2Text,
  onButton1Click,
  onButton2Click,
}) => {
  return (
    <div className="border border-black rounded-md shadow-md p-4 flex justify-between items-center w-full max-w-4xl mx-auto">
      <span className="text-lg font-medium text-gray-800">{title}</span>
      <div className="flex gap-4">
        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200"
          onClick={onButton1Click}
        >
          {button1Text}
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200"
          onClick={onButton2Click}
        >
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default Card;
