'use client';
import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Hero = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
    <div className='mt-56 flex px-8 justify-center gap-20'>
      <div className='pt-8'>
        <p className='text-8xl'>Follow the <a className='font-semibold'>rules,</a><br /> <a className='font-semibold'>track</a> the journey,
        <br /> lead the way<a className='font-bold'>...</a></p>

        <div className=' mt-10'>
          <button onClick={handleClick} className='flex items-center text-3xl bg-black text-white px-7 py-4 rounded-xl gap-5 font-light'><span>Initiate Now</span> 
            <FaLongArrowAltRight className='ml-2 '/> 
          </button> 
        </div>
      </div>
        
        <div className='flex flex-col'>
        <Image
        className=""
        src="/hero.svg"
        alt="hero"
        width={880}
        height={880}
        />
        
        </div>
    </div>
    
    </div>
  )
}

export default Hero
