import React from 'react'
import Image from 'next/image'


const Nav = () => {
  return (
    <div>
        <div className='flex  items-center sticky mx-4 mt-2'>
            <div className='w-[15%]'>
                <Image
                className=''
                src="/Main logo.svg"
                alt="Next.js logo"
                width={120}
                height={120}
                />
            </div>
            <div className='flex justify-between w-[85%] px-5'>
            <div  className='flex flex-col gap-1' >
                <h1 className='text-3xl font-semibold'>View Submitted Proposal:</h1>
                <p className='font-medium'>Your proposal has been submitted</p>
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
                    height={10}
                />

            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Nav
