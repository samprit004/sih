'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Side_nav = () => {
  const [activeButton, setActiveButton] = useState('Quarterly Report');

  return (
    <div className='fixed top-[84px] mt-8 left-0 bg-black h-[100vh] w-[15%] flex justify-center rounded-r-3xl'>
      <div className="flex flex-col gap-5 mt-14">
        <Link href='/pi_console/upcoming'>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Upcoming' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('upcoming')}
        >
         Upcoming
        </button>
        </Link>
        <Link href='/pi_console/proposal_tracker'>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Proposal Tracker' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Proposal Tracker')}
        >
          Proposal Tracker
        </button>
        </Link>
        <Link href='/pi_console/quarterly_report'>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Quarterly Report' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Quarterly Report')}
        >
       Quarterly Report
        </button>
        </Link>
        <Link href='/pi_console/budget_flow'>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Budget Flow ' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Budget Flow')}
        >
            Budget Flow
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Side_nav;
