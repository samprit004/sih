'use client';
import React, { useState } from 'react';
import Card from './Project_card';
import Dialog from './Dialog';

const Content = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({ description: '', location: '' });

  const handleViewDetails = (description: string, location: string) => {
    setDialogData({ description, location });
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const projects = [
    {
      description:
        'This project aims to scale up the conversion of CO2 into methanol and chemicals at a capacity of 500 kg CO2/day. It focuses on developing technologies for CO2 capture, hydrogen generation, and product purification, achieving viable commercial efficiencies. The implementation is led by JNCASR, SCCL, and BREATHE Applied Sciences.',
      location: 'Karnataka, Telangana',
      cardText:
        'Scaling up the conversion of CO2 to methanol and other value-added chemicals with 500 Kg CO2/day capacity.',
    },
    {
      description:
        'The project focuses on developing a pilot plant for large-scale printable perovskite solar modules with targeted efficiencies and long lifetimes. It includes a "Make in India" approach, zero-import dependency, and field-testing modules to create standalone solar applications. IIT Bombay, CIL, and CMPDI are leading the efforts.',
      location: 'Maharashtra and West Bengal',
      cardText:
        'Indigenous Development of Monolithic Perovskite Module Manufacturing by Printing.',
    },
    {
      description:
        'This project involves improving Indian coal quality through air-dense medium fluidized bed separators and froth flotation. It aims to optimize coal processing methods using advanced CFD models and chemical techniques to enhance energy efficiency. The lead agency is IIT Kharagpur, with assistance from multiple coal companies.',
      location: 'West Bengal, Odisha, and Jharkhand',
      cardText:
        'Upgradation of high ash Indian coal through physical and chemical beneficiation.',
    },
    {
      description:
        'This initiative develops guidelines for identifying water-stressed areas in mining regions and designs eco-friendly water storage solutions. It involves assessing water table fluctuations and soil recharge patterns. IIT-ISM Dhanbad is the leading institute.',
      location: 'Jharkhand',
      cardText:
        'Designing Environmental-Friendly Water Storage Structures in mining regions.',
    },
    {
      description:
        'The project aims to deploy energy-efficient microelectromechanical systems for real-time monitoring of mine slope deformation and predicting slope failures. It includes building a wireless sensor network and developing early warning systems. IIT-ISM Dhanbad and CMPDI are key participants.',
      location: 'Jharkhand and West Bengal',
      cardText:
        'Real-time energy efficient cyber-physical intelligent system for mine slope health monitoring.',
    },
    {
      description:
        'This project develops a mining method integrated with paste fill technology, focusing on subsidence monitoring and safe coal extraction practices. It includes setting up paste backfill systems for testing and optimization. ECL leads the implementation.',
      location: 'West Bengal',
      cardText:
        'Development of tandem approach for Paste Fill Technology and extraction methodology.',
    },
  ];

  return (
    <div className="ml-[16%] w-full">
      <div className="mt-[84px] px-8">
        <h1 className="text-xl font-semibold pt-4 underline">Explore Projects</h1>
        <div className="mt-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              description={project.cardText}
              viewDetails={() =>
                handleViewDetails(project.description, project.location)
              }
            />
          ))}
        </div>
      </div>

      {/* Dialog Component */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        data={dialogData}
      />
    </div>
  );
};

export default Content;
