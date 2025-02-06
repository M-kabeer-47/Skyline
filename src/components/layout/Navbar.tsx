"use client";
import Image from "next/image";
import { ChevronDown, Menu, X, MapPin, Clock, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faYoutube,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTradesOpen, setIsTradesOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);


  // State to trigger the reappearance (slide-down) animation on scroll
  const [triggerNavAnimation, setTriggerNavAnimation] = useState(false);
  const animatingRef = useRef(false);

  const [isAtTop, setIsAtTop] = useState(true);

  // Close sidebar if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  // Scroll handler to trigger a reappearance animation on the navbar,
  // and update if the user is at the very top.
  useEffect(() => {
    const handleScroll = () => {
      // Update "at top" state:
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      // Trigger the slide-down animation on every scroll event
      if (!animatingRef.current) {
        animatingRef.current = true;
        setTriggerNavAnimation(true);

        setTimeout(() => {
          setTriggerNavAnimation(false);
          animatingRef.current = false;
        }, 300); // Must match animation duration
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full bg-white pt-[20px] transition-all duration-300 flex justify-between items-center px-[7%] box-border  h-[80px] lg:h-[95px] border-b z-[90] 
                ${
                  // On larger screens (min-[1065px]) when at the top, add an extra offset (e.g. top-[60px]); otherwise, always top-0.
                  isAtTop
                    ? "min-[1065px]:top-[60px] min-[650px]:top-[80px] top-0"
                    : "top-0"
                }
                ${triggerNavAnimation ? "animate-slide-down" : ""}`}
      >
        <div className="flex items-center gap-[30px] lg:gap-[50px]">
          <img
            src="/logo.png"
            alt="Logo"
            className="max-w-[160px] lg:max-w-[200px] min-[1065px]:relative min-[1065px]:top-[-10px] font-normal"
          />
          {/* Desktop Menu 
          make these list items as Link components
          */} 
          <ul className="hidden min-[1065px]:flex items-center gap-10 relative top-[-10px]">
            <li className="text-dark-blue font-semibold hover:cursor-pointer hover:text-accent transition-colors duration-300">
              <Link href="/">Home</Link>    
            </li>

            <li className="text-dark-blue font-semibold hover:cursor-pointer hover:text-accent transition-colors duration-300">
              <Link href="/about-us">About Us</Link>
            </li>

            <li className="text-dark-blue font-semibold hover:cursor-pointer hover:text-accent transition-colors duration-300 flex items-center gap-1 group relative">
              Services
              <ChevronDown />
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-[60px] left-0 w-48 bg-accent shadow-lg transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">
                    <Link href="/cost-estimating">Cost Estimating</Link>
                  </li>
                  <li


                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">
                    <Link href="/residential-estimating">Residential Estimating</Link>
                  
                    
                  </li>


                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer"
                    
                  >
                    <Link href="/commercial-estimating">Commercial Estimating</Link>
                  </li>


                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer"
                    
                  >
                    <Link href="/industrial-estimating">Industrial Estimating</Link>

                  </li>

                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">
                    <Link href="/construction-estimating">Construction Estimating</Link>

                  </li>


                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">

                    <Link href="/construction-estimating-consultants">Construction Estimating Consultants</Link>

                  </li>
                </ul>

              </div>
            </li>
            <li className="text-dark-blue font-semibold hover:cursor-pointer hover:text-accent transition-colors duration-300 flex items-center gap-1 group relative">
              Trades
              <ChevronDown />
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-[60px] left-0 w-48 bg-accent shadow-lg transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">
                    <Link href="/concrete-estimating">Concrete Estimating</Link>
                  </li>

                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">

                    <Link href="/lumber-takeoff">Lumber Takeoff</Link>
                  </li>
                  <li

                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">
                    <Link href="/sitework-estimating">Sitework Estimating</Link>
                  </li>

                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">

                    <Link href="/electrical-estimating">Electrical Estimating</Link>
                  </li>
                  <li

                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">

                    <Link href="/masonry-estimating">Masonry Estimating</Link>

                  </li>
                  <li
                    className="px-4 py-2 text-white hover:text-dark-blue transition-colors duration-200 cursor-pointer">
                    <Link href="/metal-estimating">Metal Estimating</Link>

                  </li>
                </ul>

              </div>
            </li>

            <li className="text-dark-blue font-semibold hover:cursor-pointer hover:text-accent transition-colors duration-300">
                <Link href="/contact-us">Contact</Link>
            </li>
          </ul>

        </div>
        {/* Mobile Menu Button */}
        <div className="min-[1065px]:hidden flex items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-accent transition-colors duration-300 p-2"
          >
            <Menu size={24} />
          </button>
        </div>
        {/* Desktop Quote Button */}
        <button className="hidden min-[1065px]:block min-[1065px]:relative top-[-10px] bg-accent text-white px-8 py-[15px] rounded-md font-semibold hover:bg-dark-blue hover:text-white transition-colors duration-300 text-sm"
          onClick={() => {
            router.push("/contact-us")
            
          }}
        >
          Get A Quote
        </button>
      </nav>


      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 min-[1065px]:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-full sm:w-[300px] h-full bg-accent transform transition-transform duration-300 ease-in-out z-[110] overflow-y-auto min-[1065px]:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col min-h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/20">
            <h2 className="text-white text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:text-dark-blue transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1">
            <ul className="p-6 space-y-4">
              <li className="text-white hover:text-dark-blue transition-colors duration-300">
                <Link href="/" className="block py-2" onClick={()=>{
                  setIsSidebarOpen(false)
                }}>
                  Home
                </Link>
              </li>

              <li className="text-white hover:text-dark-blue transition-colors duration-300">
                <Link href="/about-us" className="block py-2" onClick={()=>{
                  setIsSidebarOpen(false)
                }}>
                  About Us
                </Link>
              </li>


              <li className="text-white hover:text-dark-blue transition-colors duration-300">
                <div
                  className="flex items-center justify-between py-2 cursor-pointer"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </div>
                <ul
                  className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    isServicesOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/cost-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Cost Estimating
                    </Link>




                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/residential-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Residential Estimating


                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/commercial-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Commercial Estimating



                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/industrial-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Industrial Estimating


                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/construction-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Construction Estimating


                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/construction-estimating-consultants" className="flex items-center gap-2 py-1" onClick={()=>{       
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Construction Estimating Consultants


                    </Link>
                  </li>
                </ul>
              </li>
              <li className="text-white hover:text-dark-blue transition-colors duration-300">
                <div
                  className="flex items-center justify-between py-2 cursor-pointer"
                  onClick={() => setIsTradesOpen(!isTradesOpen)}
                >
                  <span>Trades</span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      isTradesOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </div>
                <ul
                  className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    isTradesOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/concrete-estimating" className="flex items-center gap-2 py-1" onClick={()=>{   
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Concrete Estimating



                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/lumber-takeoff" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Lumber Takeoff



                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/sitework-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>


                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Sitework Estimating

                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/electrical-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>


                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Electrical Estimating

                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/masonry-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>


                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Masonry Estimating

                    </Link>
                  </li>
                  <li className="text-white/80 hover:text-dark-blue transition-colors duration-300">
                    <Link href="/metal-estimating" className="flex items-center gap-2 py-1" onClick={()=>{
                      setIsSidebarOpen(false)
                    }}>
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                      Metal Estimating



                    </Link>
                  </li>
                </ul>
              </li>
            <li className="text-white font-semibold hover:text-dark-blue transition-colors duration-300">
                <Link href="/contact-us" className="block py-2" onClick={()=>{
                  setIsSidebarOpen(false)
                }}>



                  Contact
                </Link>

              </li>
              {/* Location and Hours */}
              <li className="pt-4 relative left-[-8px]">
                <div className="flex items-center gap-2 text-white">
                  <MapPin size={28} className="text-white" />
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">Visit Our Location</p>
                    <p className="text-sm">
                      60 Broad St #3502 New York, NY 10004
                    </p>
                  </div>
                </div>
              </li>
              <li className="pt-4 relative left-[-8px]">
                <div className="flex items-center gap-2 text-white">
                  <Clock size={24} className="text-white" />
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">Opening Hours</p>
                    <p className="text-sm">Mon-Fri 8am-5pm</p>
                  </div>
                </div>
              </li>
              <li className="pt-4 relative left-[-8px]">
                <div className="flex items-center gap-2 text-white">
                  <Mail size={24} className="text-white" />
                  <div className="flex flex-col max-w-[200px]">
                    <p className="text-md font-semibold">Send Us Mail</p>
                    <p className="text-sm break-words">
                      christopher@skylinesestimator.com
                    </p>
                  </div>
                </div>
              </li>
              {/* Quote Button */}
              <li className="pt-4 relative left-[-8px]">
                <button className="w-full text-sm bg-dark-blue text-white px-8 py-3 rounded-sm font-semibold hover:bg-white hover:text-dark-blue transition-colors duration-300"
                    onClick={() => {
                      router.push("/contact-us")
                      setIsSidebarOpen(false)
                    }}
                >
                  Get A Quote
                </button>


              </li>
              {/* Social Icons */}
              <li>
                <div className="flex items-center gap-4 pt-4">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-white w-5 h-5"
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}

                    className="text-white w-5 h-5"
                  />
                  <FontAwesomeIcon

                    icon={faLinkedin}
                    className="text-white w-5 h-5"
                  />


                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-white w-5 h-5"

                  />
                  <FontAwesomeIcon
                    icon={faSkype}
                    className="text-white w-5 h-5"
                  />
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
