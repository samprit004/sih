import React from 'react';
import Image from 'next/image';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    data: { description: string; location: string };
  }
  
  const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;
  
    return (
        <>
    
      <div className="fixed inset-0 flex ml-[500px] items-center justify-center w-1/3  ">
        <div className="bg-white  pb-16 pt-2 pl-0 p-6 rounded-md shadow-lg border-2 border-black ">
        <button
              onClick={onClose}
              className="flex ml-[430px] mb-4"
            >
              <Image
                src="/cross.svg"
                alt="Close Icon"
                width={40}
                height={30}
                />
            </button>
          
          <table className="w-full border border-black ">
           
            <tbody>
              <tr>
                <td className="border border-black border-b-white bg-black text-white px-4 py-2 font-medium">
                  Location:
                </td>
                <td className="border border-black px-4 py-2">{data.location}</td>
               
              </tr>
              <tr>
                <td className="border border-black border-t-white bg-black text-white px-4 py-2 font-medium">
                  Description:
                </td>
                <td className="border border-black px-4 py-2">{data.description}</td>
              </tr>
            </tbody>
          </table>
         
        </div>
      </div>
      
      </>
    );
  };
  
  export default Dialog;
  