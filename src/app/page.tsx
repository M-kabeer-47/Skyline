"use client"
import Image from "next/image";
import Hero from "../components/Home/Hero";
import { useState, useEffect } from "react";
import CircularEstimations from "../components/Home/CircularEstimations";
import TurnaroundTime from "../components/Home/TurnaroundTime"
import Stats from "../components/Home/Stats"
import Services from "../components/Home/Services";
import Accordions from "../components/Home/Accordions";
import PaymentTerms from "../components/Home/PaymentTerms";
export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {  
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    }
    handleScroll()
  }, []);
  return (
      <>
      <Hero
      isAtTop={isAtTop}
       />
       <div className="bg-light-gray min-h-fit">
       <CircularEstimations />
       <TurnaroundTime />
       <Stats />
       <Services />
       <Accordions />
       </div>
       <PaymentTerms />
      
    </>
  )

}