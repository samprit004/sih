import Image from 'next/image'
import Card from '../Card'
import Card2 from '../card2'

const Working = () => {
  return (
    <div id='working'>
      <style>
        
      </style>
       <div className=' relative mt-24 flex justify-center'>
        <Image
            src="/Working Process.svg"
            alt="hero"
            width={700}
            height={600}
            />
        <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-black text-6xl font-bold ">Working Process</p>
        </div>
      </div>

      <div className='flex px-8 justify-center mt-16'>
        
        <Card 
        title="Get Approved: Start Your Journey!"
        description="Begin by filling in the project details, including objectives, budget, and timeline, using the platform's prescribed forms. Once completed, submit your proposal for review by CMPDI and funding agencies like MoC or CIL. Upon approval, you’ll receive a unique project ID and login credentials to access and manage your project."
        imageUrl="/Card.svg"
        />
         <Image
            className='mx-2'
            src="/Arrow 3.svg"
            alt="hero"
            width={80}
            height={0}
            />
        <Card2 
        title="Stay On Track: Manage and Report!"
        description="Maintain your project's progress through the dedicated dashboard, where you can update milestones, submit quarterly progress reports, and upload financial utilization documents as per S&T/R&D guidelines. If needed, you can also submit requests for time extensions or additional funding directly through the platform."
        imageUrl="/Card2_2.svg"
        />
        <Image
        className='mx-2'
            src="/Arrow 3.svg"
            alt="hero"
            width={80}
            height={0}
            />
        <Card 
        
        title="Finish Strong: Close Your Project!"
        description="Wrap up your project by uploading the final reports, audited financial statements, and all required closure documents. Ensure all submissions are accurate and complete for a smooth review process by CMPDI. Once verified, your project will be officially closed, marking a successful completion."
        imageUrl="/Card2_3.svg"
        />


      </div>
    </div>
  )
}

export default Working
