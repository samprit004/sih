"use client";

import React, { useState } from "react";

const Table1 = () => {
  // Table data stored as an array of objects
  const piData = [
    {
      piId: "PI001",
      piName: "Dr. Aditi Sharma",
      contactNumber: "+91 6473248368",
      email: "aditi@gmail.com",
      adharNumber: "1234 5678 9123",
    },
  ];

  // State to control the second table's data
  const [credentials, setCredentials] = useState({
    username: "null",
    password: "null",
  });

  // State to enable the "Generate Credentials" and "Send" buttons
  const [isVerified, setIsVerified] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  // State to display the "PI verified successfully" message
  const [verificationMessage, setVerificationMessage] = useState("");

  // Random password generator function
  const generateRandomString = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Handlers
  const handleVerifyPI = () => {
    setIsVerified(true);
    setVerificationMessage("PI Verified Successfully!");
  };

  const handleGenerateCredentials = () => {
    if (isVerified && !isGenerated) {
      setCredentials({
        username: piData[0].email, // Use email from the PI table
        password: generateRandomString(8), // Generate an 8-character random password
      });
      setIsGenerated(true); // Mark credentials as generated
    }
  };

  const handleCancel = () => {
    // Reset everything
    setIsVerified(false);
    setIsGenerated(false);
    setCredentials({ username: "null", password: "null" });
    setVerificationMessage("");
  };

  const handleSend = () => {
    alert("Credentials sent successfully!");
  };

  return (
    <div className="p-8  ml-60 w-full space-y-8">
      <h1 className="text-2xl font-bold "><u>PI Management</u></h1>
    <div className="p-4 border-4 border-black mt-4 rounded-md">
      {/* PI Details Table */}
      <table className="w-full border-collapse border-2 border-black text-left mb-6">
        <thead >
          <tr>
            <th className="border-4 border-black px-4 py-2">PI ID</th>
            <th className="border-4 border-black px-4 py-2">PI Name</th>
            <th className="border-4 border-black px-4 py-2">Contact Number</th>
            <th className="border-4 border-black px-4 py-2">Email Address</th>
            <th className="border-4 border-black px-4 py-2">Aadhar Number</th>
          </tr>
        </thead>
        <tbody>
          {piData.map((data, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border-4 border-black px-4 py-2">{data.piId}</td>
              <td className="border-4 border-black px-4 py-2">{data.piName}</td>
              <td className="border-4 border-black px-4 py-2">{data.contactNumber}</td>
              <td className="border-4 border-black px-4 py-2">{data.email}</td>
              <td className="border-4 border-black px-4 py-2">{data.adharNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
     

      {/* Verification Message */}
      {verificationMessage && (
        <div className="text-black text-lg font-semibold text-center mb-4">
          {verificationMessage}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={handleVerifyPI}
          className="px-4 py-2 bg-black text-white rounded shadow hover:bg-gray-700"
        >
          Verify PI
        </button>
        <button
          onClick={handleGenerateCredentials}
          disabled={!isVerified || isGenerated}
          className={`px-4 py-2 rounded shadow ${
            isVerified && !isGenerated
              ? "bg-black text-white hover:bg-gray-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Generate Credentials
        </button>
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-black text-white rounded shadow hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>

      {/* Credentials Table */}
      
      <table className="w-2/3 border-collapse text-center mt-6 ml-40 border-4 border-black  mb-4">
        <thead >
          <tr>
            <th className="border-4 border-black px-4 py-2">Username</th>
            <th className="border-4 border-black px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border-4 border-black px-4 py-2">{credentials.username}</td>
            <td className="border-4 border-black px-4 py-2">{credentials.password}</td>
          </tr>
        </tbody>
      </table>

      {/* Send Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSend}
          disabled={!isGenerated}
          className={`px-6 py-2 rounded shadow ${
            isGenerated
              ? "bg-black text-white hover:bg-gray-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
};

export default Table1;
