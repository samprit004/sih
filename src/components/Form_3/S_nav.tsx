"use client";

import React from "react";

interface SideNavProps {
  isOpen: boolean;
  closeNav: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, closeNav }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={closeNav}
      >
        &times;
      </button>

      {/* Back Button */}
      <button
        className="absolute top-4 left-4 text-white text-sm bg-gray-600 px-4 py-2 rounded"
        onClick={closeNav}
      >
        Back
      </button>

      <h2 className="text-2xl font-bold mt-12">Side Navigation</h2>
      <ul className="mt-4">
        <li className="py-2">Link 1</li>
        <li className="py-2">Link 2</li>
        <li className="py-2">Link 3</li>
        <li className="py-2">Link 4</li>
      </ul>
    </div>
  );
};

export default SideNav;
