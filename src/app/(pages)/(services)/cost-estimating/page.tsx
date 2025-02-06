import BlueDiv from "@/components/layout/BlueDiv";
import Layout1 from "@/components/layout/layout1";
import ToolDiv from "@/components/layout/ToolDiv";
import List from "@/components/layout/List";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tools = [
    {
        heading: "Bid Estimating",
        text: "We can provide you with extremely thorough and precise construction cost estimation services to assist you bid and win assignments if you are a contractor who is busy with field work and dealing with the convoluted bidding procedure. Additionally, we administer your bidding network profile and offer help with bid filing.",
        icon: "/icons/blueprint.svg"
    },
    {
        heading: "Design Estimating",
        text: "Throughout the design phase, architects and engineering firms require estimates to compare design alternatives to the owner’s budget. To help them, we offer conceptual, schematic, design development, and comprehensive construction cost estimating services.",
        icon: "/icons/working.svg"
    },
    {
        heading: "Budget Estimating",
        text: "The budget estimate can be useful to developers and owners in defining the original budget, project finance, confirming contractor bids, and allocating budget restrictions for architects. It also aids in cost management, efficiency optimization, and the choice of the proper material. Our estimates can give you the trustworthy pricing you need to choose the best vendors and contractors to work with so you don’t end up with more change orders.",
        icon: "/icons/excavator.svg"
    },
    {
        heading: "Preliminary Estimating",
        text: "Preliminary estimates enable financiers, developers, and owners to assess the project’s viability at the very beginning of project preparation. Based on data from previous products and partial design plans, we offer the most trustworthy and convincing first estimations. Our estimators calculate the square footage prices to assist our clients in determining whether the project is worthwhile of their time and financial resources.",
        icon: "/icons/factory-2.svg"
    }
]
const list1 = [
    "Sitework",
    "Earthwork",
    "Masonry",
    "Concrete",
    "Finishes",
    "Drywall",
    "Painting",
    "Flooring",
    "Roofing",
    "Lumber",
    "Millwork",
    "Cabinetry",
]
const list2 = [
    "Stucco",
    "Metals",
    "Rebar",
    "Structural steel",
    "Door/Window",
    "Electrical",
    "Mechanical",
    "Plumbing",
]



export default function CostEstimation() {
  return (
    <div className="mb-[300px] md:px-[10%] px-[4%] lg:px-[10%] pb-[100px] sm:pb-[200px]">
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
          Skyline Estimator offers a wide range of construction cost estimating

          services and cost management services to respond to the needs of the
          ever-growing construction sector. Being in the industry for many
          years, we have reached a position where we thoroughly understand the
          market conditions and can handle cost estimates for the project of any
          complexity. With a focus on accuracy and attention to detail, our team
          of skilled estimators delivers thorough estimates that are correct,
          fast, and include marked-up plans. They also maintain contact with the
          clients during the entire project.
        </p>
      </BlueDiv>
      <Layout1
        heading="Construction Cost Estimating Services"
        text="We recognise the individual requirements of our clients and our building cost estimating services are tailored to their particular demands. Among our clientele are:"
        list={[
          "General Contractors",
          "Subcontractors",
          "Project managers",
          "Developers",
          "Investors",
          "Architects",
          "Homebuilders",

          "Owners",
          "Vendors",


        ]}
        icon1={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />}
        icon2={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />}
        image="/services-trades/cost.webp"


      />
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-[5%] gap-y-[50px] w-full">
        {tools.map((tool) => (
          <ToolDiv key={tool.heading} heading={tool.heading} text={tool.text} icon={tool.icon} />
        ))}


      </div>
        <h1 className="text-3xl  font-semibold text-center mt-[80px] mb-[50px]">SERVICES FOR ESTIMATING CONSTRUCTION COSTS IN ALL CSI DIVISIONS</h1>
        <BlueDiv>
            <p className="text-white text-md text-center leading-8 px-[2%]">
            Our estimators adhere to the strict AACE and AIQS rules and have a variety of prior experiences working with general contractors and subcontractor companies. Professional cost estimators in the trades of site work, civil, structural, mechanical, and electrical, as well as a lead estimator who covers every area of the project, make up our team. All CSI divisions are served by us:
            </p>
        </BlueDiv>
        <div className="grid grid-cols-1 md:grid-cols-[10%_90%] gap-x-[10%] gap-y-[50px]  mt-[50px]">
            <List list={list1} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />} />
            <List list={list2} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />} />
        </div>




    </div>

  );
}

