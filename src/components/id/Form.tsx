'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
function getCookie(name: string) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
      let [key, value] = cookie.split("=");
      if (key === name) return value;
  }
  return null;
}
const CustomForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    governmentId: "",
    projectId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const jsbody = {
      id: getCookie('margsathi_id'),
      Auth_token: getCookie('Auth_token'),
      aadhar_no: formData.governmentId,
      pi_id: formData.projectId,
    }
    try {
      const response = await fetch('/api/upload_id', {
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
        alert('id submitted successfully! '+data.message);
        router.push('/invigilator/verification_successful');
      } else {
        alert('User Not Found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-md  w-2/5"
      >
        
        <div className="flex flex-col gap-1">
          <label htmlFor="governmentId" className="text-lg font-semibold">
            Government ID (Aadhaar No. / PAN No.):
          </label>
          
          <input
            type="text"
            id="governmentId"
            name="governmentId"
            value={formData.governmentId}
            onChange={handleChange}
            className="border border-black rounded-md px-4 py-2 text-sm  "
            placeholder="XXXX XXXX XXXX"
            required
          />
        </div>

       
        <div className="flex flex-col gap-1">
          <label htmlFor="projectId" className="text-lg font-semibold">
            PI (Project Investigator) ID:
          </label>
          <input
            type="text"
            id="projectId"
            name="projectId"
            value={formData.projectId}
            onChange={handleChange}
            className="border border-black rounded-md px-4 py-2 text-sm "
            placeholder="XXXX XXXX XXXX"
            required
          />
        </div>

        
        <div className="flex justify-center mt-10 gap-8">
          <Link href="/">
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

                <button className="flex gap-5 items-center bg-[#1E1E1E] px-12 py-1 rounded-lg border-2 border-[#1E1E1E]" onClick={handleSubmit}>
                <span className="font-semibold text-lg text-white">Submit</span>
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

export default CustomForm;
