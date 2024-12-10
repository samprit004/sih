'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";




const Nav = () => {



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

      <div className='flex gap-14 text-2xl font-medium items-center mr-16 lg:gap-8 lg:text-lg lg:mr-0 sm:text-sm'>
        <Link href="/" className=" ">Home</Link>
        <Link href="/#about" className=" ">About Us</Link>
        <Link href="/#guidelines" className=" ">Guidelines</Link>
        <Link href="/#working" className=" ">Work Progress</Link>
        <Link href="/#faq" className=" ">FAQ</Link>
        
        <Link href="/login">
        <button className='bg-black text-white px-3 py-2 rounded-xl text-center '>Login/Register</button>
        </Link>
      </div>
      
      
    </nav>
    
    <div className='flex justify-end'>
    <div className='border-black border-2 w-2/3 '></div>
    </div>
    </div>
    
  )
}

export default Nav
