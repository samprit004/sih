'use client';
import React, { useState } from "react";
import Image from "next/image";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className=" w-full m-auto ">
      <form onSubmit={handleSubmit} className=" mt-5 rounded-lg  w-full flex flex-col  ">
        
        <div className="flex flex-col gap-3">
            <div className="flex gap-5 justify-center">

              
            <div className="flex flex-col">
            <label className="font-semibold">Name:</label>
            <div className="relative">
                
                <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className=" border border-black rounded-md h-9 px-4 w-72  "
                placeholder=" Firstname" 
                required
                />
                <div className="absolute bottom-1/4 left-5 w-3/4 h-0.5 bg-gray-300"></div>
  
            </div>
            </div>

            <div className="flex flex-col">
            <label className="font-semibold">‎  </label>
            <div className="relative">
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              value={formData.lastname}
              onChange={handleChange}
              className="border border-black rounded-md h-9 px-4 w-72"
              required
            />
            <div className="absolute bottom-1/4 left-5 w-3/4 h-0.5 bg-gray-300"></div>
            </div>
            </div>   

            </div>

            <div className="flex gap-5 justify-center">

              
            <div className="flex flex-col">
                <label className="font-semibold">E-mail:</label>
                <div className="relative">
                <input
                type="email"
                name="email"
                placeholder="email@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="border border-black rounded-md h-9 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>
            </div></div>


            <div className="flex flex-col">
            <label className="font-semibold">Phone No.: </label>
            <div className="relative">
                <input
                type="text"
                name="phone"
                placeholder="xxxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                className="border border-black rounded-md h-9 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>
            </div> 
            </div>   

            </div>

            <div className="flex gap-5 justify-center h-40">
            <div className="flex flex-col justify-center">
            <label className="font-semibold">Username:</label>
            <div className="relative">
                <input
                 type="text"
                 name="username"
                 placeholder="username"
                 value={formData.username}
                 onChange={handleChange}
                className="border border-black rounded-md h-9 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>
                </div>
            </div>

            <div className="flex flex-col justify-between">
            <label className="font-semibold">Password: </label>
            <div className="relative">
                <input
                 type="password"
                 name="password"
                 placeholder="password"
                 value={formData.password}
                onChange={handleChange}
                className="border border-black rounded-md h-9 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>
                </div>

                <label className="font-semibold">Updated Password: </label>
                <div className="relative">
                <input
                type="password"
                name="confirmPassword"
                placeholder="password"
                value={formData.confirmPassword}
                className="border border-black rounded-md h-9 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>

                </div>
            </div> 

            </div>
            
            </div>
            
            <div className="flex justify-center mt-5 gap-12">
                <button className="flex gap-3 items-center bg-[#D2D6E1] px-4  rounded-lg border-2 border-black">
                <Image
                    className=""
                    src="/Arrow 5.svg"
                    alt="//"
                    width={20}
                    height={0}
                    />
                    <span className="font-semibold text-lg">Back</span>
                </button>

                <button className="flex gap-5 items-center bg-[#1E1E1E] px-16 py-1 rounded-lg border-2 border-[#1E1E1E]">
                <span className="font-semibold text-lg text-white">Create</span>
                <Image
                    className=""
                    src="/createarrow.svg"
                    alt="//"
                    width={30}
                    height={0}
                    />   
                </button>
                
            </div>

            




      </form>
    </div>
  );
};

export default SignupForm;