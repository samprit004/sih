import React from 'react'
import Image from 'next/image'

const Guidelines = () => {
  return (
    <div className='px-24'>

      <div className=' relative mt-24 flex justify-center'>
        <Image
            src="/Guidelines.svg"
            alt="hero"
            width={600}
            height={400}
            />
        <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-black text-6xl font-bold tracking-wider">Guidelines</p>
        </div>
      </div>

      <div className='flex justify-between mt-10  '>
        
        <div className=''>
            <h2 className='font-semibold text-3xl'>R&D Guidelines: </h2>
            <p className='text-2xl'>
                
                Research and Development (R&D) involves exploring new ideas, generating knowledge, and developing scalable.
                A few important R&D Guidelines:<br /> 
                • <a className='font-semibold'>Clear Objectives:</a> Set specific, measurable goals to guide research and assess progress. <br />
                • <a className='font-semibold'>Innovation:</a> Embrace creative, boundary-pushing problem-solving. <br />
                • <a className='font-semibold'>Data Integrity:</a> Ensure accurate documentation and transparent methodologies. <br />
                • <a className='font-semibold'>Collaboration:</a> Engage with diverse experts and institutions for enhanced outcomes. <br />
                • <a className='font-semibold'>Sustainability:</a> Focus on scalable, long-term solutions with lasting impact. <br />
            </p>
        </div>
        <div className='border-black border-2 h-auto ml-52'></div>
        <div className='pl-8'>
             <h2 className='font-semibold text-3xl'>S&T Guidelines:  </h2>
            <p className='text-2xl '>
            
                Science and Technology (S&T) focuses on applying scientific principles to develop practical solutions, drive technological innovation, and address real-world. 
                A few important S&T Guidelines: <br />
                • <a className='font-semibold'>Scientific Rigor:</a> Follow established scientific methods to ensure valid and reliable results.<br />
                • <a className='font-semibold'>Innovation & Application:</a> Transform research into practical, real-world solutions.<br />
                • <a className='font-semibold'>aEthics:</a> Prioritize safety, environmental impact, and legal compliance in all projects.<br />
                • <a className='font-semibold'>Effective Communication:</a> Clearly share findings and engage stakeholders in the process.<br />
                • <a className='font-semibold'>Ongoing Evaluation:</a> Continuously monitor and adjust projects to stay aligned with goals.<br />
            </p>
        </div>
        
        
      </div>



    </div>
  )
}

export default Guidelines
