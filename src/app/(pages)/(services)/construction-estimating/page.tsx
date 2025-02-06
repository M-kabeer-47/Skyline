import BlueDiv from "@/components/layout/BlueDiv";
import Layout2 from "@/components/layout/layout2";
import ToolDiv from "@/components/layout/ToolDiv";
const tools = [
    {
        heading: "Bid Estimates",
        text: "We provide bid estimates for contractors bidding on construction projects. Our bid estimates are designed to help you win more bids by providing accurate and competitive pricing.",
        icon: "/icons/blueprint.svg"
    },
    {
        heading: "Preliminary Estimates",   
        text: "We provide a preliminary estimate based on the scope of the project, site conditions, and materials to be used. This estimate is designed to give you an initial idea of the project’s potential costs.",
        icon: "/icons/working.svg"

    },
    {
        heading: "Cost Analysis",
        text: "Our value engineering services help you reduce costs without compromising quality or safety. We work closely with architects, engineers, and contractors to identify cost-saving opportunities without sacrificing design or functionality.",
        icon: "/icons/excavator.svg"
    },
    {
        heading: "Detailed Estimates",
        text: "We provide detailed estimates that take into account every aspect of the project, from labor costs to material costs, equipment rentals, and more. Our detailed estimates are highly accurate and designed to help you plan your project down to the smallest detail.",
        icon: "/icons/factory-2.svg"
    },
    {
        heading: "Cost Control",
        text: "We provide ongoing cost control services to help you stay on budget throughout the construction process. Our team reviews and updates estimates as the project progresses, helping you identify potential cost overruns and adjust the project accordingly.",
        icon: "/icons/excavator.svg"
    }
    


]
export default function ConstructionEstimating() {
    return (
        <div className="px-[4%] lg:px-[10%] pb-[200px] sm:pb-[300px]">
            <BlueDiv>
                <p className="text-white text-md text-center leading-8 px-[2%]">
                Welcome to our construction estimating services page. At Skyline Estimator, we offer comprehensive cost estimation solutions for all types of construction projects, from residential renovations to large-scale commercial developments.
                </p>

            </BlueDiv>
            <Layout2 
            heading="CONSTRUCTION COST ESTIMATING SERVICES"
            text="Our team of experienced estimators use the latest industry software and techniques to provide accurate, detailed and reliable construction estimates. We understand that accurate cost estimation is crucial for the success of any construction project, and our goal is to provide our clients with the information they need to make informed decisions and stay on budget."
            image="/services-trades/construction.webp"
            />
            <h1 className="text-3xl md:text-3xl font-semibold text-dark-blue text-center mb-[50px]">
                OUR CONSTRUCTION ESTIMATING SERVICES INCLUDE
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[5%] gap-y-[50px] mb-[100px]">
                {tools.map((tool,index) => (
                    <ToolDiv key={tool.heading} heading={tool.heading} text={tool.text} icon={tool.icon} className={index === tools.length - 1 ? "md:col-span-2" : ""} />
                ))}
            </div>
            <BlueDiv>
                <p className="text-white text-md text-center leading-8 px-[2%]">    
                At Skyline Estimator, we are committed to providing our clients with the highest level of service and expertise. Contact us today to learn more about how we can help you with your construction cost estimation needs.


                </p>
            </BlueDiv>
        </div>


    )
}

