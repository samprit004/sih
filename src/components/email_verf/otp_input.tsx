'use client';
import React, { useState, useRef } from 'react';

interface OtpInputProps {
  length?: number; // Number of input boxes
  onChange: (otp: string) => void; // Callback for OTP value changes
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Move focus to the next input if a value is entered
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
    const newOtp = [...otp];
    pasteData.forEach((char, idx) => {
      if (idx < length) newOtp[idx] = char;
    });
    setOtp(newOtp);
    onChange(newOtp.join(''));
    inputs.current[Math.min(pasteData.length - 1, length - 1)]?.focus();
  };

  return (
    <div onPaste={handlePaste} className="flex gap-4">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => {
            inputs.current[index] = el;
          }}
          className="w-12 h-12 text-center text-xl bg-slate-300 underline border-black border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
};

export default OtpInput;
