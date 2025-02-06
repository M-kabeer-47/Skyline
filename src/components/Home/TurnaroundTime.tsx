"use client"
import Image from "next/image"
import { VideoModal } from "../ui/VideoModal"

const features = [
    {
        icon: "/icons/back-in-time.svg",
        title: "Quickest Turnaround Time",
        description: "Within a quick turnaround of 48 to 72 hours, we offer quantity takeoffs."
    },
    {
        icon: "/icons/money.svg",
        title: "Affordable Prices",
        description: "Our estimates are priced competitively in the market rates of 2023 on average. (Prices may vary depending on the size and complexity of the project.)"
    },
    {
        icon: "/icons/doc.svg",
        title: "Detailed Accurate Estimates",
        description: "We can assure accuracy in our estimates by using latest software and our built building cost database based on zip code."
    },
    {
        icon: "/icons/certified.svg",
        title: "Certified Estimators",
        description: "Skyline Estimator has a certified development assessor having solid licenses and experience"
    },
    {
        icon: "/icons/team.svg",
        title: "Skilled Professional Team",
        description: "Our team includes Development Assessors, Architects, field specialists, and development supervisors."
    },
    {
        icon: "/icons/customer.svg",
        title: "24/7 Customer Support",
        description: "Our client service is accessible 24/7 to help you."
    }
]

export default function TurnaroundTime({page}: {page?: string}) {
    return (
        <div className={`w-full px-[6%] max-[1065px]:px-[3%] py-16 bg-light-gray mt-[100px]`}>
            {/* Header */}

            <div className="text-center mb-12">
                <p className="text-accent text-[25px]">Excellence In Estimating Services</p>
                <h2 className="text-dark-blue text-5xl max-[450px]:text-4xl md:text-5xl font-semibold mt-2">TURNAROUND TIME 48-72 HOURS!</h2>
            </div>

            {/* if page is about us then show the features grid without the video modal */}
            

            <div className={`grid grid-cols-1 md:grid-cols-2 ${page!=="about-us" ? "min-[1065px]:grid-cols-3" : "lg:px-[100px]"} gap-8`}>
                <div className="col-span-2 grid max-[650px]:grid-cols-1 grid-cols-2 gap-y-[20px] gap-x-[20px] max-[600px]:gap-y-[80px] max-[600px]:mt-[70px]">


                    {features.map((feature, index) => (
                        <div key={index} className="max-[600px]:flex-col max-[600px]:items-center flex items-start gap-4 min-[1065px]:col-span-1 min-[1065px]:max-w-[600px]">
                            <div className="flex-shrink-0">
                                <img src={feature.icon} alt={feature.title} className={`${index === 0 && page==="home"  && "max-[600px]:w-[100px] max-[600px]:h-[100px]"}  ${index!==0 && page==="home" && "max-[600px]:w-[130px] max-[600px]:h-[130px]"} ${page==="about-us" && index !== 0 && "w-[110px] h-[110px]"} ${page==="about-us" && index === 0 && "w-[100px] h-[100px]"}`} />


                            </div>

                            <div className="flex flex-col">




                                <h3 className="text-dark-blue font-semibold text-lg mb-2 max-[600px]:text-center max-[600px]:text-2xl">{feature.title}</h3>

                                <p className="text-dark-blue/80 font-normal text-md border-l-[3px] border-accent pl-[10px] leading-[30px] max-[600px]:text-center">{feature.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
                {page !== "about-us" && (
                <div className="max-[1065px]:col-span-2 max-[1065px]:h-[450px] max-[1065px]:mt-[50px] col-span-1 ml-[2%]">
                    <VideoModal
                        thumbnailUrl="/backgrounds/video-bg.jpg"

                        videoUrl="https://www.youtube.com/embed/_ImikwogqzQ?si=O8wITvPn1hOkhOc4"
                    />
                </div>
                )}
            </div>


        </div>

    )
} 