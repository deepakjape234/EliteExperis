'use client';

import Image from "next/image";

const ServicesCta = () => {
  return (
    <div className="relative w-full min-h-[70vh] bg-black overflow-hidden">
      {/* Vector Background */}
      <div className="absolute hidden sm:block top-[-30px] left-[-100px] w-[1200px] h-[500px] origin-top-left -rotate-90 outline-1 outline-offset-[-0.50px] outline-neutral-100 lg:w-[1729.83px] lg:h-[616px] lg:left-[-119px] lg:top-[-49px]"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(163, 219, 33, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(163, 219, 33, 0.1) 1px, transparent 1px)`,
          backgroundSize: "249px 185px",
          backgroundPosition: "0 0, 0 -185px",
        }}
      />

      {/* Matrix Background */}
      <div
        className="absolute inset-0 bg-[url('/matrix.svg')] bg-repeat opacity-30 z-0"
        style={{ backgroundSize: "249px 185px" }}
      />

      {/* Small Background Boxes */}
      <div className="hidden sm:block absolute bg-zinc-300/5 w-48 h-32 left-[20%] top-[200px] md:w-56 md:h-40 md:left-[25%] md:top-[250px] lg:w-64 lg:h-48 lg:left-[30%] lg:top-[263px]"></div>
      <div className="hidden sm:block absolute bg-zinc-300/5 w-48 h-32 left-[60%] top-[150px] md:w-56 md:h-40 md:left-[65%] md:top-[180px] lg:w-64 lg:h-48 lg:left-[72%] lg:top-[78px]"></div>
      <div className="hidden sm:block absolute bg-zinc-300/5 w-48 h-32 left-[5%] top-[100px] md:w-56 md:h-40 md:left-[8%] md:top-[120px] lg:w-64 lg:h-48 lg:left-[12px] lg:top-[80px]"></div>
      <div className="hidden sm:block absolute bg-zinc-300/5 w-48 h-32 left-[15%] top-[400px] md:w-56 md:h-40 md:left-[18%] md:top-[420px] lg:w-64 lg:h-48 lg:left-[260px] lg:top-[448px]"></div>

      {/* Main Content */}
      <div className="relative self-stretch justify-start z-10 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold font-inter leading-none max-w-4xl mt-30">
          Unlock Your Business<br /> Potential Get{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2]">
            Expert <br />Consultation{" "}
          </span>
          for Sustainable<br /> Growth{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2]">
            Today!
          </span>
        </h1>

        {/* Button */}
        <div className="mt-6 flex items-center gap-2 cursor-pointer bg-[#00A6B2] text-black px-4 py-2 rounded-full font-medium shadow-md hover:bg-teal-500 transition w-fit">
          <span>Explore Our Services</span>
          <Image width={20} height={20} alt="arrow Icon" src="/arrow.svg" />
        </div>
      </div>

      {/* Background Gradient Shapes */}
      {/* These will now only appear on screens larger than mobile */}
      <div className="absolute rotate-[24.65deg] bg-gradient-to-l from-cyan-600 to-lime-400 rounded-3xl blur-xl w-48 h-48 top-[60px] left-[55%]
        sm:w-56 sm:h-56 sm:top-[80px] sm:left-[60%]
        md:w-60 md:h-60 md:top-[100px] md:left-[63%]
        lg:w-64 lg:h-64 lg:top-[120px] lg:left-[58%]
        xl:w-[200px] xl:h-[200px] xl:left-[65%] hidden sm:block">
      </div>

      <div className="absolute rotate-[24.65deg] bg-gradient-to-l from-cyan-600 to-lime-400 rounded-3xl blur-xl w-48 h-48 top-[280px] left-[65%]
        sm:w-56 sm:h-56 sm:top-[320px] sm:left-[68%]
        md:w-60 md:h-60 md:top-[360px] md:left-[70%]
        lg:w-64 lg:h-64 lg:top-[316px] lg:left-[75%]
        xl:w-[200px] xl:h-[200px] xl:left-[82%] hidden sm:block">
      </div>
    </div>
  );
};

export default ServicesCta;
