import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
export default function PILogin() {

  return (
    <>
    <Nav/>
    <h1>Login for Project Investigator</h1>
    <Link href="/invigilator"><button>Login</button></Link>
    <Footer/>
    </>
  );
}