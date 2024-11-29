import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card2: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div>
    <div className="relative max-w-sm rounded mt-8 text-white bg-[#4d4a4a]">
  <div className="flex justify-center items-center bottom-96 absolute left-36">
    <img className="object-cover" src={imageUrl} alt={title} />
  </div>
  <div className="p-4 text-center">
    <h2 className="font-bold text-4xl mb-5 mt-5">{title}</h2>
    <p className="text-white text-xl">{description}</p>
  </div>
</div>

    </div>
    
  );
};

export default Card2;