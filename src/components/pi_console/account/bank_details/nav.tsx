'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed w-full top-0 left-0 z-10'>
      <div className="flex items-center justify-between bg-white px-5 py-4 ">
        {/* Logo */}
        <div className="w-[15%] ">
          <Image
            src="/Main logo.svg"
            alt="Main Logo"
            width={120}
            height={120}
          />
        </div>

        {/* Header Section - Moved to the left */}
        <div className="flex flex-col gap-1 mr-[500px]">
          <h1 className="text-3xl font-semibold">Project Investigator Profile</h1>
          <p className="font-medium">
          Access and view your profile for streamlining information
          </p>
        </div>

        {/* Notification and Profile Section */}
        <div className="flex gap-4 items-center">
          <Image
            src="/bell.svg"
            alt="Notification Bell"
            width={20}
            height={20}
          />
          <div className="flex gap-4 mx-2 items-center">
          <Image
            src="/chat.svg"
            alt="Chat"
            width={30}
            height={24}
          />

          
           

           
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Nav;
