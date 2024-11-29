// components/Table.js
import React from 'react';

const Table = () => {
  return (
    <div className="ml-56"> 
     
      <div className='flex mt-6 px-8 w-full'>
        <h1 className='text-xl font-semibold underline'>Project State:</h1>
        <div> 
        
      </div>
    </div>
      <table className="w-[1200px] border-black mt-24 mx-8">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Project ID</th>
            <th className="border border-black px-4 py-2">PI Name</th>
            <th className="border border-black px-4 py-2">Proposal</th>
            <th className="border border-black px-4 py-2">AI Analysis</th>
            <th className="border border-black px-4 py-2">Decision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2 border-t-2 text-center">pd1564</td>
            <td className="border border-black px-4 py-2 border-t-2 text-center">Dr. Aditi Sharma 
            (JNCASR, Bangalore)</td>
            <td className="px-4 py-2 flex justify-center border-b border-black border-t"> 
              <button className='flex justify-center  bg-black text-white items-center w-24 h-7 rounded-md hover:bg-gray-500'>
                View
              </button>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
