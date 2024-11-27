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
      <form onSubmit={handleSubmit} className=" p-8 rounded-lg  w-full flex flex-col  ">
        
        <div className="flex flex-col gap-3">
            <div className="flex gap-5 justify-center">

              
            <div className="flex flex-col">
            <label className="">Name:</label>
            <div className="relative">
                
                <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className=" border border-black rounded-md h-12 px-4 w-72  "
                placeholder=" Firstname" 
                required
                />
                <div className="absolute bottom-1/4 left-5 w-3/4 h-0.5 bg-gray-300"></div>
  
            </div>
            </div>

            <div className="flex flex-col">
            <label>‎  </label>
            <div className="relative">
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              value={formData.lastname}
              onChange={handleChange}
              className="border border-black rounded-md h-12 px-4 w-72"
              required
            />
            <div className="absolute bottom-1/4 left-5 w-3/4 h-0.5 bg-gray-300"></div>
            </div>
            </div>   

            </div>

            <div className="flex gap-5 justify-center">

              
            <div className="flex flex-col">
                <label>Email:</label>
                <div className="relative">
                <input
                type="email"
                name="email"
                placeholder="email@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="border border-black rounded-md h-12 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>
            </div></div>


            <div className="flex flex-col">
            <label>Phone No.: </label>
            <div className="relative">
                <input
                type="text"
                name="phone"
                placeholder="xxxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                className="border border-black rounded-md h-12 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>
            </div> 
            </div>   

            </div>

            <div className="flex gap-5 justify-center h-40">
            <div className="flex flex-col justify-center">
            <label>Username:</label>
            <div className="relative">
                <input
                 type="text"
                 name="username"
                 placeholder="username"
                 value={formData.username}
                 onChange={handleChange}
                className="border border-black rounded-md h-12 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>
                </div>
            </div>

            <div className="flex flex-col justify-between">
            <label>Password: </label>
            <div className="relative">
                <input
                 type="password"
                 name="password"
                 placeholder="password"
                 value={formData.password}
                onChange={handleChange}
                className="border border-black rounded-md h-12 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>
                </div>

                <label>Updated Password: </label>
                <div className="relative">
                <input
                type="password"
                name="confirmPassword"
                placeholder="password"
                value={formData.confirmPassword}
                className="border border-black rounded-md h-12 px-4 w-72"
                required
                />
                <div className="absolute bottom-1/4 left-4 w-3/4 h-0.5 bg-gray-300"></div>

                </div>
            </div> 

            </div>
            
            </div>
            
            <div className="flex justify-center mt-5 gap-12">
                <button className="flex gap-4 items-center bg-[#D2D6E1] px-4 py-2 rounded-md border-2 border-black">
                <Image
                    className=""
                    src="/Arrow 5.svg"
                    alt="//"
                    width={30}
                    height={0}
                    />
                    <span className="font-semibold text-xl">Back</span>
                </button>

                <button className="flex gap-8 items-center bg-black px-10 py-2 rounded-md border-2 border-black">
                <span className="font-semibold text-xl text-white">Create</span>
                <Image
                    className=""
                    src="/Arrow 6.svg"
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