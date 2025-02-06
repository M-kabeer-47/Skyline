"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"
import WorldMap from "../ui/WorldMap"

export default function PaymentTerms() {
  const [openSection, setOpenSection] = useState<string>("payment")

  const sections = [
    {
      id: "payment",
      title: "Payment Terms",
      content:
        "To protect the confidentiality of your financial information, we use Quickbooks Online Payments, which enables you to pay with confidence using a credit card, debit card, PayPal, wire transfer, or cheque. We provide you an estimate that includes the Quickbooks Invoice and delivery date after getting your blueprints and reviewing your project details. Before beginning the job, you must give us the upfront money if you accept the quotation. Call +1 321 257 8676 for further details.",
    },
    {
      id: "tackoff",
      title: "Monthly Construction Takeoff Packages",
      content: "In order to submit bids on time, are you having trouble streamlining the quantity takeoff/construction estimate process? Our monthly takeoff packages are a great resource for new or small contracting businesses. Typically for contractors that specialise in certain trades, such as mechanical, electrical, plumbing, and civil contractors.",
    },
    {
      id: "material",
      title: "Different Material Are Measured in Different Units",
      content: "Cubic yards are used to measure concrete (CY) Weight is used to measure steel (Pounds or Tons) Certain things, like windows and doors, are counted",
    },
    {
        id:"quantity",
        title:"Almost all quantities can be computed in following four type",
        content:"Volume is measured in cubic yards, cubic feet, and cubic meters. Area is measured in square yards and square feet(SF) Lengths Counts",

    }
  ]

  return (
    <section className="relative bg-white max-[1065px]:min-h-[1400px] px-[6%] max-[1065px]:px-[3%] box-border">
      

      <div className="px-4 py-16 relative">
        {/* Services Label */}
        <div className="relative inline-block">
          <div className="bg-[#FFE600] py-2 px-6 transform -skew-x-12">
            <span className="text-black font-medium">FAQ'S</span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-dark-blue max-[1065px]:text-4xl text-6xl font-semibold mt-6 mb-12 tracking-tighter">Our Payment Term's</h2>
        



        <div className="grid min-[1065px]:grid-cols-2 items-start gap-[2%]">
          {/* Left Column - Accordion */}
          <div className="relative w-full h-full" >
          <WorldMap />
          </div>
          
          

          {/* Right Column - Images */}
          <div className="space-y-4 max-[1065px]:left-[-30px] relative">
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





          
        </div>
      </div>
    </section>
  )
}

