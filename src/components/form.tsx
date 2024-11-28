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
        <>
           
            <h1 className='text-black  text-2xl font-semibold mt-12 ' style={{ marginLeft: "460px" }}>Username:  <label htmlFor="password" style={{marginLeft:"198px"}}>Password:</label></h1>
            <div className='flex justify-center'>
                <input
                    className='border-2 border-black rounded-md h-12 w-72 mt-2 p-4'
                    type="text"
                    id="username"
                    name="username"
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                    required />

                <input
                    className='border-2 border-black rounded-md h-12 w-72 mt-2 ml-8 p-4'
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required />
            </div>
            <button className='hover:text-blue-600' style={{ marginLeft: "780px" }}>Forgot Password?</button>

        
        <div className='border-2 border-black w-40 h-10 flex justify-center items-center rounded-md hover:bg-slate-200' style={{ marginLeft: "460px" }}>
        <input type="checkbox" className='w-4  mt-1' /> 
        <div className='ml-2 '><b>Remember me</b></div>
        </div>
        </>
        
        
    );
    }
    export default Form;