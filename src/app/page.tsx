"use client"
import { useState, useEffect, useRef } from "react";
import Hero from "../components/Home/Hero";
import CircularEstimations from "../components/Home/CircularEstimations";
import TurnaroundTime from "../components/Home/TurnaroundTime";
import Stats from "../components/Home/Stats";
import Services from "../components/Home/Services";
import Accordions from "../components/Home/Accordions";
import PaymentTerms from "../components/Home/PaymentTerms";

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {  
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero isAtTop={isAtTop} scrollToServices={scrollToServices} />
      <div className="bg-light-gray min-h-fit max-[650px]:relative max-[650px]:top-[-50px]">
        <CircularEstimations />
        <TurnaroundTime page="home" />
        <Stats />
        {/* Attach ref to Services */}
        <div ref={servicesRef}>
          <Services />
        </div>
        <Accordions />
      </div>
      <PaymentTerms />
    </>
  );
}
