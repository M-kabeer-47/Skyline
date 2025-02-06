"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"

export default function HowToBegin() {
  const [openSection, setOpenSection] = useState<string>("submit")

  const sections = [
    {
      id: "submit",
      title: "Submit Your Drawing Plans",
      content:
        "After you submit your drawing plans and requirements, we produce a price that includes an invoice, turnaround time, and the estimated delivery date. We accept PDF files, and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.",
    },
    {
      id: "quote",
      title: "Get A Quote",
      content: "You will receive the quotation within a few minutes after evaluating the planning materials. After accepted, you may pay the invoice using a credit card, debit card, or PayPal, and our staff will begin working on your project.",
    },
    {
      id: "estimate",
      title: "Receive Estimate",
      content: "You will be given an estimate that includes all material and labour amounts as well as price. When needed, we give the estimate and takeoff sheet in EXCEL, our own template, or the client’s template.",
    },
  ]

  return (
    <section className="relative bg-accent max-[1065px]:min-h-[2000px] max-[1065px]:px-[3%] px-[6%] box-border py-[100px]" style={
        {
            backgroundImage: `url("/backgrounds/bg-world.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",


        }
    }>
      {/* World Map Background */}
      <div

        className="w-full relative overflow-hidden h-fit"
        


      />

      {/* Dotted Pattern Overlay */}
    

      <div className="px-4 py-16 relative">
        {/* Services Label */}
        <div className="relative inline-block">
          <div className="bg-[#FFE600] py-2 px-6 transform -skew-x-12">
            <span className="text-black font-medium">Our Services</span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-white text-5xl font-bold mt-6 mb-12">How To Begin With Us!</h2>

        <div className="grid min-[1065px]:grid-cols-2 gap-[10%] items-start">
          {/* Left Column - Accordion */}
          <div className="space-y-4">
            {sections.map((section) => (

              <div key={section.id} className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenSection(openSection === section.id ? "" : section.id)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="text-xl font-semibold">{section.title}</span>
                  {openSection === section.id ? (
                    <Minus className="h-6 w-6 text-[#FFE600]" />
                  ) : (
                    <Plus className="h-6 w-6 text-[#FFE600]" />
                  )}
                </button>
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openSection === section.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 py-4 text-gray-600 leading-relaxed border-t">{section.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Images */}
          <div className="relative lg:-mt-24 max-[1280px]:top-[13%] max-[1280px]:ml-[16%] max-[1065px]:mx-[5%] max-w-full">
          <div className="absolute -top-12 -left-12 w-[30%] h-48 z-10 bg-white p-[2px] max-[600px]:p-[4px] max-[600px]:w-[40%] max-[600px]:h-[30%] max-[1065px]:left-[-30px]">
              <img



                src="/users/cover-pic-1.jpg"
                alt="Construction planning"
                

                className="object-cover w-[100%] h-[100%] "
              />
            </div>
            <div className="bg-white w-[80%] max-[1065px]:w-[95%] relative max-[1065px]:left-[20px]">

              <img
                src="/users/cover-pic-2.jpg"
                alt="Construction site"
                

                className="object-cover w-full max-[1065px]:h-[70%]"


              />
            </div>
            <div className="absolute -bottom-12 right-12 w-[30%] h-48 z-10 bg-white p-[2px] z-10 max-[1065px]:right-[-2%] max-[600px]:p-[4px] max-[600px]:w-[40%] max-[600px]:h-[30%]  max-[1065px]:right-[-40px]">
              <img
                src="/users/cover-pic-3.jpg"
                alt="Construction worker"
                

                className=" object-cover w-[100%] h-[100%]"

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

