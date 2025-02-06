import BlueDiv from "@/components/layout/BlueDiv";
import Layout2 from "@/components/layout/layout2";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "@/components/layout/List";

const list1 = [
  "Lumber Takeoffs",
  "Framing Takeoffs",
  "Lumber Cut Lists",
  "Bid Estimates",
  "Budget Estimates",
  "Preliminary Estimates",
  "Bidding Assistance",
  "Subcontractor Marketing",
  "Project Lead Generation",
  "Change Orders",
  "Value Engineering",
];
const list2 = [
  "Switches",
  "Panels & Circuit Breakers",
  "Feeders",
  "Plates",
  "Switchgear Panels",
  "Cable Tray",
  "Wiring",
  
];

export default function LumberTakeoff() {
  return (
    <div className="px-[4%] lg:px-[10%] pb-[200px] sm:pb-[300px]">
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
          Skyline Estimator is the result of many years of experience in the
          construction estimation sector, and it has knowledge of accurate
          material takeoffs and complete estimates for all CSI divisions for
          residential, commercial, industrial, retail, and civil projects. By
          combining our knowledge from experience and the most recent Software,
          we provide our clients with a time and money-saving model so that we
          can best serve them.
        </p>
      </BlueDiv>
      <Layout2
        heading="Lumber Estimator"
        text="Our company has a specialist lumber estimator who has previous expertise working with different contractors in North America. Our staff of construction cost estimators makes sure that each project complies with the severe rules and regulations of the American organisations that certify estimators, such as the American Association of Cost Engineers (AACE) and the Australian Institute of Quantity Surveyors (AIQS). Every wood sill, piece of structural and non-structural lumber, and piece of fascia is calculated by our lumber calculator and described in detail in your plans and drawings. Our estimate services for wood-plastic composites are trustworthy and precise."
        image="/services-trades/lumber.webp"
      />
      <h2 className="text-3xl md:text-4xl font-semibold text-dark-blue  mb-[50px]">
        OUR RANGE OF LUMBER ESTIMATING SERVICES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-x-[10%] gap-y-[50px] relative mt-[50px] mb-[70px]">
        <List
          list={list1}
          icon={
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#ff5e14" }}
            />
          }
        />
        <List
          list={list2}
          icon={
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#ff5e14" }}
            />
          }
        />
      </div>
      <BlueDiv>
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-[50px]">
          OUR RANGE OF LUMBER ESTIMATING SERVICES
        </h2>
        <p className="text-white text-md text-center leading-8 px-[2%]">
        A thorough understanding of millwork building methods, wall layouts, lumber quality, structural connections, labour costs, man-hours, transportation expenses, etc. is necessary for the best lumber estimate and quantity takeoff. It can take a lot of time and effort to perform estimation and takeoff on your own. You can save a lot of time by working with an estimate company like ours, and that time can then be used to bid on other jobs, create business plans, etc. You can avoid the high costs associated with professional staff hiring and training by outsourcing your millwork estimates. Also, you save paying for pricey estimating software. By using their services, you boost your chances of landing jobs because professional estimation businesses have skilled estimators that can do extremely accurate and quick takeoffs.
        </p>
      </BlueDiv>
    </div>
  );
}
