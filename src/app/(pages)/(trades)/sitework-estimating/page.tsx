import BlueDiv from "@/components/layout/BlueDiv";
import Layout1 from "@/components/layout/layout1";
import List from "@/components/layout/List";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const list1 = [
  "Quantities to be estimated, taken off, cut, and filled for site development and construction projects",
  "Cross-sectional 3D graphics of the cut and fill areas and elevations",
  "Diagrams of a mass haul to decrease and mitigate the movement of soil and the ground.",
  "The topological data you have into Civil 3D",
];
const list2 = [
  "Residential Site work",
  "Commercial Site work",
  "Industrial Site work",
  "Cost-effective Solutions",
  "Efficiency & Accuracy",
  "Fast Turnaround Times",
  "Confidentiality",
  "Certified Estimators",
  "24/7 Support on Chat & Email",
];
const list3 = [
  "Site excavation report",
  "Cut/Fill Quantities",
  "Export or Import Quantities",
  "Volume Reports",
  "Top Soil Spreads",
];
export default function SiteworkEstimating() {
  return (
    <div className="px-[4%] lg:px-[10%] pb-[200px] sm:pb-[300px]">

      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
          From low voltage to instrumentation and control takeoffs, Skyline
          Estimator offers a variety of electrical estimating services with the
          expertise, experience, and dedication required to give you the
          greatest accuracy, dependability, and attention to detail.
        </p>
      </BlueDiv>

      <Layout1
        heading="THIS IS WHAT WE CAN MAKE FOR YOU:"
        headingList={list1}
        list={list2}
        image={"/services-trades/sitework.webp"}
        icon2={
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#ff5e14" }} />
        }
        icon1={
          <div className="bg-accent w-[17px] h-[17px] rounded-full flex items-center justify-center">
            <div className="bg-white w-[9px] h-[9px] rounded-full relative"></div>
          </div>
        }
        
      />
      <BlueDiv className="mt-[-50px]">
        <p className="text-white text-md text-center leading-8 px-[2%] ">
        We are aware that each sitework project is distinct and demands a particular strategy. Our skilled estimators thoroughly review the drawings and plans and create accurate sitework takeoffs of material and labour as well as manhours using the most recent software technology in sitework estimation. During our site work estimation services, all other aspects, such as construction machinery, insurance, logistics, safety, permits, contingencies, etc. are also taken into consideration.
        </p>
      </BlueDiv>
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-dark-blue mt-[70px] mb-[70px]">
      SERVICES FOR ESTIMATING EARTHWORK

      </h2>
      <BlueDiv className="mb-[50px] sm:min-h-[500px] md:max-h-[500px]">
        <p className="text-white text-md leading-8 px-[2%] mb-[50px] relative left-[-20px]">
        We are aware that each sitework project is distinct and demands a particular strategy. Our skilled estimators thoroughly review the drawings and plans and create accurate sitework takeoffs of material and labour as well as manhours using the most recent software technology in sitework estimation. During our site work estimation services, all other aspects, such as construction machinery, insurance, logistics, safety, permits, contingencies, etc. are also taken into consideration.
        </p>
        <List list={list3} icon={<FontAwesomeIcon icon={faCircleCheck} style={{ color: "#ff5e14" }}/>}  className="text-white"/> 
      </BlueDiv>
    </div>



  );
}
