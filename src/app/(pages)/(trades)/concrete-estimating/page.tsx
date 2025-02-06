import BlueDiv from "@/components/layout/BlueDiv";
import Layout1 from "@/components/layout/layout1";
import List from "@/components/layout/List";
import ToolDiv from "@/components/layout/ToolDiv";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const tools = [
  {
    heading: "Bid Estimating",
    text: "We can provide you with extremely thorough and precise construction cost estimation services to assist you bid and win assignments if you are a contractor who is busy with field work and dealing with the convoluted bidding procedure. Additionally, we administer your bidding network profile and offer help with bid filing.",
    icon: "/icons/blueprint.svg",
  },
  {
    heading: "Design Estimating",
    text: "Throughout the design phase, architects and engineering firms require estimates to compare design alternatives to the owner’s budget. To help them, we offer conceptual, schematic, design development, and comprehensive construction cost estimating services.",
    icon: "/icons/working.svg",
  },
  {
    heading: "Budget Estimating",
    text: "The budget estimate can be useful to developers and owners in defining the original budget, project finance, confirming contractor bids, and allocating budget restrictions for architects. It also aids in cost management, efficiency optimization, and the choice of the proper material. Our estimates can give you the trustworthy pricing you need to choose the best vendors and contractors to work with so you don’t end up with more change orders.",
    icon: "/icons/excavator.svg",
  },

  {
    heading: "Preliminary Estimating",
    text: "Preliminary estimates enable financiers, developers, and owners to assess the project’s viability at the very beginning of project preparation. Based on data from previous products and partial design plans, we offer the most trustworthy and convincing first estimations. Our estimators calculate the square footage prices to assist our clients in determining whether the project is worthwhile of their time and financial resources.",
    icon: "/icons/factory-2.svg",
  },
];
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

export default function ConcreteEstimating() {
  return (

    <div className="px-[4%] lg:px-[10%] pb-[200px]">
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
          For many years, general contracting companies, concrete contractors,
          home builders, and real estate developers have benefited from Skyline
          Estimator division 3 concrete estimating services. Contractors who
          work on sidewalks, driveways, and pavement typically have to perform
          fieldwork on-site and struggle to estimate accurately for bid
          proposals. We accept the duty of relieving their anxiety by offering
          them comprehensive and accurate concrete takeoff and estimate services
          to help them with their bids.
        </p>
      </BlueDiv>
      <Layout1
        heading="CONCRETE TAKEOFF SERVICES PORTFOLIO"
        text="We have provided general contractors, concrete contractors, asphalt contractors, foundation contractors, vendors, and pavers with the most precise and in-depth concrete estimating services and material takeoffs services, from large construction organisations to small businesses. We have a solid reputation in the blue book for being accurate. For many different private and public projects, we have successfully offered concrete takeoff services for sidewalks, driveways, retaining walls, concrete pavement, waterproofing, parking lots, flatwork, basements, concrete foundations, concrete curbs, concrete slabs, etc."
        image="/services-trades/concrete-est.webp"
        list={[
          "Dams",
          "Bridges",
          "Residential Buildings",
          "Commercial Buildings",
          "Marine Structures",
          "Driveways",
          "Culverts And Sewers",
          "High Rise Buildings (foundation)",
          "Fences",
        ]}
        icon2={
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#ff5e14" }} />
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[5%] gap-y-[50px] mb-[100px]">
        {tools.map((tool) => (
          <ToolDiv
            key={tool.heading}
            heading={tool.heading}
            text={tool.text}
            icon={tool.icon}
            className="md:top-[-40px]"
          />
        ))}
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold text-dark-blue text-center mb-[50px]">
      SERVICES FOR ESTIMATING CONSTRUCTION COSTS IN ALL CSI DIVISIONS
      </h1>
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
        Our estimators adhere to the strict AACE and AIQS rules and have a variety of prior experiences working with general contractors and subcontractor companies. Professional cost estimators in the trades of site work, civil, structural, mechanical, and electrical, as well as a lead estimator who covers every area of the project, make up our team. All CSI divisions are served by us:
        </p>
      </BlueDiv>
      <div className="grid grid-cols-1 md:grid-cols-[10%_90%] gap-x-[10%] gap-y-[50px] relative mt-[50px]">
            <List list={list1} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />} />
            <List list={list2} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />} />
        </div>
    </div>
  );
}

    