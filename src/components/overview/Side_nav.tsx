import React from 'react'

const Side_nav = () => {
  return (
    <div className='mt-6 bg-black h-[100vh] w-[15%] flex justify-center rounded-r-3xl sticky'>
      <div className="flex flex-col gap-5 mt-14  ">
        <div className='text-md font-semibold bg-white px-5 py-3 rounded-lg  '>Project Overview</div>
        <div className='text-md font-semibold text-white px-5 py-3'>Draft Proposal</div>
        <div className='text-md font-semibold text-white px-5 py-3'>Submit Proposal</div>
      </div>
    </div>
  )
}

export default Side_nav
