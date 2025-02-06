import TurnaroundTime from "@/components/Home/TurnaroundTime"
import { ArrowRight } from "lucide-react"
import NumberMask from "@/components/layout/NumberMask"
  
  

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

