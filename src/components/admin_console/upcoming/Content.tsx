'use client'
import React, { useEffect, useState } from 'react'
import Side_nav from "@/components/admin_console/upcoming/side_nav";
import Nav from "@/components/admin_console/upcoming/nav";
import Card from "@/components/admin_console/upcoming/card";
interface ContentProps {
  topic?: string;
  objective?: string;
}
interface project_body {
  id: string,
  org_name: string,
  pi_name: string,
  title: string,
}


const handleButtonClick = (button: string) => {
    console.log(`${button} clicked`);
  };

const Content = () => {
  const [rows, setTableData] = useState<project_body[]>([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects"); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setTableData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <div>
      <Nav/>
      <div className="flex mt-[84px]"> {/* Offset for Nav bar */}
        <Side_nav />
        <div className='ml-[15%] mt-[2%] w-full'>
        {rows.map((row)=>(
          <Card
          meetingTopic={row.title}
          projectId={row.id}
          projectInvestigator={row.pi_name}
          onButtonClick={handleButtonClick}
          />
        ))}
        
        </div>
        
        
      </div>
    </div>
  )
}

export default Content
