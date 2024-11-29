'use client';

import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        className='ml-8 mt-8'
        src="/Main logo.svg"
        alt="Next.js logo"
        width={120}
        height={120}
      />
    </div>
  );
};

export default Logo;
