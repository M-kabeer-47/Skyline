import BlueDiv from "@/components/layout/BlueDiv";
import Layout1 from "@/components/layout/layout1";
import List from "@/components/layout/List";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const list1 = [
    "Masonry Quantity Takeoffs",
    "Design Estimates",
    "Budget Estimates",
    "Bid Estimates",
    "Bid Submittal Preparation",
    "Proposal Preparation & Pricing",
    "Masonry Consulting",
    "Masonry Contractor Marketing",
    "Project Lead Generation"
]
const list2 = [ "Each and every masonry piece utilised to build the foundation wall. It includes concrete masonry units, bricks, CMU blocks, acoustic blocks, glass units, clay bricks, clay tiles, brick tiles, stones, marble, limestone, terra cotta, precast masonry panels, rubble, and their various forms, including corner units, pilaster units, bond beams, lintel blocks, knockouts, stirrups, sill blocks, angle blocks, square pilasters, headers, halves, and half high, among others.",
"There are deductions for apertures like doors, windows, and ventilation.",
"The quantity of facing bricks and, if necessary, masonry, stone, or brick veneer.",

"The masonry components that are used in the various categories, such as the facings, backings to the facings, walls and partitions, furring to the walls, and fire protection, are specifically stated.",
"The quantity of mortar used, which relies on factors such as site circumstances, mortar proportions, whether it is pre-bagged or site-batching, etc. The type of mortar, such as masonry cement mortar, pre-blended mortar, or portland cement lime mortar, also affects the outcome.",
"if necessary, masonry reinforcing.",
"scaffolding, if necessary.",
"Anchor bolts, sleeves, brackets, brick ties, and other small objects.",
"Masonry flashing, insulation, and, if necessary, weep holes.",
"For rates based on zip codes, material, equipment, and labour costs are applied using RSMeans and our construction cost database.",
"Estimate of other expenditures, such as transportation, taxes, permits, restoration and cleaning charges, etc., as well as the man-hours and labour costs associated with various jobs."
]

export default function MasnoryEstimating() {
    return (
        <div className="px-[4%] lg:px-[10%] pb-[200px] sm:pb-[300px]">

            <BlueDiv>
                <p className="text-white text-md text-center leading-8 px-[2%]">
                Skyline Estimating is available if you’re looking for the top masonry estimation services. We’ve excelled at providing the most accurate estimates in the East Haven area thanks to our years of broad experience in the estimation industry.
                </p>
            </BlueDiv>
            <Layout1
            heading="MASONRY TAKEOFF SERVICES PORTFOLIO"
            text="We have excelled at producing timely and accurate estimates for masonry works for the various clients, including general contractors, masonry contractors, masonry repair contractors, vendors, masons, developers, architects, designers, and home builders, thanks to our practical knowledge and years of experience in the AEC industry."
        
            list={list1}
            image="/services-trades/masonry.webp"
            icon2={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}} />}
            />
            <h1 className="text-3xl md:text-4xl text-dark-blue text-center font-semibold mb-[50px]">
            WHAT DO WE TAKE OFF IN THE MASONRY TRADE OF DIVISION 4?
            </h1>
            <BlueDiv>
                <p className="text-white text-md text-center leading-8 px-[2%]">
                Drafting drawings and specifications supplied by the customer are carefully examined with regard to the plan, elevation, and section views to establish the scope of work before being used to create a masonry estimate. Planswift, Bluebeam, and other masonry takeoff programmes are used by us to measure the amounts using a point-and-click manner, and the quantities are entered into EXCEL spreadsheets with MasterFormat labels. For items mentioned in the drawings, we use CSI codes.
                </p>
            </BlueDiv>
            <div className="mt-[70px] mb-[100px] lg:mb-[0px]">
            <h1 className="text-3xl md:text-4xl text-dark-blue text-center font-semibold mb-[50px]">
            Our Masonry Costing Spreadsheet Includes The Following Breakdown Of Quantities:
            </h1>

            <List list={list2} icon={<FontAwesomeIcon icon={faCircleCheck} style={{color: "#ff5e14",}}/>} className="min-h-[1000px] lg:min-h-[800px]" />
            </div>
            
            <h1 className="text-3xl md:text-4xl text-dark-blue text-center font-semibold mb-[50px]">
            WHY USE AN OUTSOURCED MASONRY ESTIMATE?
            </h1>
            <BlueDiv>
                <p className="text-white text-md text-center leading-8 px-[2%]">
                Our estimators adhere to the strict AACE and AIQS rules and have a variety of prior experiences working with general contractors and subcontractor companies. Professional cost estimators in the trades of site work, civil, structural, mechanical, and electrical, as well as a lead estimator who covers every area of the project, make up our team. All CSI divisions are served by us:
                </p>
                <p className="text-white text-md text-center leading-8 px-[2%]">
                Only accurate and thorough estimates can provide you an advantage over your rivals in the extremely competitive construction sector of today, where you are bidding on tight profit margins. The biggest difficulty in creating a masonry estimate on your own is accuracy, which makes it difficult and time-consuming. A thorough understanding of masonry units, mortar, grout, reinforcements, man-hours, labour expenses, transportation costs, and various other amounts is required, as is tool and software proficiency. The cost of purchasing pricey software and employing a full-time estimator will significantly increase your monthly salary, bonus income, and other expenses. As a result, you gain the following advantages from outsourcing your estimates to a reputable estimating business like First Bidding:
                </p>
            </BlueDiv>
            
        




        </div>

    )
}
