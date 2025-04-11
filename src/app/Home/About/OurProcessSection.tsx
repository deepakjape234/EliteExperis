import React from "react";

type Step = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Identify & Understand Your Hiring Needs",
    description:
      "We assess your business goals, technical requirements, and workforce gaps to define the ideal candidate profile.",
    bgColor: "bg-[#b3eaf4]",
  },
  {
    id: 2,
    title: "Source, Screen & Shortlist Top Talent",
    description:
      "We tap into our pre-vetted IT talent pool, conduct multi-level screenings, and present only the best-fit candidates.",
    bgColor: "bg-[#e5f3f9]",
  },
  {
    id: 3,
    title: "Selection, Hiring & Seamless Onboarding",
    description:
      "We handle interviews, salary negotiations, and onboarding to ensure a smooth transition and long-term success.",
    bgColor: "bg-[#d9f7c6]",
  },
];

const OurProcessSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1284px] mx-auto bg-[#1B2B38] text-white flex flex-col items-center justify-center px-0 sm:px-6 md:px-8 lg:px-12 py-12 rounded-[20px] overflow-hidden">
      {/* Header Section */}
      <div className="mb-12 text-center mt-[-20px]">
        <span className="text-sm sm:text-base text-white font-normal font-Montserrat bg-[#1B2B38] px-3 py-[5px] rounded-[56px] border-white backdrop-blur-[2px] outline-1 outline-offset-[-1px] outline-stone-50 inline-flex justify-start items-center gap-2 overflow-hidden">
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-inter mt-6 leading-snug sm:leading-[56px]">
          Our Proven Process for Delivering the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2]">
            Best IT Talent
          </span>
        </h2>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[36px] w-full mt-[50px] px-4 sm:px-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative p-6 sm:p-6 md:p-8 rounded-2xl shadow-xl ${step.bgColor} text-center`}
          >
            {/* Number Circle Tab */}
            <div
              className={`absolute -top-9 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ${step.bgColor} text-[#1B2B38] text-3xl sm:text-7xl font-bold flex items-center font-Montserrat rounded-full border-0 leading-[140.80px] justify-center text-center`}
            >
              {step.id}
            </div>

            {/* Content */}
            <h4 className="text-lg sm:text-xl font-bold font-Montserrat text-[#009B9E] mt-12">
              {step.title}
            </h4>
            <p className="text-zinc-950 font-medium mt-3 text-sm sm:text-base leading-snug font-inter">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcessSection;
