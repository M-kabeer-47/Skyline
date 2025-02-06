import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("Middleware executed for:", request.nextUrl.pathname); // Debugging log

  const pathname = request.nextUrl.pathname;

  // Define valid paths
  const validTradePaths = [
    "/concrete-estimating",
    "/masonry-estimating",
    "/electrical-estimating",
    "/sitework-estimating",
    "/lumber-takeoff",
    "/metal-estimating",
  ];

  const validServicePaths = [
    "/cost-estimating",
    "/residential-estimating",
    "/commercial-estimating",
    "/industrial-estimating",
    "/construction-estimating",
    "/construction-estimating-consultants",
  ];

  // Allow valid paths to continue
  if (
    validTradePaths.includes(pathname) ||
    validServicePaths.includes(pathname) ||
    pathname === "/" ||
    pathname === "/not-found" ||
    pathname === "/contact-us" ||
    pathname === "/about-us" // Exclude '/not-found' from redirect logic
  ) {
    return NextResponse.next(); // Allow the request



  }

  // Redirect invalid paths to the NotFound page
  return NextResponse.redirect(new URL("/not-found", request.url)); // Redirect to NotFound page
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public|backgrounds|services-slider|trades-slider|services-trades|icons|users|logo.png).*)"],
};
