import List from "./List";

export default function Layout1({heading,headingList,text, list,image,icon1,icon2}: {heading?: string, headingList?: string[], text?: string, list: string[],image: string,icon1?: React.ReactNode,icon2?: React.ReactNode}) {
  return (





    <div className="mb-[100px] flex flex-col gap-4 mt-[70px]">
      {heading && <h2 className="text-3xl md:text-4xl text-dark-blue font-semibold">{heading}</h2>}
      






      {text && <p className="text-md leading-8">{text}</p>}
      {headingList && <List list={headingList} icon={icon1} className="lg:max-h-[200px] lg:mt-[20px]"/>}
      
      
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] grid-cols-[100%] mt-[20px]">
        <div className="w-full lg:h-[500px]">
        <img src={image} alt={heading} className="lg:w-[90%] lg:h-[80%] w-full h-full object-cover" />
        </div>
      <div className="md:pl-[50px] lg:pl-[0px]">
      <List list={list} icon={icon2} />
      </div>
        


      
      </div>
      

    </div>
  
    
  );
}
