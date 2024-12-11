'use client';
import  { useState, useEffect } from "react";
import Image from "next/image";
import PSide_nav from "../project_review/PSide_nav";


import React from 'react'
import { pid } from "process";

interface HighlightsProps {
    pid?: string;
}

const Highlights = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
return (
    <div className="w-[60%]">
       
         <div >
            {/* Button to toggle side navigation */}
            <div className="flex ">
            <div className="flex m-4">
                <button onClick={() => setIsNavVisible(true)}>
                    <Image src="/menu.svg" alt="Menu Icon" width={40} height={120} />
                </button>
            </div>
        <PSide_nav 
                isVisible={isNavVisible} 
                onClose={() => setIsNavVisible(false)} 
            />
            <div className="mt-6 w-64 h-9 rounded-md bg-black text-white"><div className="flex mt-1 ml-4">Project ID: {pid !== undefined ? pid : "  Loading..."} </div>   </div>
            <button className="w-32 bg-black border-2 text-white h-8 rounded-md ">
                Fixed Meeting
            </button>

    </div>
    </div>
    </div>
  );

};
export default Highlights;

