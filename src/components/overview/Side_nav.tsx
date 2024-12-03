'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Side_nav = () => {
  const [activeButton, setActiveButton] = useState('View Projects');

  return (
    <div className='fixed top-[84px] mt-8 left-0 bg-black h-[100vh] w-[15%] flex justify-center rounded-r-3xl'>
      <div className="flex flex-col gap-5 mt-14">
        <Link href={'/invigilator/overview'}>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'View Projects' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('View Projects')}
        >
          View Projects
        </button>
        </Link>
        <Link href={'/invigilator/draft_proposal'}>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Draft Proposal' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Draft Proposal')}
        >
          Draft Proposal
        </button>
        </Link>
        <Link href='/invigilator/submit_proposal'>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Submit Proposal' ? 'bg-white text-black' : 'text-white'}`}
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
