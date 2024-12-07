// 'use client';

import { getSession } from '@/app/lib';
import { redirect } from 'next/navigation';
// import React, { useState } from 'react';
const Header = () => {
    return(
        <div className='w-[737px] ml-96 mt-6'>
        
        <h1 className='text-black  text-7xl font-semibold text-center '>Verification Process <br/> in Progress</h1><hr className=' mt-6  mx-auto border-t-2 border-2 border-black w-2/3 rounded-md'/>
        <h1 className='text-xl mt-7  text-center'>Registration Successful. 
        </h1>
        <h1 className='text-xl mt-4  text-center'>If you encounter any issues, feel free to reach out to support for assistance using <u><a href= 'marg_sathi@gmail.com'><b>mineflow_helpline@gmail.com</b></a> </u></h1>
        </div>
    )
}
export default Header;