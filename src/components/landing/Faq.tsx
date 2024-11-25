'use client';
import Image from 'next/image'
import React, { useState } from 'react';
import ExpandableCard from './ExpandableCard';


const Faq = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); 
  };

  const handleClear = () => {
    setInputValue(''); 
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`); 
  };

  return (
    <section className=''>

      <div className=' relative mt-24 flex justify-center'>
        <Image
            src="/Frequently Ask Question.svg"
            alt="hero"
            width={1100}
            height={500}
            />
        <div className=" absolute inset-0 flex justify-center items-center">
            <p className="text-black text-6xl font-bold ">Frequently Ask Question</p>
        </div>
        
      </div>
      <p className='flex justify-center font-bold text-lg text-[#3F3F3F]'> <a href="" className='underline px-1 font-semibold'>CLICK HERE </a> to know more</p>
        
      <div className="flex px-24 justify-between">
        <div>
        <h1 className='text-4xl font-bold mb-4'>Popular Questions</h1>
      <ExpandableCard
        title="What is the meaning of life?"
        description="This is a short description of the card content."
        extraContent="Here is some more detailed information that will expand when the arrow is clicked. This could be an explanation, further details, or any other content you want to display."
        imageUrl="/Dropdown.svg"  
      />
      <ExpandableCard
        title="How do I implement a dropdown?"
        description="Learn how to create dropdowns in React and Next.js."
        extraContent="This is some extra content about implementing dropdowns. It could include code examples or further instructions."
        imageUrl="/Dropdown.svg"  
      />
      <ExpandableCard
        title="How do I implement a dropdown?"
        description="Learn how to create dropdowns in React and Next.js."
        extraContent="This is some extra content about implementing dropdowns. It could include code examples or further instructions."
        imageUrl="/Dropdown.svg" 
      />
      <ExpandableCard
        title="How do I implement a dropdown?"
        description="Learn how to create dropdowns in React and Next.js."
        extraContent="This is some extra content about implementing dropdowns. It could include code examples or further instructions."
        imageUrl="/Dropdown.svg"  
      />
      <ExpandableCard
        title="How do I implement a dropdown?"
        description="Learn how to create dropdowns in React and Next.js."
        extraContent="This is some extra content about implementing dropdowns. It could include code examples or further instructions."
        imageUrl="/Dropdown.svg" 
      />
      <ExpandableCard
        title="How do I implement a dropdown?"
        description="Learn how to create dropdowns in React and Next.js."
        extraContent="This is some extra content about implementing dropdowns. It could include code examples or further instructions."
        imageUrl="/Dropdown.svg"  
      />
      </div>

      <div className='flex flex-col'>

        <div>
          <Image
            src="/ASk top.svg"
            alt="hero"
            width={640}
            height={300}
            />
        </div>

        <div><h1 className='text-center text-4xl font-semibold mt-5'>Any Question?</h1></div>

        <div className='mt-5'>
          <h1 className='text-semibold'>Let me know.</h1>

          <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Write here"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <div className='flex justify-center mt-5'>
         <button
          onClick={handleButtonClick}
          className="bg-black text-white rounded-full px-6 py-2 "> Send
          </button>
        </div>
          
        </div>
      
      </div>
    </div>


    </section>
  )
}

export default Faq
