"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Define locations for avatars to appear
const locations = [
  {
    id: 1,
    position: "top-[30%] left-[25%]",
    name: "John",
    region: "America",
    avatar: "/users/user1.jpg",


  },
  {
    id: 2,

    position: "top-[20%] left-[50%]",
    name: "Sam",
    region: "Europe",
    avatar: "/users/user2.png",



  },
  {
    id: 3,
    position: "top-[37%] left-[80%]",
    name: "Liu",
    region: "Asia",
    avatar: "/users/user3.jpg",



  },
]

const AnimatedAvatar = ({ location }: { location: any }) => {
  const avatarRef = useRef(null)

  useEffect(() => {
    const avatar = avatarRef.current
    if (!avatar) return

    const animate = () => {
      const duration = 1000 + Math.random() * 1000 // Random duration between 1-2s
      const delay = Math.random() * 2000 // Random delay up to 2s

      setTimeout(() => {
        // @ts-ignore
        avatar.style.transition = `all ${duration}ms ease-in-out`
        // @ts-ignore
        avatar.style.transform = "scale(1)"
        // @ts-ignore
        avatar.style.opacity = "1"


        setTimeout(() => {
          // @ts-ignore
          avatar.style.transform = "scale(0)"
          // @ts-ignore
          avatar.style.opacity = "0"


          setTimeout(animate, duration) // Restart animation after it completes
        }, duration)
      }, delay)
    }

    animate() // Start the animation

    return () => {
      // Clean up any ongoing animations if component unmounts
      if (avatar) {
        // @ts-ignore
        avatar.style.transition = "none"
      }
    }

  }, [])

  return (
    <div ref={avatarRef} className={`absolute ${location.position} transform scale-0 opacity-0`}>
      <Avatar className="w-10 h-10  shadow-md">
        <AvatarImage src={location.avatar} alt={location.name} />
        
      </Avatar>

      
    </div>
  )
}

export default function WorldMap() {
  return (
    <div className="relativew-full h-screen bg-white overflow-hidden">
      {/* World Map Background */}
      <div
        className="absolute inset-0 opacity-100 object-contain top-[-340px]"
        style={{
          backgroundImage: `url("/backgrounds/bg-world.png")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        }}
      />

      {/* Avatars */}
      {locations.map((location) => (
        <AnimatedAvatar key={location.id} location={location} />
      ))}
    </div>
  )
}

