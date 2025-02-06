import type React from "react"
import { Scale } from "lucide-react"
import Image from "next/image"
interface CircleIconProps {
  icon: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function CircleIcon({ icon,size = "md", className = "" }: CircleIconProps) {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  }

  return (
    <div className={`relative w-[130px] h-[130px] ${className}`}>
      {/* Outer circle with border */}
      <div className="absolute inset-0 rounded-full border-4 border-orange-500 " />

      {/* Inner filled circle */}
      <div className="absolute inset-[10px] rounded-full bg-orange-500 flex items-center justify-center text-white">
       <Image src={icon} alt="icon" width={70} height={70} />
      </div>
    </div>
  )
}

