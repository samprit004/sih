'use client';
import { useState } from 'react';
import Logo from '@/components/logo';
import OtpInput from '@/components/email_verf/otp_input';
import Header from '@/components/email_verf/header';
import Footer from '@/components/email_verf/footer';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Home: React.FC = () => {
  
  const [otp, setOtp] = useState<string>('');
  const  = useRouter();
  function getCookie(name: string) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
  }

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id= getCookie('margsathi_id');
    if(id == null){
      alert("Couldn't send otp");
      return;
    }
    const jsbody = {
      id: id, 
      otp: otp,
    }
    console.log("Form Data:", jsbody);
    try {
      const response = await fetch('/api/verify_otp', {
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
        alert('otp submitted successfully!');
        document.cookie = `margsathi_id=${data.id}; path=/; secure; samesite=Strict`;
        document.cookie = `Auth_token=${data.Auth_token}; path=/; secure; samesite=Strict`;
        document.cookie = `Auth_exp=${data.Auth_exp}; path=/; secure; samesite=Strict`;

        router.push('/invigilator/ID');
      } else {
        alert('User Not Found');
      }
    } catch (error) {
      console.log(error);
    }
    // Add your OTP verification logic here
  };

  return (
    <>
    <Logo />
    <Header />
    
    <div className="flex flex-col items-center justify-center mt-4">
    <h1 className="text-xl mt-2 font-semibold mb-2 -ml-52  ">Enter 6-digits code</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <OtpInput length={6} onChange={handleOtpChange} />
       
        <h1 className="text-xl mt-2  mb-2 ">Don’t receive any e-mail? <u><b>Try again</b></u></h1>
      </form>
    </div>
    <div className='flex mt-16 'style={{ marginLeft: "550px" }}>
        <Link href="/register">
            <button className='flex justify-center items-center w-36 h-12 border-2 border-black rounded-md hover:bg-gray-500' >
            <Image className=' pt-1 w-8'
        src="/Arrow 5.svg"
        alt="Next.js logo"
        width={40}
        height={28}/>
    <h1 className='ml-2 text-2xl font-semibold'> Back</h1> </button></Link>
    <button className='flex justify-center items-center w-64 h-12 border-2 border-black rounded-md hover:bg-gray-500 bg-black text-white ml-12' onClick={handleSubmit} >
              <h1 className='ml-4 text-2xl font-semibold '>Submit </h1>
              <Image className='pl-2 pt-1 ml-2 '
        src="/Arrow 6.svg"
        alt="Next.js logo"
        width={40}
        height={20}
        
      /> </button>
        
              
        </div>
    <Footer />
    </>
  );
};

export default Home;
