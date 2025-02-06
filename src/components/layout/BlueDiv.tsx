export default function BlueDiv({children,className}: {children: React.ReactNode,className?: string}) {
  return (
    <div className={`w-full h-auto p-[30px] md:p-[50px] bg-dark-blue ${className}`}>
      {children}
    </div>
  );
}

