'use client';
import React from 'react'
import Image from 'next/image'
import ExpandableCard from './ExpandableCard';


const Faq = () => {
  return (
    <div className=''>

      <div className=' relative mt-24 flex justify-center'>
        <Image
            src="/Frequently Ask Question.svg"
            alt="hero"
            width={1100}
            height={100}
            />
        <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-black text-6xl font-bold ">Frequently Ask Question</p>
        </div>
        <p> Click here  to know more</p>
      </div>
        
      <div className="flex pl-24">
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
    </div>


    </div>
  )
}

export default Faq
