import { ArrowRight } from "lucide-react"

export default function ToolDiv({heading, text, icon,className}: {heading: string, text: string, icon: string,className?:string}) {
  return (


    <div className={`relative px-4 sm:px-8 py-4 sm:py-8 bg-[#f7f7f7] w-full rounded-[0px]  sm:p-8 ${className}`}>
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6">


        <div className="p-4 bg-[#FF5C28] rounded-lg">
          <img src={icon} alt={heading} width={24} height={24} />
        </div>
      </div>


      <div className="space-y-4 pr-4 sm:pr-16">
        <h2 className="text-2xl font-semibold text-[#1B365D] max-w-[200px] sm:max-w-[600px]">{heading}</h2>
        <p className="text-gray-600 leading-relaxed relative top-[10px] sm:top-[0px]">
          {text}
        </p>

        <ArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  )
}

