"use client"

import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"

interface VideoModalProps {
  thumbnailUrl: string
  videoUrl: string
}

export function VideoModal({ thumbnailUrl, videoUrl }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      {/* Thumbnail */}
      <div className="relative cursor-pointer overflow-hidden p-[10px] bg-white rounded-[15px] h-full w-full" onClick={() => setIsOpen(true)}>
        <img src={thumbnailUrl || "/placeholder.svg"} alt="Video thumbnail" className="w-full h-full object-cover rounded-[15px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 text-white" fill="white" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-7">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Close Button (Now Responsive) */}
          <button
            className="absolute top-[20%] right-[13%] md:top-[15%] md:right-[2%] sm:top-[20%] sm:right-[2%] max-[450px]:top-[35%] max-[450px]:right-[2%] text-white bg-black/50 hover:bg-black p-2 rounded-full transition-all duration-200 z-50"
            onClick={() => setIsOpen(false)}

          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Modal Content */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden transition-all duration-300 transform scale-100 opacity-100 shadow-xl top-[50px]">
            <iframe
              src={videoUrl}
              className="w-full h-full "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
