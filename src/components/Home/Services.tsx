import Link from "next/link"
import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      title: "CONCRETE ESTIMATING",
      icon: "/icons/mixer-truck.svg",
      backgroundImage: "/backgrounds/concrete.jpg",
    },
    {
      title: "MASONRY ESTIMATING",
      icon: "/icons/brick-wall.svg",
      backgroundImage: "/backgrounds/wall.jpg",



    },
    {
      title: "ELECTRICAL ESTIMATING",
      icon: "/icons/tower.svg",
      backgroundImage: "/backgrounds/electrical.jpg",
    },


    {
      title: "METAL ESTIMATING",
      icon: "/icons/beam.svg",
      backgroundImage: "/backgrounds/metal.jpg",


    },
  ]

  return (
    <section className="py-16 px-[6%] max-[1065px]:px-[3%] relative  bg-light-gray mb-[100px]">
      <div className="relative">
        {/* Section Title with Background Text */}
        <div className="text-center mb-16 relative">
          {/* Large Background "Services" Text */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap text-[10vw] text-white font-bold text-black opacity-[40%] pointer-events-none select-none  top-[15px]"
            style={{
              letterSpacing: "0.05em",
              lineHeight: "0.8",
            }}

          >
            SERVICES
          </div>

          {/* Actual Title Text */}
          <span className="text-gray-600 text-sm uppercase tracking-wider relative z-10">Our Services</span>
          <h2 className="text-dark-blue text-6xl font-semibold mt-2 relative z-10">Our Services</h2>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3%]">
          {services.map((service, index) => (
            <div key={index} className="relative  group flex flex-col justify-center overflow-hidden rounded-[13px] h-[380px] max-[650px]:h-[300px]">
              {/* Background Image */}
              <div className="absolute inset-0">


                <Image src={service.backgroundImage || "/placeholder.svg"} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 flex flex-col items-center min-h-[300px] text-center">
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt=""
                    width={60}
                    height={60}
                    className="text-[#FF5C00]"
                  />

                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-bold mb-6  min-[1000px]:max-w-[150px]">{service.title}</h3>

                {/* Learn More Button */}
                <Link
                  href={`/${service.title.toLowerCase().replace(" ", "-")}`}
                  className="bg-accent text-white px-6 py-3 rounded inline-flex items-center group-hover:bg-[#FF7A33] transition-colors"
                >
                  Learn More

                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

