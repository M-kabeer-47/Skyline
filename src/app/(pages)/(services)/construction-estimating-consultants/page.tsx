import BlueDiv from "@/components/layout/BlueDiv";
import Layout2 from "@/components/layout/layout2";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolDiv from "@/components/layout/ToolDiv";

const tools = [
  {
    heading: "Cost Estimation",
    text: "We help our clients to accurately estimate the costs of their construction projects by providing detailed cost estimates based on the project’s scope and requirements.",
    icon: "/icons/blueprint.svg",
  },
  {
    heading: "Cost Project Evaluation",
    text: "Our team evaluates your project requirements, the scope of work, and the available resources to develop an effective cost estimation plan.",
    icon: "/icons/working.svg",
  },
  {
    heading: "Cost Control",
    text: "We assist our clients in managing their construction costs by providing cost control strategies that ensure the project stays within budget.",
    icon: "/icons/excavator.svg",
  },
  {
    heading: "Value Engineering",
    text: "We help our clients to optimize their construction projects by identifying ways to reduce costs without sacrificing quality or performance.",
    icon: "/icons/factory-2.svg",
  },
  {
    heading: "Bid Analysis",
    text: "We provide bid analysis services that help our clients to compare bids and select the most cost-effective construction solutions.",
    icon: "/icons/factory-2.svg",
  },
];

export default function ConstructionEstimatingConsultants() {
  return (
    <div className="px-[4%] lg:px-[10%] pb-[100px] sm:pb-[200px]">
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
          Welcome to our construction estimating consultant services page. We
          provide cost estimation consulting services to help our clients in the
          construction industry accurately estimate the costs of their projects.
          Our team of experienced consultants has the knowledge and expertise to
          provide you with the most accurate cost estimates, helping you to make
          informed decisions about your construction projects.
        </p>
      </BlueDiv>
      <Layout2
        heading="Construction Estimating Consultants"
        text="Our consulting services are designed to cater to the specific needs of our clients, whether they are small or large businesses. We provide a comprehensive range of services that include"
        image="/services-trades/construction.webp"
        paraList={[
          "Cost Estimation",
          "Cost Project Evaluation",
          "Cost Control",
          "Value Engineering",
          "Bid Analysis",
        ]}
        icon={
          <div className="bg-accent w-[17px] h-[17px] rounded-full flex items-center justify-center">
            <div className="bg-white w-[9px] h-[9px] rounded-full relative"></div>
          </div>
        }
        
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[5%] gap-y-[50px] mb-[100px] relative lg:top-[-250px]">
        {tools.map((tool,index) => (
          <ToolDiv
            key={tool.heading}


            heading={tool.heading}
            text={tool.text}
            icon={tool.icon}
            className={index === tools.length - 1 ? "md:col-span-2" : ""}
          />
        ))}
      </div>

      <BlueDiv
      className="relative lg:top-[-250px]"
      >
        <p className="text-white text-md text-center leading-8 px-[2%]">
          Our consulting services are designed to help our clients save money,
          minimize risks, and achieve their project objectives. We work closely
          with our clients to understand their requirements and provide tailored
          solutions that meet their specific needs. If you are looking for
          reliable and accurate construction estimating consulting services,

          look no further than our team of experts. Contact us today to schedule
          a consultation and discover how we can help you achieve your project
          goals.
        </p>
      </BlueDiv>
    </div>
  );
}
