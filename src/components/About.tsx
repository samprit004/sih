import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div className='px-24'>
     <div className=' relative mt-24 flex justify-center'>
        <Image
            src="/About Us.svg"
            alt="hero"
            width={600}
            height={400}
            />
        <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-black text-6xl font-bold tracking-wider">About Us</p>
        </div>
      </div>

        <div className='mt-10 flex'>
            <p className='text-3xl text-center '>
                At <a className='font-semibold'>MineFlow</a>, we simplify project management in the coal sector. It has been designed for <a className='font-semibold'>CMPDI(Central Mine Planning and Design Institute)</a>,
                 our platform streamlines the oversight of <a className='font-semibold'>R&D</a> and <a className='font-semibold'>S&T</a> projects funded by<a>Coal India Limited (CIL)</a> and the <a className='font-semibold'>Ministry of Coal (MoC)</a>.We eliminate 
                 inefficiencies in managing over <a className='font-semibold'>100 project reports</a> quarterly by offering a <a className='font-semibold'>secure, user-friendly</a> platform for <a className='font-semibold'>real-time tracking</a>, automated processes, 
                 and accurate data management. The efficient and advanced tools for<a className='font-semibold'> investigators</a>cater to submit updates and <a className='font-semibold'>administrators</a> to monitor and validate progress,
                 MineFlow ensures <a className='font-semibold'>transparency, efficiency, and accountability</a>. Our mission is to modernize project oversight, 
                 reduce manual efforts, and support impactful innovations.</p>
        </div>

    </div>
  )
}

export default About
