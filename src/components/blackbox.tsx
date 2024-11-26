'use client';
import Image from 'next/image';
import React, { useState } from 'react';
const Rectangle2 = () => {
    return (
        <div className='flex'>
        <Image 
        className='w-full'
        style={{marginTop: '47px'}}
        src="/Rectangle 20.svg"
        alt="Next.js logo"
        width={612}
        height={0}
      />
      </div>
    );
}
export default Rectangle2;