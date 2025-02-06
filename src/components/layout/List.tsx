export default function List({ list, icon, className }: { list: string[], icon: React.ReactNode, className?: string }) {
    return (
      <ul className={`flex flex-col gap-y-[23px] md:mt-[0px] mt-[50px] lg:mt-[0px] w-full lg:h-[500px] ${className}`}>
        {list.map((item) => (
          <li key={item} className="flex items-center  gap-2">
            <div className="shrink-0">{icon}</div> 
            <span className="leading-relaxed">{item}</span> 
          </li>
        ))}
      </ul>
    );
  }
  