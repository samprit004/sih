'use client';
import Image from 'next/image';
import React, { useState } from 'react';
const Footer = () => {
    return (
        <div>
       <div className='flex bg-black w-full h-32 absolute bottom-0 justify-center'>
        <Image 
        className=''
        src="/verified_tick.svg"
        alt="Next.js logo"
        width={458}
        height={0}
      />
      </div>
      </div>
      
    );
}
export default Footer;