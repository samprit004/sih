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
        <div className="flex flex-col gap-1 mr-[550px]">
          <h1 className="text-3xl font-semibold">Fill out project details</h1>
          <p className="font-medium">
          Fill out the details below to showcase your project vision and outline your goals
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

          <div className="relative flex items-center gap-2" ref={dropdownRef}>
            <Image
              src="/pfp.svg"
              alt="Profile Picture"
              width={40}
              height={40}
            />
            <button onClick={toggleDropdown}>
              <Image
                className={`transition-transform transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                src="/drop.svg"
                alt="Dropdown Icon"
                width={20}
                height={20}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-10 right-0 w-40 bg-white border border-black rounded-md shadow-lg">
                <ul className="py-1">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 border-b border-black hover:bg-gray-100">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
  );
};

export default Nav;
