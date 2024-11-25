import Nav from "../components/landing/Nav";
import Hero from "../components/landing/Hero";
import About from "@/components/landing/About";
import Guidelines from "@/components/landing/Guidelines";
import Footer from "@/components/landing/Footer";
import Working from "@/components/landing/Working";
import Faq from "@/components/landing/Faq";

export default function Home() {
  
  return (
    <>
     <Nav/>
     <Hero/>
     <About/>
     <Guidelines/>
     <Working/>
     <Faq/>

     <Footer/>
    </>
  );
}
