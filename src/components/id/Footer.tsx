import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-black h-24 absolute bottom-0 flex justify-center items-center">
      <Image
        className=""
        src="/idcheck.svg"
        alt="/"
        width={280}
        height={0}
        />
      </div>
      <div></div>
      

    </div>
  )
}

export default Footer
