import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className='px-8 pt-2'>
            <Image
        className=""
        src="/Main logo.svg"
        alt="Next.js logo"
        width={120}
        height={120}
        /></div>
      <div className=''>
        
        <h1 className='text-black  text-6xl font-semibold flex  justify-center '>Register</h1>
        <h1 className='text-2xl mt-2 flex  justify-center'>Register to create an account for submission </h1>
        <hr className=' mt-3  mx-auto border-t-2 border-2 border-black w-2/4 rounded-md'/>
        </div>
    </div>
  )
}

export default Header