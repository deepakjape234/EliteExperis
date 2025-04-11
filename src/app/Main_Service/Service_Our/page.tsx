const services = [
    {
      title: "Operational Efficiency",
      description:
        "Streamline workflows, eliminate redundancies, and improve resource utilization with solutions tailored to your operational structure.",
      icon: "/Opperational_effic.svg",
    },
    {
      title: "Risk Management",
      description:
        "Identify vulnerabilities, strengthen compliance, and reduce business risk through proactive, tech-enabled risk assessment frameworks.",
      icon: "/Risk_managem.svg",
    },
    {
      title: "Market Research",
      description:
        "Gain competitive edge with actionable insights from deep industry analysis, user trends, and tailored market intelligence reports.",
      icon: "/Market_res.svg",
    },
    {
      title: "Digital Transformation",
      description:
        "Accelerate growth by modernizing infrastructure, & Integrating emerging technologies across your business.",
      icon: "/Digital_transf.svg",
    },
    {
        title: "Business Strategy",
        description:
          "Align your vision with impactful strategies that drive scalability, innovation, and long-term value through data-informed decision-making.",
        icon: "/Business_strat.svg",
      }
  ];
  
  const OurServices = () => {
    return (
      <div className="relative w-full flex flex-col justify-start items-center gap-6 bg-[#00A6B2] py-20 px-4">
        <img
          src="/services_vector.svg"
          alt="Background gradient"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] opacity-80 pointer-events-none z-0"
        />
  
        <div className="z-10 px-6 py-1 rounded-full shadow-inner outline-1 outline-Midnight-Blue backdrop-blur-sm flex items-center gap-2 mt-[-35px]">
          <div className="text-black text-lg font-normal font-montserrat">
            Our Services
          </div>
        </div>
  
        <div className="z-10 max-w-4xl text-center">
          <h2 className="text-white text-5xl font-semibold font-['Inter'] leading-[56px]">
            Strategic Solutions to Optimize,{" "}<br />
            <span className="text-[#1B2B3A] font-['Inter']">Innovate, and Drive Business</span><br />
            <span className="text-[#1B2B3A] font-['Inter']">Success</span>
          </h2>
        </div>
  
        <div className="z-10 flex flex-wrap justify-center gap-6 mt-[40px] max-w-7xl">
  {services.map((service, idx) => (
    <div
      key={idx}
      className="w-full sm:w-[45%] lg:w-[30%] max-w-md min-h-[18rem] p-6 bg-white/20 rounded-xl outline-[0.50px] outline-offset-[-0.50px] outline-[#4F5964] backdrop-blur-md inline-flex flex-col justify-between items-start"
    >
      <div className="w-12 h-12 bg-gradient-to-bl from-white to-zinc-700 rounded-xl outline-[0.20px] outline-offset-[-0.20px] outline-neutral-500 inline-flex justify-center items-center overflow-hidden gap-1">
        <img src={service.icon} alt="Service Icon" className="w-6 h-6" />
        
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
        <h3 className="self-stretch justify-start text-[#4F5964] text-4xl font-extrabold font-['Montserrat'] leading-[48px]">
          {service.title}
        </h3>
        <p className="self-stretch justify-start text-zinc-950 text-base font-normal font-['Inter'] leading-normal">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    );
  };
  
  export default OurServices;
  