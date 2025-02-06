import TurnaroundTime from "@/components/Home/TurnaroundTime"
import { ArrowRight } from "lucide-react"
// import { NumberMask } from "@/components/Home/NumberMask"
export function NumberMask() {
    return (
      <div className="relative flex items-center justify-center w-full">
        <div className="flex flex-col">

        
        <div
          className="flex lg:text-[500px] sm:text-[340px] text-[250px] font-bold leading-none text-transparent bg-clip-text relative top-[-90px]"
          style={{
            backgroundImage: `url(${"/backgrounds/bg-cover.jpg"})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          30
        </div>
        <p className="relative top-[-100px] text-xl font-semibold text-[#6ec1e4] leading-[30px] md:max-w-[600px] text-center">
        Years Of Experience With <span className="font-bold text-2xl">Creative Team</span>
        </p>
        </div>
        
        

      </div>
    )
  }
  
  

export default function AboutUs() {
  return (
    <div className="mb-[150px] min-h-[1000px] md:pb-[200px] pb-[100px] relative top-[180px]">
      <div className="flex flex-col justify-center items-center md:flex-row mt-[50px] px-[4%]">
        
        <NumberMask />
        
        
        


        <div className="w-full h-[500px] md:px-[7%] mb-[100px] md:mb-[30px]">
          <h1 className="text-5xl md:text-6xl font-semibold text-dark-blue tracking-tighter mb-[20px]">
            Welcome To Skyline Estimating
          </h1>

          <p className="text-md text-dark-blue leading-[30px] md:max-w-[600px]">
            At Skyline Estimating, our expert team of construction estimators offers professional construction
            estimating services and material takeoffs with the help of construction managers and quantity surveyors that
            have the expertise in providing successful residential, commercial, and industrial projects.
          </p>
          <button className="bg-accent text-white py-2 rounded-sm mt-[20px] flex items-center gap-2 py-[15px] box-border px-[20px]">
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <TurnaroundTime page={"about-us"} />
    </div>
  )
}

