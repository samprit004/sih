'use client';
import Link from 'next/link';
import React, { useState } from 'react';

interface SideNavProps {
  isVisible: boolean; // Controls visibility of the SideNav
  onClose: () => void; // Function to close the SideNav
}

const Side_nav: React.FC<SideNavProps> = ({ isVisible, onClose }) => {
  const [activeButton, setActiveButton] = useState('View Projects');

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[15%] bg-black text-white transform ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-sm bg-red-500 text-white px-2 py-1 rounded-lg"
        >
          Close
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-5 mt-14 items-center">
        <Link href="/overview">
          <button
            className={`text-md font-semibold px-5 py-3 rounded-lg ${
              activeButton === 'View Projects'
                ? 'bg-white text-black'
                : 'text-white'
            }`}
            onClick={() => setActiveButton('View Projects')}
          >
            View Projects
          </button>
        </Link>

        <Link href="/draft_proposal">
          <button
            className={`text-md font-semibold px-5 py-3 rounded-lg ${
              activeButton === 'Draft Proposal'
                ? 'bg-white text-black'
                : 'text-white'
            }`}
            onClick={() => setActiveButton('Draft Proposal')}
          >
            Draft Proposal
          </button>
        </Link>

        <Link href="/submit_proposal">
          <button
            className={`text-md font-semibold px-5 py-3 rounded-lg ${
              activeButton === 'Submit Proposal'
                ? 'bg-white text-black'
                : 'text-white'
            }`}
            onClick={() => setActiveButton('Submit Proposal')}
          >
            Submit Proposal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Side_nav;