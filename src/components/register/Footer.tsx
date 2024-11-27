import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-black h-24 absolute bottom-0 flex justify-center items-center">
      <Image
        className=""
        src="/nocheck.svg"
        alt="/"
        width={220}
        height={220}
        />
      </div>
      

    </div>
  )
}

export default Footer
