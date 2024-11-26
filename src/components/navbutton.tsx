'use client'
import React from 'react';
import Image from 'next/image';
const NavButton = () => {
    return (
        <div className='flex mt-10 'style={{ marginLeft: "550px" }}>
            <button className='flex justify-center items-center w-36 h-10 border-2 border-black rounded-md hover:bg-gray-500' >
            <Image className='pl-2 pt-2'
        src="/Arrow 5.svg"
        alt="Next.js logo"
        width={40}
        height={28}/>
    <h1 className='ml-4 text-2xl font-semibold'> Back</h1> </button>
    <button className='flex  w-44 h-10 border-2 border-black rounded-md hover:bg-gray-500 bg-black text-white ml-12' >
              <h1 className='ml-4 text-2xl font-semibold'>Login </h1>
              <Image className='pl-2 pt-1 ml-6 mb-4'
        src="/Arrow 6.svg"
        alt="Next.js logo"
        width={40}
        height={20}
        
      /> </button>
        
              
        </div>
    );
}
export default NavButton;