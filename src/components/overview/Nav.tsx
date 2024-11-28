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
    <div className='relative'>
      <div className="flex fixed items-center  ml-4 ">
        {/* Logo */}
        <div className="w-[15%]  mr-8">
          <Image
            className=""
            src="/Main logo.svg"
            alt="Main Logo"
            width={120}
            height={120}
          />
        </div>

        {/* Header Section */}
        <div className="flex justify-between w-full px-5  bg-white">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold">Project Overview:</h1>
            <p className="font-medium">
              Dive into available projects: Explore opportunities and take the next step.
            </p>
          </div>

          {/* Notification and Profile Section */}
          <div className="flex gap-4 ml-[630px] items-center">
            {/* Notification Bell */}
            <Image
              className=""
              src="/bell.svg"
              alt="Notification Bell"
              width={20}
              height={20}
            />

            {/* Profile Picture and Dropdown */}
            <div className="relative flex items-center gap-2" ref={dropdownRef}>
              <Image
                className=""
                src="/pfp.svg"
                alt="Profile Picture"
                width={40}
                height={40}
              />

              {/* Dropdown Button */}
              <button onClick={toggleDropdown}>
                <Image
                  className={`transition-transform transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  src="/drop.svg"
                  alt="Dropdown Icon"
                  width={20}
                  height={20}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className=" absolute top-12 right-0 w-40 bg-white border border-black rounded-md shadow-lg">
                  <ul className="py-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 border border-b-black hover:bg-gray-100"
                      >
                        My Account
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Nav;
