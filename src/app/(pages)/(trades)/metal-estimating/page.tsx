import BlueDiv from "@/components/layout/BlueDiv";
import Layout2 from "@/components/layout/layout2";
import List from "@/components/layout/List";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const list = [
    "Our estimators and detailers are knowledgeable about the production process, specs, and cutting and laser-welding technologies, among other things.",
    "Quick turnaround of 24 to 48 hours to provide your consumers with price quotes right away.",
    "A thorough cost estimate that includes all the components—materials, labour, cranes, fuel, and other tools—as well as the number of labour hours needed to install the rebar.",
    "With color-coded marked-up plans, estimates are simple to review and change.",
    "From design to completion, complete structural steel detailing and shop drawing services are available for all sorts of infrastructure, residential, commercial, and industrial projects.",
    "For the fabrication and installation of HVAC ducts, pipelines, rebar, sheet metal, and structural steel, we provide the best bar bending schedules.",
    "We also offer numerous cost-saving solutions if the client so requests.",
    "24/7 support on live chat and email."
    ]
const list2 = [
    "Steel takeoffs and estimates that are thorough and precise, including the scope, the price, and the design",
    "Precast estimation",
    "Cold-form steel estimation",
    "Steel frames takeoffs",
    "Rebar estimation",
    "Structural steel takeoffs",
    "Bar bending schedules",
    "Change order management"
]

export default function MetalEstimating() {
    return (
        <div className="px-[4%] lg:px-[10%] pb-[200px] sm:pb-[200px]">

            <BlueDiv>
                <p className="text-white text-md text-center leading-8 px-[2%]">
                A whole pre-construction estimating consultant, Skyline Estimator began as a steel consulting company for metal frame contractors, steel erectors, steel producers, distributors, and fabricators. For the benefit of our clients, our team of highly qualified structural steel estimators and engineers has created the best estimating procedures to review takeoffs, analyse takeoffs, and manage construction costs.
                </p>
            </BlueDiv>
            <Layout2 
            image="/services-trades/metal-est.webp"
            text="Due to their lack of technical knowledge, many steel fabricators, manufacturers, and even steel framing contractors struggle to interpret the technical data from the designs and perform accurate takeoffs with structural specifications. With the capacity to tackle complex constructions, we specialise in offering a full spectrum of steel estimates and detailing services."
            />
            <BlueDiv className="mb-[100px]">
                <List list={list} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />}className="text-white" />
            </BlueDiv>
            <h1 className="text-3xl md:text-4xl text-dark-blue font-semibold mb-[50px]">
            Our steel estimating services include:
            </h1>
            <List list={list2} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />} />
        </div>


    )
}
