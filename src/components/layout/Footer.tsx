"use client"
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faFacebookF, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { MoveRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  return (
    <>

      <div className="w-full bg-dark-blue py-[50px] px-[6%] max-[1065px]:px-[3%] max-[1065px]:mt-[200px] mt-[100px]">
        {/* 
          Grid container:
          - Below 1065px: 1 column (vertical stack)
          - 1065px to 1450px: 2 columns 
              • Logo Card (first column) 
              • Newsletter (second column)
              • Contact Info spans both columns in the second row
          - 1450px and above: 3 columns (logo card, newsletter, contact info in one row)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1500px] mx-auto px-4 sm:px-2">
          {/* Logo Card Column */}
          <div className="relative md:-mt-20 xl:mt-0 min-h-[500px] md:min-h-[550px] pt-[50px] md:pt-[70px] bg-white p-6 md:p-8 shadow-lg flex flex-col justify-between items-center top-[-80px]">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[5px] bg-accent" />
            
            <div className="w-full h-[80px] md:h-[100px] relative mb-4 md:mb-6">
              <img
                src="/logo.png"
                alt="Skyline Estimator LLC"
                className="w-full h-full object-contain"
              />

            </div>

            <p className="text-center text-black mb-4 md:mb-6 text-sm md:text-[15px] leading-relaxed">
              Skyline Estimator provides better solution, accurate takeoffs and estimating. 
              We offer unmatched professional takeoff and estimating services, cost verification, 
              expert witness services, and more.
            </p>

            <Button
              className="bg-[#FF4A11] hover:bg-[#6ec1e4] text-white rounded px-6 md:px-8 py-4 md:py-[25px] text-sm md:text-md font-semibold"
              onClick={()=>{
                router.push("/contact-us")
              }}

            >
              Get In Touch


                


                <MoveRight strokeWidth={3} className="w-4 h-4 md:w-5 md:h-5" />
              
            </Button>

            <div className="flex justify-center gap-3 md:gap-4 mt-4 md:mt-6">
              {[faFacebookF, faTwitter, faInstagram, faYoutube].map((icon, i) => (
                <Link 
                  key={i}
                  href="#"
                  className="group text-black hover:bg-[#6ec1e4] rounded-full bg-light-gray flex items-center justify-center p-2"
                >
                  <FontAwesomeIcon icon={icon} className="text-black w-5 h-5 md:w-6 md:h-6 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:mt-[40px] xl:mt-0">
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 md:mb-[50px]">Newsletter</h2>
              <Input 
                type="email" 
                placeholder="Enter Email Address" 
                className="bg-white text-black py-4 md:py-7 rounded-[0]" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button className="bg-accent text-white py-4 md:py-7 text-md rounded-[0] font-semibold hover:bg-accent-hover hover:text-black"
                onClick={() => {
                  setEmail("");
                  alert("No implementation yet")

                }}
              >
                Subscribe Now
              </Button>

            </div>
          </div>

          {/* Contact Info Column */}
          <div className="md:col-span-2 xl:col-span-1 overflow-hidden">
            <div className="flex flex-col gap-4 md:gap-[30px]">
              <h2 className="text-white text-xl md:text-2xl font-semibold">Get in Touch</h2>
              
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full p-2 bg-accent w-10 h-10 sm:w-8 sm:h-8">
                  <PhoneCall className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-text-gray text-sm font-normal">Phone Number</p>
                  <p className="text-white text-base md:text-lg font-bold">914-202-3145</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full p-2 bg-accent w-10 h-10 sm:w-8 sm:h-8">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-text-gray text-sm font-normal">Email</p>
                  <p className="text-white text-base md:text-lg font-bold sm:w-[100px]">
                    christopher@skylineestimator.com
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full p-2 bg-accent w-10 h-10 sm:w-8 sm:h-8">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-text-gray text-sm font-normal">Office Address</p>
                  <p className="text-white text-base md:text-lg font-bold">60 Broad St #3502 New York, NY 10004</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-white text-sm md:text-md font-normal bg-dark-gray py-4 text-center">
        &copy; 2025 Skyline Estimator LLC. All rights reserved.
      </div>
    </>
  );
}