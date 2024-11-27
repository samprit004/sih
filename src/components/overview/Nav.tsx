import React from 'react'

import Image from 'next/image'

const Nav = () => {
  return (
    <div>
        <div className='flex justify-between items-center sticky mx-4 mt-2'>
            <div>
            <Image
            className=''
            src="/Main logo.svg"
            alt="Next.js logo"
            width={120}
            height={120}
            />
            </div>
            
            <div className='flex flex-col ' >
                <h1>Project Overview:</h1>
                <p>Dive into available projects: Explore opportunities and take next step. </p>
            </div>
            <div className='flex gap-4'>
            <Image
                className=''
                src="/bell.svg"
                alt="Next.js logo"
                width={20}
                height={0}
            />
            <Image
                className=''
                src="/pfp.svg"
                alt="Next.js logo"
                width={40}
                height={0}
            />

            </div>
        </div>
      
    </div>
  )
}

export default Nav
