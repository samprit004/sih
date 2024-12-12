// components/ExpandableCard.tsx
import { useState } from "react";
import Image from "next/image";

interface ExpandableCardProps {
  title: string;
  description: string;
  extraContent: React.ReactNode;  // Allow extraContent to be any React component
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
    <div className="w-full max-w-xl bg-[#E6E6E6] rounded-lg shadow-lg mb-4 transition-all">
      {/* Header: Always visible */}
      <div className="flex px-6 py-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          {/* Only show description if the card is expanded */}
          {isExpanded && <p className="text-gray-600 mt-2">{description}</p>}
        </div>

        {/* Button to toggle expansion */}
        <div className="ml-6 flex items-center">
          <button onClick={toggleExpansion}>
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

      {/* Expanded Content: Visible when card is expanded */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isExpanded ? "max-h-96" : "max-h-0"  // Adjust max-height for expanded view
        }`}
      >
        <div className="px-6 py-4">
          {/* Extra content can be any component */}
          <div>{extraContent}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
