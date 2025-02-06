import BlueDiv from "@/components/layout/BlueDiv";
import Layout2 from "@/components/layout/layout2";
import List from "@/components/layout/List";
import ToolDiv from "@/components/layout/ToolDiv";

const tools = [
    {
        heading: "New Construction Cost Estimation",
        text: "Our team can provide you with a detailed cost estimate for your new home construction project, including all materials, labor, and other expenses. We take into account the size and complexity of the project, as well as any unique features or requirements.",
        icon: "/icons/blueprint.svg"

    },
    {
        heading: "Renovation Cost Estimation",
        text: "Whether you’re planning a kitchen remodel, bathroom renovation, or a full home renovation, our team can provide you with a comprehensive cost estimate. We’ll take into account the scope of the project, materials, labor, and any necessary permits.",
        icon: "/icons/working.svg"
    },
    {
        heading: "Home Addition Cost Estimation",
        text: "If you’re considering adding an addition to your home, we can provide you with a detailed cost estimate that takes into account the size and complexity of the addition, materials, labor, and any necessary permits.",
        icon: "/icons/excavator.svg"

    },
    {
        heading: "Customized Estimation",
        text: "We understand that every residential project is unique, and that’s why we offer customized estimation services. Whether you have a specific project in mind or need help developing a project plan, we can work with you to provide an accurate and reliable cost estimate.",
        icon: "/icons/factory-2.svg"
    }
]

export default function ResidentialEstimating() {
    return (

        <div className="mb-[300px] px-[4%] lg:px-[10%] pb-[200px] sm:pb-[200px]">

            <BlueDiv>
                <p className="text-white text-md text-center leading-8 px-[2%]">
                Welcome to our residential estimating services page! Our team specializes in providing accurate and reliable cost estimates for a wide range of residential projects, including new construction, renovations, and home additions
                </p>
            </BlueDiv>
            <Layout2
                heading="Residential Estimating"
                text="We understand that accurate cost estimation is essential for any residential project, and that’s why we’ve developed a comprehensive approach that takes into account all the factors that can impact project costs. Our team of experienced estimators uses the latest industry standards and technology to provide you with the most accurate estimate possible."
                image="/services-trades/residential.webp"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-[50px] mb-[100px]">
        {tools.map((tool) => (
          <ToolDiv key={tool.heading} heading={tool.heading} text={tool.text} icon={tool.icon} />
        ))}
      </div>
      <BlueDiv>
        <p className="text-white text-md text-center leading-8 px-[2%]">
        At our residential estimating services, we’re committed to providing our clients with the highest level of service and support. Our team of experts is always available to answer any questions you may have about your estimate, and we’re always here to help you navigate the estimating process from start to finish. If you’re ready to get started with your residential estimating project, please don’t hesitate to contact us today. We look forward to working with you.
        </p>
      </BlueDiv>



        </div>
    )
}
