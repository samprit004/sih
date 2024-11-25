import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Guidelines from "@/components/landing/Guidelines";
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
