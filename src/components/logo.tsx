'use client';

import React from 'react'
import Image from 'next/image'

const Logo = () => {
return (
    <section>
      <div>
        <Image
        className=""
        src="/Main logo.svg"
        alt="Next.js logo"
        width={160}
        height={160}
        />
      </div>
    </section>
    )
}
export default Logo