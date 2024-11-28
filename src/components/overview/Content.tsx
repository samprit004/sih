import React from 'react'
import Card from './Project_card'

const Content = () => {
  return (
    <div className='ml-[16%] '>
      <div className='mt-[84px] px-8 '>
        <h1 className='text-xl fixed bg-white font-semibold pt-4 mb-8 underline w-full'>Explore Projects</h1>
        <div >
         <br/><br/>
            <Card 
             description="Scaling up the conversion of CO2 to methanol and other value-added chemicals with 500 Kg CO2/day capacity."
             />
             <Card
             description='Indigenous Development of Monolithic Perovskite Module Manufacturing by Printing.'
             />
             <Card
             description='Upgradation of high ash Indian coal through physical and chemical beneficiation.'
              />
              <Card
              description='Development of a novel process for the production of high purity silica from rice husk ash.'
              />
              <Card
              description='Real-time energy efficient cyber-physical intelligent system for mine slope health monitoring.'
              />
              <Card
              description='Development of tandem approach for Paste Fill Technology and extraction methodology by continuous miner (CM) deployment for Shyampur B Colliery of Mugma Area, ECL.'
              />
        </div>
      </div>
    </div>
 
  )
}

export default Content
