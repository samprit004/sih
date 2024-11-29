'use client'
import React, { useState } from 'react';

const Side_nav = () => {
  const [activeButton, setActiveButton] = useState('Upcoming');

  return (
    <div className='fixed top-[84px] mt-8 left-0 bg-black h-[100vh] w-[15%] flex justify-center rounded-r-3xl'>
      <div className="flex flex-col gap-5 mt-14">
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Upcoming' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Upcoming')}
        >
         Upcoming
        </button>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Proposal Tracker' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Proposal Tracker')}
        >
          Proposal Tracker
        </button>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Project Review' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Project Review')}
        >
          Project Review
        </button>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Authorize PI' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Authorize PI')}
        >
          Authorize PI
        </button>
        <button
          className={`text-md font-semibold px-5 py-3 rounded-lg ${activeButton === 'Project Records' ? 'bg-white text-black' : 'text-white'}`}
          onClick={() => setActiveButton('Project Records')}
        >
          Project Records
        </button>
      </div>
    </div>
  );
};

export default Side_nav;
