'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jsbody = {
      email: formData.email,
      first_name: formData.firstname,
      last_name: formData.lastname,
      phone: formData.phone,
    }
    console.log("Form Data:", jsbody);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsbody),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        // add cookies in client-side @samprit
        alert('Form submitted successfully!');
        localStorage.setItem("margsathi_id",data.id)
        router.push('/invigilator/email_verification');
      } else {
        alert('User Not Found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full m-auto ">
      <form onSubmit={handleSubmit} className=" mt-10 rounded-lg  w-full flex flex-col  ">
        
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
                className=" border border-black rounded-md h-12 px-4 w-72  "
                placeholder=" Firstname" 
                required
                />
               
  
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
              className="border border-black rounded-md h-12 px-4 w-72"
              required
            />
            
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
                className="border border-black rounded-md h-12 px-4 w-72"
                required
                />
                
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
                className="border border-black rounded-md h-12 px-4 w-72"
                required
                />
                
            </div> 
            </div>   

            </div>

            
            </div>
            
            <div className="flex justify-center mt-12 gap-12"><Link href="/">
                <button className="flex gap-3 items-center bg-[#D2D6E1] px-4  rounded-lg border-2 border-black">
                <Image
                    className=""
                    src="/Arrow 5.svg"
                    alt="//"
                    width={20}
                    height={0}
                    />
                    <span className="font-semibold text-lg">Back</span>
                </button></Link>

                <button className="flex gap-5 items-center bg-[#1E1E1E] px-16 py-1 rounded-lg border-2 border-[#1E1E1E]" type="submit">
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
            <div className="text-center mt-8 font-medium"> Already Registered?<Link href="/login/PI"><p className="underline font-bold">Login</p></Link></div>

            
      </form>
    </div>
  );
};

export default SignupForm;