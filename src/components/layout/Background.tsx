import Image from "next/image";

export default function Background({ text }: { text: string }) {
  function toTitleCase(str: string) {
    return str
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, (char: string) => char.toUpperCase()); // Capitalize first letter of each word

  }
  return (
    <div className="relative w-full h-[280px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/backgrounds/bg-services.jpg")`,
        }}
      ></div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-[#00235a] opacity-60"></div>

      {/* Text Content (Ensures Full Opacity) */}
      <p className="relative w-full h-full font-semibold flex items-center justify-center text-white text-5xl md:text-6xl text-center">
        {toTitleCase(text)}
      </p>
    </div>


  );
}
