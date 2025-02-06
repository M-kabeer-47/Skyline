import { CircleIcon } from "../ui/CircularIcon"

import { useRouter } from "next/navigation";

const options = [
    {
        icon: "/icons/cost.svg",
        title: "Cost Estimating",
        description: "We recognize the individual requirements of our clients and our building cost estimating services are tailored"

    },
    {
        icon: "/icons/balance.svg",
        title: "Commercial Estimating",
        description: "We recognize the individual requirements of our clients and our building cost estimating services are tailored"
    },
    {
        icon: "/icons/house.svg",
        title: "Residential Estimating",
        description: "We understand that accurate cost estimation is essential for any residential project, and that’s why we’ve developed"
    },
    {
        icon: "/icons/factory.svg",
        title: "Industrial Estimating",
        description: "Our team of experienced estimators has a deep understanding of the industry, which allows us to provide you."
    },
];


function CircularEstimation({icon,title,description}:{icon:string,title:string,description:string}){
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center gap-[20px]">
            <CircleIcon icon={icon} size="lg" />
            <h3 className="text-dark-blue text-2xl font-semibold">
                {title}
            </h3>
            <p className="text-dark-blue text-sm font-light text-center max-w-[200px] max-[650px]:max-w-[600px]">
                {description}
            </p>
            <button className="bg-accent text-white px-8 py-[10px] rounded-md cursor-pointer text-sm" onClick={()=>{
                router.push(`/${title.toLowerCase().replace(" ", "-")}`)
            }}>  
            Learn More
                

            </button>
        </div>

    )
}
export default function CircularEstimations() {
    return (
        <div className="w-full min-h-fit bg-cover bg-center max-[1065px]:grid max-[1065px]:grid-cols-2 max-[760px]:grid-cols-1 gap-y-[50px] flex flex-row items-center flex-wrap px-[6%] max-[1065px]:px-[3%] relative justify-between max-[650px]:top-[-65px]  top-[20px] ">
            {options.map((option,index)=>(
                <CircularEstimation key={index} {...option} />
            ))}
        </div>
    )
}
