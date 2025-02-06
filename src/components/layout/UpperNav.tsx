"use client"
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faFacebookF,
  faLinkedin,
  faYoutube,
  faTwitter,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

export default function UpperNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 0) {
        setIsVisible(false);

      } else if (window.scrollY === 0) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);

    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`bg-dark-blue hidden min-[650px]:flex flex-col lg:flex-row text-white px-[8%] max-w-full justify-between py-4 fixed w-full top-0 z-[100] transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Contact Info Container */}
      <div className="grid grid-cols-2 lg:flex lg:flex-row gap-2 lg:gap-12 items-start lg:items-center">
        {/* Phone */}
        <p className="text-sm">914-202-3145</p>
        
        {/* Email */}
        <div className="flex gap-[5px] items-center">
          <Mail className="w-4 h-4 text-accent-hover" />
          <p className="text-sm">christopher@skylinesestimator.com</p>
        </div>

        {/* Address */}
        <div className="flex gap-[5px] items-center">
          <MapPin className="w-4 h-4 text-accent-hover" />
          <p className="text-sm">60 Broad St #3502 New York, NY 10004</p>
        </div>
        {screenWidth < 1050 && (
                  <ul className="flex gap-4 items-center mt-[3px]  lg:mt-0">
                  <FontAwesomeIcon icon={faFacebookF} className="text-white w-5 h-5 cursor-pointer hover:text-accent-hover transition-colors duration-300" />
                  <FontAwesomeIcon icon={faTwitter} className="text-white w-4 h-4 cursor-pointer hover:text-accent-hover transition-colors duration-300" />
                  <FontAwesomeIcon icon={faLinkedin} className="text-white w-4 h-4 cursor-pointer hover:text-accent-hover transition-colors duration-300" />
                  <FontAwesomeIcon icon={faYoutube} className="text-white w-4 h-4 cursor-pointer hover:text-accent-hover transition-colors duration-300" />

                      <FontAwesomeIcon icon={faSkype} className="text-white w-4 h-4 cursor-pointer hover:text-accent-hover transition-colors duration-300" />
                </ul>
        )}
      </div>

      {screenWidth > 1050 && (
        <ul className="flex gap-4 items-center mt-2 lg:mt-0">
          <FontAwesomeIcon icon={faFacebookF} className="text-white w-5 h-5 cursor-pointer hover:text-accent-hover transition-colors duration-300" />
          <FontAwesomeIcon icon={faTwitter} className="text-white w-5 h-5 cursor-pointer hover:text-accent-hover transition-colors duration-300" />
          <FontAwesomeIcon icon={faLinkedin} className="text-white w-5 h-5 cursor-pointer hover:text-accent-hover transition-colors duration-300" />

          <FontAwesomeIcon icon={faYoutube} className="text-white w-5 h-5 cursor-pointer hover:text-accent-hover transition-colors duration-300" />
          <FontAwesomeIcon icon={faSkype} className="text-white w-5 h-5 cursor-pointer hover:text-accent-hover transition-colors duration-300" />
        </ul>



      )}




      {/* Social Icons */}
      
    </div>
  );
}

      
      
