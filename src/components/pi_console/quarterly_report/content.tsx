"use client"
import React, { useState } from 'react';
const Content = () => {
    return (
        <>
        <div className='ml-72'>
            <button className='mt-32  border-2 border-black bg-black text-white px-2 rounded-md'>Project Timeline: 2 years</button>
            <div className='mt-4 font-semibold text-xl'>Quarterly Report Submission (in the last week of every quarter)</div>
            <table className=" w-[1200px]  border-4 border-black mt-2  content-center">
        <thead>
          <tr>
            <th className="border-4 border-black px-4 py-2">Timeline</th>
            <th className="border-4 border-black px-4 py-2">Report Quarter</th>
            <th className="border-4 border-black px-4 py-2">Submission</th>
            <th className="border-4 border-black px-4 py-2">Status</th>
            <th className="border-4 border-black px-4 py-2">Document</th>
           
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td className="border-4 border-black px-4 py-2 text-center">24-03-2025 to 31-03-2025
              (1 Week)</td>
              <td className="border-4 border-black px-4 py-2 text-center">1st Quarterly Report</td>
              <td className="px-4 py-2 flex justify-center">
                <button className="w-40  ml-2 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                 Submit Vision
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">Submitted</td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button className="w-20 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
             
              
            </tr>
            <tr >
              <td className="border-4 border-black px-4 py-2 text-center">23-06-2025 to 30-06-2025
              (1 Week)
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">2nd Quarterly Report</td>
              <td className="px-4 py-2 border-black border-t-4 flex justify-center">
                <button className="w-40  ml-2 bg-black border-bottom-2 text-white h-7 rounded-md hover:bg-gray-500">
                 Submit Report
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">Pending</td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button className="w-20 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
             
              
            </tr>
            <tr >
              <td className="border-4 border-black px-4 py-2 text-center">22-09-2025 to 29-09-2025
              (1 Week)
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">3rd Quarterly Report</td>
              <td className="px-4 py-2 border-black border-t-4 flex justify-center">
                <button className="w-40  ml-2 bg-black border-bottom-2 text-white h-7 rounded-md hover:bg-gray-500">
                 Submit Report
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">Upcoming</td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button className="w-20 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
             
              
            </tr>
            <tr >
              <td className="border-4 border-black px-4 py-2 text-center">22-12-2025 to 29-12-2025
              
              (1 Week)</td>
              <td className="border-4 border-black px-4 py-2 text-center">4th Quarterly Report</td>
              <td className="px-4 py-2 border-black border-t-4 flex justify-center">
                <button className="w-40  ml-2 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                 Submit Vision
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">Upcoming</td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button className="w-20 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
             
              
            </tr>
            <tr >
              <td className="border-4 border-black px-4 py-2 text-center">23-03-2026 to 30-03-2026
              (1 Week)
              
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">5th Quarterly Report</td>
              <td className="px-4 py-2 border-black border-t-4 flex justify-center">
                <button className="w-40  ml-2 bg-black border-bottom-2 text-white h-7 rounded-md hover:bg-gray-500">
                 Submit Report
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">Upcoming</td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button className="w-20 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
             
              
            </tr>
            <tr >
              <td className="border-4 border-black px-4 py-2 text-center">22-06-2026 to 29-06-2026
              (1 Week)
            
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">6th Quarterly Report</td>
              <td className="px-4 py-2 border-black border-t-4 flex justify-center">
                <button className="w-40  ml-2 bg-black border-bottom-2 text-white h-7 rounded-md hover:bg-gray-500">
                 Submit Report
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">Upcoming</td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button className="w-20 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
             
              
            </tr>
            <tr >
              <td className="border-4 border-black px-4 py-2 text-center">21-09-2026 to 28-09-2026
              (1 Week)
              
            
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">7th Quarterly Report</td>
              <td className="px-4 py-2 border-black border-t-4 flex justify-center">
                <button className="w-40  ml-2 bg-black border-bottom-2 text-white h-7 rounded-md hover:bg-gray-500">
                 Submit Report
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">Upcoming</td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button className="w-20 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
             
              
            </tr>
            <tr >
              <td className="border-4 border-black px-4 py-2 text-center">21-12-2026 to 28-12-2026
              (1 Week)
              
            
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">8th Quarterly Report</td>
              <td className="px-4 py-2 border-black border-t-4 flex justify-center">
                <button className="w-40  ml-2 bg-black border-bottom-2 text-white h-7 rounded-md hover:bg-gray-500">
                 Submit Report
                </button>
              </td>
              <td className="border-4 border-black px-4 py-2 text-center">Upcoming</td>
              <td className="px-4 py-2 flex justify-center border-2 border-black">
                <button className="w-20 bg-black text-white h-7 rounded-md hover:bg-gray-500">
                  View
                </button>
              </td>
             
              
            </tr>
        </tbody>
      </table>
        </div>
        </>
    )
};
export default Content;