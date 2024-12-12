'use client'
import React from 'react'
import Side_nav from "@/components/admin_console/upcoming/side_nav";
import Nav from "@/components/admin_console/upcoming/nav";
import Card from "@/components/admin_console/upcoming/card";
interface ContentProps {
  topic?: string;
  objective?: string;
}



const handleButtonClick = (button: string) => {
    console.log(`${button} clicked`);
  };

const Content = () => {
  return (
    <div>
      <Nav/>
      <div className="flex mt-[84px]"> {/* Offset for Nav bar */}
        <Side_nav />
        <div className='ml-[15%] mt-[2%] w-full'>
        <Card
        meetingTopic="Project Planning"
        projectId="12345"
        projectInvestigator="Dr. John Doe"
        onButtonClick={handleButtonClick}
      />
        </div>
        
        
      </div>
    </div>
  )
}

export default Content
