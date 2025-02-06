import Carousel from "@/components/ui/Carousel"
import { Button } from "@/components/ui/button"
import { useEffect, useLayoutEffect, useState } from "react";

import {  usePathname, useRouter } from "next/navigation";
  export default function Page({ images, pathTitle, path }: { images: string[], pathTitle: string, path: string }) {
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  
  useLayoutEffect(() => {
    const scrollToTop = () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = '';
    };

    requestAnimationFrame(scrollToTop);
  }, [pathname]);

  // Prevent scroll restoration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      return () => {
        window.history.scrollRestoration = 'auto';
      };
    }
  }, []);

  // Add CSS stabilization
  useEffect(() => {
    document.documentElement.style.overflowAnchor = 'none';
    return () => {
      document.documentElement.style.overflowAnchor = 'auto';
    };
  }, []);
  

  useEffect(() => {  
    if(path === "services") {
      setCategories(["Cost Estimating", "Commercial Estimating", "Residential Estimating", "Industrial Estimating", "Construction Estimating", "Construction Estimating Consultants"]);
    }

    else if(path === "trades") {
      setCategories(["Concrete Estimating", "Masonry Estimating", "Electrical Estimating", "Sitework Estimating", "Lumber Takeoff", "Metal Estimating"]);
    }
  }, [path]);
  return (
    <div className="px-[4%] lg:px-[10%] mb-[150px] ">
      <div className="flex items-center gap-2 mb-4 md:mb-6 text-md mt-[50px]">

        <span className="text-primary hover:underline cursor-pointer">Skyline Estimator</span>
        <span>&gt;</span>
        <span className="text-muted-foreground">{pathTitle}</span>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-2 ">
        {/* Left Categories */}
        <div className="lg:w-[400px] space-y-4 lg:top-[50px]">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-dark-blue">{path !=="" && path[0].toUpperCase() + path.slice(1)} Category</h2>
          <div className="space-y-4  h-full">
            {categories.length > 0 ? (
              categories.map((service) => (
  

              <Button
                key={service}
                className="w-full justify-start bg-accent hover:bg-[#6ec1e4] text-white py-[30px] rounded-[0px] flex items-center justify-center"
              onClick={() => {
                alert(service.toLowerCase().replace(" ", "-"))
                router.push(`/${service.replace(" ", "-").toLowerCase()}`)
              }}
              >
                
                

                {service}
                
              </Button>

            ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">No categories found</p>
              </div>
            )}
          </div>
        </div>


        {/* Right Carousel */}
        <div className="h-[300px] sm:h-[400px] lg:h-[450px] lg:w-[100%] flex items-center justify-center relative lg:top-[50px] sm:top-[100px] mt-6 sm:mt-0">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  )
}

