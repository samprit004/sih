'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Side_nav = () => {
  const [activeButton, setActiveButton] = useState('Submit Proposal'); // Default active button

  return (
    <div className='fixed mt-4 bg-black h-[100vh] w-[15%] flex justify-center rounded-r-3xl '>
      <div className="flex flex-col gap-5 mt-14">
        <Link href={'/overview'}>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${
            activeButton === 'Project Overview' ? 'bg-white text-black' : 'text-white'
          }`}
          onClick={() => setActiveButton('Project Overview')}
        >
          View Projects
        </button>
        </Link>
        <Link href={'/draft_proposal'}>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${
            activeButton === 'Draft Proposal' ? 'bg-white text-black' : 'text-white'
          }`}
          onClick={() => setActiveButton('Draft Proposal')}
        >
          Draft Proposal
        </button>
        </Link>
        <Link href='/submit_proposal'>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${
            activeButton === 'Submit Proposal' ? 'bg-white text-black' : 'text-white'
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
