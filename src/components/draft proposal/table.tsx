// components/Table.js
import React from 'react';

const Table = () => {
  return (
    <div className=""> 
     
      <div className='flex mt-6 px-8 w-full'>
        <h1 className='text-xl font-semibold underline'>Project State:</h1>
        <div> 
        
      </div>
    </div>
      <table className="w-[1000px] border-black mt-4 mx-8">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Project Statement</th>
            <th className="border border-black px-4 py-2">Project Form</th>
            <th className="border border-black px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2 border-t-2 text-center">Scaling up the conversion of CO2 to methanol and value-added chemicals.</td>
            <td className="px-4 py-2 flex justify-center border-b border-black border-t"> 
              <button className='flex justify-center  bg-black text-white items-center w-24 h-7 rounded-md hover:bg-gray-500'>
                View
              </button>
            </td>
            <td className="border border-black px-4 py-2 border-t-2 text-center">Drafted</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
