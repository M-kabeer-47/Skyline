import BlueDiv from "@/components/layout/BlueDiv";
import Layout2 from "@/components/layout/layout2";
import ToolDiv from "@/components/layout/ToolDiv";
const tools = [
  {
    heading: "Cost Estimation",
    text: "We provide detailed cost estimation services for projects of all sizes. Our estimates include a breakdown of all costs associated with the project, including labor, materials, equipment, and other expenses.",
    icon: "/icons/blueprint.svg",
  },
  {
    heading: "Budget Planning",
    text: "We help our clients develop realistic budgets for their projects, taking into account all factors that could impact costs, such as market trends, supply chain issues, and labor availability.",
    icon: "/icons/working.svg",
  },
  {
    heading: "Value Engineering",
    text: "We provide value engineering services to help our clients optimize their projects for cost efficiency. By analyzing the project requirements and identifying areas for improvement, we help our clients achieve their goals while minimizing costs.",
    icon: "/icons/excavator.svg",
  },
  {
    heading: "Bid Preparation",
    text: "We assist our clients with bid preparation for projects that require competitive bidding. Our team can help you develop a winning bid strategy that meets your project requirements while staying within your budget",
    icon: "/icons/factory-2.svg",
  },
  {
    heading: "Project Management",
    text: "We offer project management services to help our clients execute their projects successfully. Our team of project managers has extensive experience in the industrial sector and can help you manage your project from start to finish",
    icon: "/icons/excavator.svg",
  },
];
export default function IndustrialEstimating() {
  return (
    <div className="px-[4%] lg:px-[10%] pb-[200px] sm:pb-[250px]">
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
          Get our Industrial estimating services to save estimating costs and

          improve accuracy and have your estimates and takeoffs audited and
          analyzed by professional construction estimators within the fastest
          turnaround times. Skyline Estimator has used in rendering total
          estimating solutions to EPC contractors, owners, engineering firms,
          financial investors, and joint venture partners in the North American
          industrial sector. Our wide range of industrial estimating services is
          tailored to the specific needs of the respective clients starting from
          project planning, through conception and construction
        </p>
      </BlueDiv>
      <Layout2
        heading="CONSTRUCTION COST ESTIMATING SERVICES"
        text="Our team of experienced estimators has a deep understanding of the industry, which allows us to provide you with the most precise estimates possible. We use the latest technologies and methodologies to ensure that our estimates are both accurate and efficient.
            Our industrial estimating services cover a wide range of industries, including manufacturing, construction, oil and gas, mining, and more. We work closely with our clients to understand their unique needs and provide them with a customized solution that meets their specific requirements."
        image="/services-trades/cost.webp"
      />
      <h1 className="text-3xl md:text-4xl font-semibold text-dark-blue text-center mb-[50px]">
        OUR INDUSTRIAL ESTIMATING SERVICES INCLUDE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[5%] gap-y-[50px] mb-[100px]">
  {tools.map((tool, index) => {
    return (
      <ToolDiv
        key={tool.heading}
        heading={tool.heading}
        text={tool.text}
        icon={tool.icon}
        className={index === tools.length - 1 ? "md:col-span-2" : ""}
      />
    );
  })}
</div>

      <h1 className="text-3xl md:text-3xl font-semibold text-dark-blue text-center mb-[50px]">
      SERVICES FOR ESTIMATING CONSTRUCTION COSTS IN ALL CSI DIVISIONS
      </h1>
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
        At our company, we pride ourselves on providing accurate and reliable industrial estimating services. Contact us today to learn more about how we can help you with your cost estimation needs.
        </p>
      </BlueDiv>
    </div>


  );
}
