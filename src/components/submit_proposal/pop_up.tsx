import React from 'react';

const Table = () => {
  return (
    <div className="px-8">
      <div className="mt-6">
        <h1 className="text-xl font-semibold underline">Project State:</h1>
      </div>

      <table className="w-[1200px] border-black mt-4">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Project Statement</th>
            <th className="border border-black px-4 py-2">Project Form</th>
            <th className="border border-black px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2 text-center">
              Scaling up the conversion of CO2 to methanol and value-added chemicals.
            </td>
            <td className="px-4 py-2 flex justify-center border-b border-black">
              <button className="flex justify-center bg-black text-white items-center w-24 h-7 rounded-md hover:bg-gray-500">
                View
              </button>
            </td>
            <td className="border border-black px-4 py-2 text-center">Drafted</td>
          </tr>
        </tbody>
      </table>

      {/* Div below the table */}
      <div className="mt-28 ml-60 w-[650px] h-36 border-2 border-black rounded-md">
        <div className='text-center underline text-2xl'>Proposal Approval Pending
            </div>
            <div className='text-center text-md mt-4'>
            Your proposal has been successfully submitted and is now under review by the admin team. You will be notified within <b>24 to 48 working hours</b> regarding the status of your submission and <b>updates via email</b>.
            </div>
      </div>
    </div>
  );
};

export default Table;
