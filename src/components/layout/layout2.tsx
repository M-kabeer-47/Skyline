import List from "./List";

export default function Layout2({heading, text, image,paraList,icon,className}: {heading?: string, text: string, image: string,paraList?: string[],icon?: React.ReactNode,className?: string}) {
  return (




    <div className="mb-[100px] grid grid-cols-1 md:grid-cols-[45%_55%] gap-y-[50px] mt-[70px] sm:gap-x-[5%]  lg:gap-x-[0px]">
        <div className="w-full lg:h-[500px]">
        <img src={image} alt={heading} className="lg:w-[90%] lg:h-[80%] w-full h-full object-cover" />
        </div>


        <div className="flex flex-col gap-4">   
     {heading && <h2 className="text-2xl font-semibold">{heading}</h2>}
      <p className="text-md leading-8">{text}</p>
      {paraList && <List list={paraList} icon={icon} />}
      </div>  



    </div>
  
    
  );
}
