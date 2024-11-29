'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const NavButton = () => {
    return (
        <div className='flex mt-16 'style={{ marginLeft: "550px" }}>
        <Link href="/"></Link>
            <button className='flex justify-center items-center w-36 h-12 border-2 border-black rounded-md hover:bg-gray-500' >
            <Image className=' pt-1 w-8'
        src="/Arrow 5.svg"
        alt="Next.js logo"
        width={40}
        height={28}/>
    <h1 className='ml-2 text-2xl font-semibold'> Back</h1> </button>
    <button className='flex justify-center items-center w-64 h-12 border-2 border-black rounded-md hover:bg-gray-500 bg-black text-white ml-12' >
              <h1 className='ml-4 text-2xl font-semibold '>Submit </h1>
              <Image className='pl-2 pt-1 ml-2 '
        src="/Arrow 6.svg"
        alt="Next.js logo"
        width={40}
        height={20}
        
      /> </button>
        
              
        </div>
    );
}
export default NavButton;