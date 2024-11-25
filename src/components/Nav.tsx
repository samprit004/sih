'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Nav = () => {

    const handleClick = () => {
        alert('Button clicked!');
      };


  return (
    <div>
    <nav className='flex justify-between px-10 mt-6'>
      <div>
        <Image
        className=""
        src="/Main logo.svg"
        alt="Next.js logo"
        width={160}
        height={160}
        />
      </div>

      <div className='flex gap-14 text-2xl font-medium items-center mr-16'>
        <Link href="/" className=" ">Home</Link>
        <Link href="/" className=" ">About Us</Link>
        <Link href="/" className=" ">Guidelines</Link>
        <Link href="/" className=" ">FAQ</Link>
        
        <button className='bg-black text-white px-3 py-2 rounded-xl text-center ' onClick={handleClick}>Login/Register</button>
       
      </div>
      
      
    </nav>
    
    <div className='flex justify-end'>
    <div className='border-black border-2 w-2/3 m-'></div>
    </div>
    </div>
    
  )
}

export default Nav
