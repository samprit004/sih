"use client"
import Link from "next/link";
import Image from 'next/image';
import  { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  function getCookie(name: string) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
  }
    const [formData, setFormData] = useState({
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
    
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        const auth = localStorage.getItem("Admin_Auth_token");
        if(auth == null){
          alert("Auth_token not found");
          return;
        }
        try {
          const jsbody = {
            username: formData.username,
            password: formData.password,
            Auth_token: auth,
          }
          const response = await fetch('/api/login', {
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
            router.push("/Admin_console/Proposal_tracker")
          } else {
            alert('User Not Found');
          }
        } catch (error) {
          console.log(error);
        }
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
        <div className='flex mt-16 'style={{ marginLeft: "550px"  }}>
        <Link href="/login">
            <button className='flex justify-center items-center w-36 h-12 border-2 border-black rounded-md hover:bg-gray-500' >
            <Image className=' pt-1 w-8'
        src="/Arrow 5.svg"
        alt="Next.js logo"
        width={40}
        height={28}/>
    <h1 className='ml-2 text-2xl font-semibold'> Back</h1> </button></Link>
    <button className='flex justify-center items-center w-64 h-12 border-2 border-black rounded-md hover:bg-gray-500 bg-black text-white ml-12' onClick={handleSubmit}>
              <h1 className='ml-4 text-2xl font-semibold '>Login </h1>
              <Image className='pl-2 pt-1 ml-2 '
        src="/Arrow 6.svg"
        alt="Next.js logo"
        width={40}
        height={20}
        
      /> </button>
        
              
        </div>
        </>
        
        
    );
    }
    export default Form;