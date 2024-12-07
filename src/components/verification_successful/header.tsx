'use client';

import React, { useState } from 'react';
import Image from 'next/image';
const Header = () => {
    return(
        <><div className='w-[737px] ml-96 mt-6'>

            <h1 className='text-black  text-7xl font-semibold text-center '>Verification Process <br /> in Progress</h1><hr className=' mt-6  mx-auto border-t-2 border-2 border-black w-2/3 rounded-md' />
            <h1 className='text-xl mt-7  text-center'>Registration Successful.
            </h1>
            <h1 className='text-xl mt-4  text-center'>Your registration has been successfully approved by the admin. You can now log in using the provided credentials to access your account and proceed with submitting the required documents for your project proposal. Ensure to complete all tasks promptly to avoid any delays in the next stages.
            </h1>
        </div><button className='flex justify-center items-center w-64 h-12 border-2 border-black rounded-md hover:bg-gray-500 bg-black text-white ml-[620px] mt-8'>
                <h1 className='ml-4 text-2xl font-semibold '>Login </h1>
                <Image className='pl-2 pt-1 ml-2 '
                    src="/Arrow 6.svg"
                    alt="Next.js logo"
                    width={40}
                    height={20} /> </button></>
    )
}
export default Header;