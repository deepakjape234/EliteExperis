'use client';

import ReviewCard from "./ReviewCard";
import ContactCounter from "./Counter";

const ClientPage = () => {
  return (

    <div className="min-h-screen w-full bg-zinc-950 overflow-hidden font-sans px-4">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-24 flex flex-col lg:flex-row justify-between items-start gap-12">
        
{/* LEFT TEXT SECTION */}
<div className="w-full lg:w-[50%] flex flex-col items-start gap-12 ml-4 lg:ml-8">


  {/* Section Tag */}
  <div className="bg-[#1B2B3A] rounded-[56px] outline-1 outline-stone-50 backdrop-blur-[2px] inline-flex items-center gap-2 px-3 py-[5px]">
    <span className="text-white text-lg font-normal leading-relaxed">
      What Our Clients Say
    </span>
  </div>

  {/* Heading, Paragraph, and Counters */}
  <div className="flex flex-col items-start gap-12 w-full">

    {/* Heading + Description */}
    <div className="flex flex-col gap-6 w-full">

      <div className="leading-[1.1]">
        <h2 className="text-white text-[2rem] md:text-5xl font-semibold font-Inter">
          What Our Clients Say
        </h2>
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-[2rem] md:text-5xl font-semibold font-Inter">
          Success Stories from IT Professionals
        </h3>
      </div>

      <p className="text-white text-base md:text-lg font-normal font-Inter leading-normal max-w-[540px]">
        Discover how our expert consulting services have helped businesses overcome challenges, optimize operations, and achieve sustainable growth. Read firsthand experiences from our satisfied clients.
        
      </p>
    </div>

    {/* COUNTERS */}
{/* COUNTERS */}
<div className="w-full flex flex-wrap sm:flex-nowrap justify-start items-start gap-x-18 gap-y-6">
  <div className="text-left flex flex-col items-start gap-3.5">
    <ContactCounter end={3} suffix="+" />
    <div className="text-white text-base font-normal font-montserrat leading-relaxed">
      Years of Industry <br /> Experience
    </div>
  </div>

  <div className="text-left flex flex-col items-start gap-3.5">
    <ContactCounter end={50} suffix="+" />
    <div className="text-white text-base font-normal font-montserrat leading-relaxed">
      Empowered Over <br /> 50 Businesses
    </div>
  </div>

  <div className="text-left flex flex-col items-start gap-3.5">
    <ContactCounter end={98} suffix="%" />
    <div className="text-white text-base font-normal font-montserrat leading-relaxed">
      Client <br /> Satisfaction Rate
    </div>
  </div>
</div>

  </div>
</div>


        {/* REVIEW CARD SECTION */}
        <div className="w-full lg:w-[50%] mt-8 md:mt-0 flex justify-center relative" style={{ top: "-1rem" }}>
        <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
