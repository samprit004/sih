'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href='/'>
      <Image
        className='ml-10 mt-10'
        src="/Main logo.svg"
        alt="Next.js logo"
        width={120}
        height={120}
      />
      </Link>
    </div>
  );
};

export default Logo;
