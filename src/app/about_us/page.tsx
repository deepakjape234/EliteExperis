"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ClientPage from "../Home/clients/page";
import Desktop from "../Home/faqs/page";
import ContactUsExplore from "../Home/Home_Cta/page";
import Footer from "../Home/footer/page";


const AboutUsPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="bg-black text-white font-sans ">
      {/* Hero Section */}
      {/* Hero Section */}
{/* Hero Section */}
<div className="relative w-full min-h-screen overflow-hidden px-6 sm:px-10 md:px-12 lg:px-16 py-16">
  {/* Background Grid */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
      backgroundSize: "249px 185px",
    }}
  />
  {/* Top Curve Image */}
  <Image
    src="/Vector 1.svg"
    alt="bg-curve"
    width={1463}
    height={579}
    className="absolute top-0 left-0 z-0 w-full h-auto pointer-events-none"
  />
  {/* Content */}
  <div className="flex flex-col items-center justify-center min-h-screen h-full relative z-10 text-center">
    <div className="flex items-center gap-2 px-4 py-1 border border-white bg-black/60 backdrop-blur-md text-white font-normal font-montserrat text-sm sm:text-base rounded-full w-fit">
      <img src="/LeafIcon.svg" alt="Leaf icon" className="w-4 h-4" />
      <span>Data-Driven Decisions</span>
    </div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-montserrat mt-8 leading-snug md:leading-tight max-w-[90%] lg:max-w-5xl">
      Strategic Solutions, Smart Growth, and{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2]">
        Sustainable Success
      </span>
    </h1>
    <p className="text-white font-medium mt-24 md:mt-37 text-base sm:text-lg md:text-xl font-montserrat max-w-md sm:max-w-xl">
      Chosen by the world's top groundbreaking businesses
    </p>
  </div>
</div>
{/* Partner Logos Section */}
<div className="relative w-full overflow-hidden py-0 bg-black translate-y-[-380%]">
  <div className="flex items-center gap-10 animate-scroll whitespace-nowrap">
    {[
      "partner1", "partner2", "partner3", "partner4",
      "partner5", "partner6", "partner7",
      "partner1", "partner2", "partner3", "partner4",
      "partner5", "partner6", "partner7",
    ].map((logo, i) => (
      <Image
        key={i}
        src={`/${logo}.svg`}
        alt={logo}
        width={100}
        height={50}
      />
    ))}
  </div>
</div>
      {/* About Us Section */}
      <div ref={ref} className="relative flex justify-center items-center min-h-screen bg-black px-6 md:px-[115px]">
        <div className="max-w-6xl w-full p-8 flex flex-col lg:flex-row gap-12">
          <div className="flex-1 relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mb-4"
              aria-label="Learn more about us"
            >
              <div className="flex items-center px-6 py-2 bg-white/10 rounded-full w-fit">
                <img
                  src="/About Us.svg"
                  alt="About Us"
                  className="w-[110px] h-auto object-contain"
                />
              </div>
            </motion.button>
            <h1 className="text-5xl font-bold text-white leading-snug">
              Empowering Businesses with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2]">
                Vision
              </span>,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2]">
                Strategy
              </span>, and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2]">
                Sustainability
              </span>
            </h1>
            <div className="relative mt-12">
              {[
                {
                  number: "01",
                  title: "Driving Business Excellence",
                  description:
                    "We strive to empower businesses with innovative strategies, expert insights, and data-driven solutions for sustainable success.",
                  lineColor: "#00FF00",
                },
                {
                  number: "02",
                  title: "Fostering Long-Term Growth",
                  description:
                    "Strengthening businesses with vision, strategy, and sustainable growth by providing innovative solutions, expert insights, and data-driven decisions.",
                  lineColor: "#00CC00",
                },
                {
                  number: "03",
                  title: "Commitment to Innovation",
                  description:
                    "We continuously develop forward-thinking approaches, helping businesses stay ahead with cutting-edge solutions and industry-leading expertise.",
                  lineColor: "#00CCCC",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8 mt-16 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="text-4xl text-white">{item.number}</span>
                  <div className="relative h-full">
                    <div className="w-[2px] h-full bg-gray-700"></div>
                    <motion.div
                      className="absolute top-0 w-[2px]"
                      style={{
                        height: lineHeight,
                        backgroundColor: item.lineColor,
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <motion.div
              className="w-120 h-120 bg-gray-300 flex justify-center items-center rounded-lg overflow-hidden mt-90"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <img
                src="/build.svg"
                alt="Descriptive Alt Text"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
      {/* About Us Section 2 */}
      <div className="min-h-screen w-full bg-black text-white px-6 md:px-[115px] py-[90px] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-[42%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-[876.23px] h-[911.21px] rotate-[12deg] blur-3xl pointer-events-none z-0">
          <img
            src="/vector 5.svg"
            alt="Decorative vector background"
            className="w-full h-full object-contain"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 1, ease: "easeOut" },
            },
          }}
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-14"
        >
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full w-fit">
              <img
                src="/About Us.svg"
                alt="About Us"
                className="w-[100px] h-auto object-contain"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-inter leading-snug">
              Empowering Businesses with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2]">
                Strategy, Innovation, <br />and Excellence
              </span>
            </h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 1, ease: "easeOut" },
              },
            }}
            className="flex flex-col lg:flex-row justify-center items-stretch gap-6 mt-10"
          >
            {/* Left Column */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              {[
                {
                  title: "Who We Are",
                  desc: "We are a leading business consulting firm dedicated to providing strategic insights, innovative solutions, and expert guidance to help companies thrive in a dynamic market.",
                },
                {
                  title: "Our Mission",
                  desc: "Our mission is to empower businesses with data-driven strategies, operational excellence, and sustainable growth through customized consulting services.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="min-h-60 p-6 bg-white/10 rounded-xl backdrop-blur-[6px] flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl md:text-2xl font-montserrat">
                      {card.title}
                    </h3>
                    <img src="/Right.svg" alt="Arrow Icon" className="w-6 h-6" />
                  </div>
                  <p className="text-white text-sm md:text-base font-inter mt-4">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className="w-full lg:w-[33%] h-64 md:h-96 rounded-xl overflow-hidden flex items-center justify-center mt-10">
              <img
                src="/logoo.svg"
                alt="Team working together"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              {[
                {
                  title: "Our Expertise",
                  desc: "With years of experience across multiple industries, our team specializes in business transformation, financial optimization, and market expansion strategies.",
                },
                {
                  title: "Why Choose Us",
                  desc: "We combine deep industry knowledge, cutting-edge technology, and a client-centric approach to deliver measurable results and long-term success.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="min-h-60 p-6 bg-white/10 rounded-xl backdrop-blur-[6px] flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl md:text-2xl font-montserrat">
                      {card.title}
                    </h3>
                    <img src="/Right.svg" alt="Arrow Icon" className="w-6 h-6" />
                  </div>
                  <p className="text-white text-sm md:text-base font-inter mt-4">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <ClientPage/>
      <Desktop/>
      <ContactUsExplore/>
      <Footer/>
</div>
  );
};
export default AboutUsPage;