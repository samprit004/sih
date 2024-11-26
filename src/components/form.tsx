'use client';
import React from 'react';
import  { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
      });
    
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
      };
    return (
        <><div className='mt-12 '>
            <h1 className='text-black  text-2xl font-semibold ' style={{ marginLeft: "460px" }}>Name:</h1>
            <div className='flex justify-center'>
                <input
                    className='border-2 border-black rounded-md h-12 w-72 mt-2'
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder='First Name'
                    value={formData.firstname}
                    onChange={handleChange}
                    required />

                <input
                    type="text"
                    className='border-2 border-black rounded-md h-12 w-72 mt-2 ml-8 border-b-2 '
                    id="lastname"
                    name="lastname"
                    placeholder='Last Name'
                    value={formData.lastname}
                    onChange={handleChange}
                    required />
            </div>
            <h1 className='text-black  text-2xl font-semibold mt-4 ' style={{ marginLeft: "460px" }}>Username:  <label htmlFor="password" style={{marginLeft:"198px"}}>Password:</label></h1>
            <div className='flex justify-center'>
                <input
                    className='border-2 border-black rounded-md h-12 w-72 mt-2'
                    type="text"
                    id="username"
                    name="username"
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                    required />

                <input
                    className='border-2 border-black rounded-md h-12 w-72 mt-2 ml-8'
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required />
            </div>
            <button className='hover:text-blue-600' style={{ marginLeft: "780px" }}>Forgot Password?</button>

        </div>
        <div className='border-2 border-black w-48 h-10 flex justify-center rounded-md hover:bg-slate-600' style={{ marginLeft: "460px" }}>
        <input type="checkbox" className='w-6 ml-2' /> 
        <div className='ml-4 mt-1'><b>Remember me</b></div>
        </div>
        </>
        
        
    );
    }
    export default Form;