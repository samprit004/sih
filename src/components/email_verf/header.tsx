'use client';

import React, { useState } from 'react';
const Header = () => {
    return(
        <div className='w-[700px] ml-96 '>
        
        <h1 className='text-black  text-6xl font-semibold text-center ml-2 '>Email Verification</h1><hr className=' mt-6  mx-auto border-t-2 border-2 border-black w-96 rounded-md'/>
        <h1 className='text-md mt-2  text-center'>An email verification link has been sent to abc@gmail.com. Please check your inbox and click on the link to verify your email and complete the registration process. 
        </h1>
        </div>
    )
}
export default Header;