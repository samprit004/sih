import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default function login(){
  return (
    <>
    <Nav />
      <h1>Login through here</h1>
      <div className='flex gap-14 text-2xl font-medium items-center mr-16'>
        <Link href="/login/invigilator"><button>invigilator</button></Link>
        <Link href="/login/admin"><button>admin</button></Link>
      </div>
      
    <Footer />
    </>
);
}