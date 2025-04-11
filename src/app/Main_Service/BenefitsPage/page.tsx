import React from "react";

const BenefitsPage: React.FC = () => {
  return (
    <div 
      className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4 py-10 sm:px-6 md:px-8 relative"
      style={{ backgroundImage: "url('/FAQ section.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-6xl w-full flex flex-col items-center gap-12 text-center">
        
        {/* Key Benefits Tag */}
        <div className="px-4 py-1 sm:px-6 sm:py-2 bg-white/10 rounded-full shadow-[inset_0px_0px_4px_1px_rgba(255,255,255,0.14)] backdrop-blur-[2px] inline-flex justify-center items-center gap-2 overflow-hidden -mt-2">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-sm sm:text-lg font-medium leading-relaxed font-Montserrat">
            Key Benefits
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter">
          Strategic Solutions to Optimize,
          <br />
          <span 
            className="text-transparent bg-clip-text font-inter"
            style={{ backgroundImage: "linear-gradient(90deg, #A3DB21 0%, #00A6B2 100%)" }}
          >
            Innovate, and Drive Business Success
          </span>
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          
          {/* Image Section (Left Side) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/614bd0a9702c4251695458d2d7966499.jpg"
              alt="Broken Bulb with Pencil"
              className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Benefits Text Section (Right Side) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
            {[
              {
                title: "Tailored Strategies for Maximum Impact",
                description:
                  "We develop customized solutions that align with your business goals, ensuring measurable results and long-term success.",
              },
              {
                title: "Data-Driven Decision Making",
                description:
                  "Our expert insights and analytical approach help you make informed choices that drive growth and efficiency.",
              },
              {
                title: "Enhanced Operational Efficiency",
                description:
                  "We streamline processes, optimize resources, and implement best practices to improve productivity and reduce costs.",
              },
              {
                title: "Sustainable Business Growth",
                description:
                  "With innovative strategies and continuous support, we help your business stay competitive and achieve lasting success in a dynamic market.",
              },
            ].map((benefit, index) => (
              <div key={index} className="pb-1 mb-6 pt-0">
                <div className="flex items-start gap-4">
                  <span className="text-white font-bold text-lg min-w-[30px]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-white/80 mt-2 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="border-b border-white mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
