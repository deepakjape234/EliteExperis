
import Image from "next/image";

const svgIcons = [
  "Group.svg",
  "Arrows, Diagrams/Arrow.svg"
];

const Desktop = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#00A6B2] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Vector Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image 
          src="/FAQ section.svg" 
          alt="Background Vector" 
          layout="fill" 
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      {/* FAQ Section */}
      <div className="relative text-center bg-opacity-10 p-2 rounded-full border border-black backdrop-blur-md mb-4 w-24">
        <span className="text-sm text-black font-medium">FAQ</span>
      </div>

      {/* Heading */}
      <h2 className="text-white font-inter font-semibold text-[32px] sm:text-[48px] text-center w-full sm:w-[824px] mt-4 leading-[40px] sm:leading-[56px]">
        Clear Answers, Expert Insights, <br />
        <span className="text-[rgb(27,43,58)] font-inter font-semibold text-[32px] sm:text-[48px] leading-[40px] sm:leading-[56px]">
          Hassle-Free Consulting Experience
        </span>
      </h2>

      {/* FAQ List */}
      <div className="relative mt-8 w-full max-w-3xl space-y-4 px-4 sm:px-0">
        {["How can your consulting services help my business?",
          "What is the typical consulting process?",
          "How long will it take to get my dream job?",
          "How can I schedule a consultation?"].map((question, index) => (
          <div
            key={index}
            className="relative p-3 text-[rgb(27,43,58)] bg-opacity-30 rounded-xl outline-[0.50px] outline-offset-[-0.50px] outline-Midnight-Blue backdrop-blur-sm flex justify-between items-center mt-[24px]"
          >
            <div className="flex items-center gap-4 sm:gap-14">
              <div className="text-[rgb(27,43,58)] text-3xl sm:text-4xl font-medium font-Montserrat">
                {`0${index + 1}`}
              </div>
              <div className="self-stretch justify-start text-[rgb(27,43,58)] text-xl sm:text-2xl font-medium font-Montserrat">
                {question}
              </div>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1B2B3A] rounded-full flex justify-center items-center">
              <Image width={24} height={24} alt="arrow" src={svgIcons[0]} />
            </div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="mt-12 flex items-center gap-2 cursor-pointer bg-lime-400 text-black px-4 py-2 rounded-full font-medium shadow-md hover:bg-yellow-500 transition font-Montserrat">
        Explore Our Services
        <Image width={20} height={20} alt="arrow Icon" src="/arrow.svg" />
      </div>
    </div>
  );
};

export default Desktop;
