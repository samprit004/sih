'use client';
import { useState } from 'react';
import Logo from '@/components/logo';
import OtpInput from '@/components/email_verf/otp_input';
import Header from '@/components/email_verf/header';
import Footer from '@/components/email_verf/footer';
import NavButton from '@/components/email_verf/navbutton';

const Home: React.FC = () => {
  const [otp, setOtp] = useState<string>('');

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('OTP Submitted: ' + otp);
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
    <Footer />
    <NavButton />
    </>
  );
};

export default Home;
