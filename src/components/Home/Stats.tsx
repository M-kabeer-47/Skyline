"use client";
import { useRef } from "react";
import { useCounter } from "@/hooks/use-counter";

const stats = [
  {
    number: 1203,
    label: "Project Completed",
    icon: "/icons/diamond.svg",
  },
  {
    number: 164,
    label: "Expert Consultants",
    icon: "/icons/compass.svg",
  },
  {
    number: 1007,
    label: "Happy Clients",
    icon: "/icons/happy-face.svg",
  },
  {
    number: 232,
    label: "5 Stars Rating",
    icon: "/icons/star.svg",
  },
];

export default function StatsSection() {
  // Create a ref for the container div
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-light-gray min-[1200px]:p-[6%]">
      <div
        ref={containerRef}
        id="stats-section"
        className="relative w-full bg-accent py-16 overflow-hidden rounded-lg min-h-[300px] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/backgrounds/dotted-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 text-white text-center">
            {stats.map((stat, index) => ( // @ts-ignore
              <StatItem key={index} containerRef={containerRef} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatItemProps {
  number: number;
  label: string;
  icon: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

function StatItem({ number, label, icon: iconUrl, containerRef }: StatItemProps) {
  // Pass the container ref into the hook
  const count = useCounter(number, 2000, containerRef);

  return (
    <div className="flex flex-col items-center space-y-2">
      <img src={iconUrl} alt={label} className="w-[50px] h-[50px] mb-2" />
      <div className="text-4xl lg:text-5xl font-semibold tracking-tight">
        {count.toLocaleString()}+
      </div>
      <div className="text-lg font-medium">{label}</div>
    </div>
  );
}
