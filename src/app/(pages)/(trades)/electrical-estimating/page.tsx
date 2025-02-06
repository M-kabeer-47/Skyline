import BlueDiv from "@/components/layout/BlueDiv";
import Layout1 from "@/components/layout/layout1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ToolDiv from "@/components/layout/ToolDiv";
import List from "@/components/layout/List";
const list1 = [
    "Electric Cost Estimates For",
    "Electrical Material Takeoffs",
    "Electrical Cost Per Square Foot",
    "Electric Project Cost Management",
    "Electrical CAD Drafting Services",
    "Value Engineering",
    "Bid Preparation & Submission"    

]
const list2 = [
    "Lighting Fixtures",
    "Lighting Controls",
    "PVC Fittings",
    "Rigid Fittings",
    "EMT Fittings",
    "Hangers & Supports",
    "Liquidtite",
    "Grounding",
    "Conduit",
    "Conductors",
    "Fuses"
]
const list3 = [
    
    "Switches",
    "Panels & Circuit Breakers",
    "Feeders",
    "Plates",
    "Switchgear Panels",
    "Cable Tray",
    "Wiring",
    
]
    


const tools = [{
        heading: "RESIDENTIAL ELECTRICAL ESTIMATING",
        text: "We can assist you with the electrical estimates that can be used for procurement and bidding purposes if you are an electrician or electrical contractor working on residential projects. Providing domestic electrical estimates services for renovations, expansions to new homes, apartments, Eco-homes, smart homes, etc. is something our staff has firsthand experience with. A service panel, subpanels, an electric metre, electrical boxes, receptacles, domestic wiring, switches, other appliances, lights, and equipment, etc. are all deducted from the estimate for the electric house wiring.",
        icon: "/icons/blueprint.svg"
    },
    {
        heading: "COMMERCIAL ELECTRICAL ESTIMATING",
        text: "Whether you’re an electrician or electrical contractor working on residential projects, we can assist you with the electrical estimates that can be used for procurement and bidding purposes. Our team has experience in-the-field offering residential electrical estimating services for renovations, additions to new homes, apartments, Eco-homes, smart homes, etc. We deduct every element from the electric house wiring estimate, including power transmission lines, a service panel, subpanels, an electric metre, electrical boxes, receptacles, household wiring, switches, and additional appliances, lights, and equipment, among other things.",
        icon: "/icons/working.svg"
    },

    {
        heading: "INDUSTRIAL ELECTRICAL ESTIMATING",
        text: "Skyline Estimator specializes in quickly meeting your needs and provides thorough electrical estimating services. We are equipped to handle industrial projects of all shapes and sizes. We have helped numerous EPC contractors, instrumentation contractors, instrumentation technicians, industrial electricians, and controls system professionals with projects ranging from tiny factories to enormous plants and everything in between. With our extensive experience in industrial estimating, we provide our clients with excellent value through our reliable and accurate cost projections in pre-construction planning, budgeting, bidding, and winning jobs for new construction installations and maintenance as well as existing plant electrical system installations. We have worked on a variety of industrial projects throughout the course of our 15 years in the sector, including sewage treatment plants, wastewater treatment plants, power generation, distribution, metals, and food production.",
        icon: "/icons/excavator.svg"
    }       
    ]
   

export default function ElectricalEstimating() {
    return (
        <div className="px-[4%] lg:px-[10%] pb-[200px] sm:pb-[300px]">
            <BlueDiv>
                <p className="text-white text-md text-center leading-8 px-[2%]">
                Our site work estimating services provide accurate and detailed site work estimates, cut and fill takeoffs, and 3D maps that are delivered to site contractors, landscaping contractors, land developers, general contractors, and site contractors within 24 to 48 hours. They increase bid wins and decrease overhead costs when their numbers are accurate.
                </p>
            </BlueDiv>
            <Layout1
            heading="CONTRACTORS' ELECTRICAL ESTIMATION SERVICES"
            list={list1}
                image={"/services-trades/electrical-est.webp"}
                
                icon2={<FontAwesomeIcon icon={faCircleCheck} style={{ color: "#ff5e14" }} />}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[5%] gap-y-[50px] mb-[50px] relative lg:top-[-50px]">
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
      <h1 className="text-3xl md:text-4xl text-dark-blue text-center font-semibold mb-[50px]">
      OUR ELECTRICAL TAKEOFF SHEETS
      </h1>
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
        We comprehend that in order to effectively acquire and install the many parts that make up the electrical system, contractors and electricians need detailed estimates. In order to help you set your profit margins appropriately, we guarantee that all costs, including hidden costs, are included in our estimates with current and zip code-based pricing. To make it simple for you to grasp, each area of our takeoffs has a thorough line item description with regard to various types and sizes, marked with color-coded plans. The following sections make up our electrical takeoff sheet in general, but the exact arrangement will vary depending on the project’s size.
        </p>
      </BlueDiv>
      <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-x-[10%] gap-y-[50px] relative mt-[50px]">
            <List list={list2} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />} />
            <List list={list3} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />} />
        </div>
        </div>
        


    )
}

