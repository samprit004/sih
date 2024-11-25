// components/ExpandableCard.tsx
import { useState } from "react";
import Image from "next/image";

interface ExpandableCardProps {
  title: string;
  description: string;
  extraContent: string;  
  imageUrl: string;
}

const ExpandableCard = ({
  title,
  description,
  extraContent,
  imageUrl,
}: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);


  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (

    <div className="max-w-xl px-6 py-2 bg-[#E6E6E6] rounded-lg shadow-lg mb-4">
      <div className="flex">
        {/* Left side: Text */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>

        {/* Right side: Arrow (button) */}
        <div className="ml-6 flex items-center">
          <button
            onClick={toggleExpansion}
            className=""
          >
            {/* Arrow Image */}
            <Image
              src={imageUrl}
              alt="Arrow"
              width={20}
              height={20}
              className={`transition-transform transform ${isExpanded ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-700">{extraContent}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;


