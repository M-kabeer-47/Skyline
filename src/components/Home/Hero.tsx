"use client"

export default function Hero({ isAtTop, scrollToServices }: { isAtTop: boolean, scrollToServices: () => void }) {
    return (
        <section 
            className={`w-full h-[700px] bg-cover bg-center flex flex-col justify-center max-[650px]:top-[-30px] pl-[7%] relative gap-[40px] top-[80px] ${isAtTop ? 'top-[155px]' : 'top-0'}`}
            style={{ backgroundImage: "url('/backgrounds/bg-cover.jpg')"}}
        >
            {/* Overlay for opacity */}
            <div className="absolute inset-0 bg-[#00235a] opacity-60"></div>

            <div className="relative z-10 flex flex-col gap-[20px]">
                <h1 className="text-white text-6xl font-semibold">
                    Welcome to <span className="text-accent">Skyline</span>
                    <br />Estimator
                </h1>
                <p className="text-white text-lg font-normal max-w-[700px] leading-[35px]">
                    Skyline Estimator provides better solution, accurate takeoffs and estimating. We offer unmatched professional takeoff and estimating services, cost verification, expert witness services, and more.
                </p>
                <div className="flex gap-4">
                    <button onClick={scrollToServices} className="bg-dark-blue text-white px-8 py-[10px] rounded-md cursor-pointer text-sm">Our services</button>
                    <button className="bg-accent text-white px-8 py-[10px] rounded-md cursor-pointer text-sm">About us</button>
                </div>
            </div>

        </section>
    );
}
