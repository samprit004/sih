'use client';
import { useState } from "react";
import React from 'react';
import Image from "next/image";
import Side_nav from "./side_nav"; // Importing your Side_nav component

const Nav2: React.FC = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <>
        <div className="flex mt-32 ml-10 gap-4">
            <button onClick={() => setIsNavVisible(true)} className="">
                <Image src="/menu.svg" alt="Menu Icon" width={40} height={120} />
            </button>
            {isNavVisible && (
                <Side_nav />
            )}
            {isNavVisible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-0 translate-x-1"
                    onClick={() => setIsNavVisible(false)}
                />
            )}
            <div className="flex gap-6 mt-1 text-lg">
            <button className="flex  gap-2 mt-2">
                <Image src="/book.svg" 
                alt="Search Icon"
                 width={20}
                 height={120}
                 className="mt-1" />
                    Overview
                    </button>
                    <button className="flex  gap-2 mt-2">
                <Image src="/bank.svg" 
                alt="Search Icon"
                 width={20}
                 height={120}
                 className="mt-1" />
                    Bank Details
                    </button>
                    <button className="flex  gap-2 mt-2">
                <Image src="/organization.svg" 
                alt="Search Icon"
                 width={20}
                 height={120}
                 className="mt-1" />
                    Organization Details
                    </button>
                    </div>
                    
            </div>
            <hr className="mt-2 border-2 border-black w-full"/>
        </>
    );
};

export default Nav2;
