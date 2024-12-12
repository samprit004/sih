'use client'
import React from 'react'

import Card from "@/components/pi_console/upcoming/card";

const handleButtonClick = (button: string) => {
    console.log(`${button} clicked`);
  };

  interface ContentProps {
    topic?: string;
    objective?: string;
  }
 

  


const Content: React.FC<ContentProps> = ({ topic ,objective}) => {
  return (
    <div><div className='mt-[10%]'>
      
        <div className='ml-[15%]  '>
        <h1 className=' text-2xl ml-6 font-semibold'><u>Upcoming Calls</u></h1>
        <Card
        meetingTopic="Project Planning"
        projectId="12345"
        projectInvestigator="Dr. John Doe"
        onButtonClick={handleButtonClick}
      />
      <h1 className=' text-2xl ml-6 mt-4 rounded-md font-semibold'><u>Topic of Discussion:</u></h1>
      <div className='w-[1080px] h-40 ml-4 mt-4 border-black border-2 rounded-md p-3'>
       <div><b> Topic:  </b>{topic!== undefined ? topic : "    Loading..."}</div>
        <div className='mt-2'><b>Objective:  </b>{objective!== undefined ? objective : "    Loading..."}</div>
        <div className='flex gap-4 mt-2'>
          <b>Upload necessary documents:</b> <button className='border-2 border-black bg-black text-white px-2 rounded-md'>Upload</button>
        </div>
      </div>
        </div>
        
      </div>
    </div>
  )
}

export default Content
