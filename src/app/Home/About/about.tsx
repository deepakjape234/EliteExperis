"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import OurProcessSection from "./OurProcessSection";
import Image from "next/image";
import HomeService from "../Home_Services/page";

const services = [
  {
    title: "Optimizing Business Performance",
    description:
      "Enhance efficiency, scalability, and productivity with \ntailored IT solutions and expert staffing for \nsustainable business growth.",
    rotate: "rotate-[2.59deg]",
    logo: "/card_logo.svg", // ✅ Unique logo
  },
  {
    title: "Strategic IT Staffing Solutions",
    description:
      "Find and retain top IT professionals with our \nspecialized staffing solutions, ensuring the right \ntalent for your evolving business needs.",
    rotate: "rotate-[-3.73deg]",
    logo: "/startegy logo.svg", // ✅ Unique logo
  },
  {
    title: "Driving Innovation & Growth",
    description:
      "Leverage cutting-edge technology and automation \nto accelerate business growth and stay ahead in a \ncompetitive market.",
    rotate: "rotate-[4.07deg]",
    logo: "/driving_logo.svg", // ✅ Unique logo
  },
];

export default function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative bg-[#00a6b2] flex flex-col items-center p-4 sm:p-8 min-h-screen px-4 sm:px-[90px]">
      {/* About Us Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start min-h-screen">
        {/* Left Section (Text) */}
        <div className="max-w-lg self-start sm:sticky sm:top-20">
          <button className="px-4 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
            About Us
          </button>
          <h3 className="text-3xl sm:text-5xl mt-6 font-semibold text-[#1B2B3A] font-inter">
            Accelerating Business Growth <br />
            <span className="text-white">with Smart Talent & Scalable Solutions</span>
          </h3>

          <p className="mt-6 text-[#1B2B3A] font-inter leading-normal font-normal text-base sm:text-lg">
            At Elite Experis, we empower businesses with{" "}
            <span className="font-bold font-inter text-base leading-normal text-[#1B2B3A]">
              top-tier IT talent
            </span>{" "}
            and scalable solutions. From optimizing operations to driving innovation,{" "}
            <span className="font-bold font-inter text-base leading-normal text-[#1B2B3A]">
              we help you build a workforce that accelerates growth
            </span>{" "}
            and ensures long-term success.
          </p>
        </div>

        {/* Right Section (Cards) */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center mt-12 md:mt-0 md:ml-12">
          {services.map((service, i) => {
            const targetScale = 1 - (services.length - i) * 0.05;
            return (
              <StackingCard
                key={i}
                i={i}
                title={service.title}
                description={service.description}
                rotate={service.rotate}
                progress={scrollYProgress}
                range={[i * 0.3, 1]}
                targetScale={targetScale}
                logo={service.logo} // ✅ Pass unique logo
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-16">
        <OurProcessSection />
      </div>

      <HomeService />
    </div>
  );
}

// 🔹 Function to highlight specific keywords
const highlightWords = (text: string) => {
  const wordsToHighlight = [
    "tailored IT solutions",
    "expert staffing",
    "specialized staffing solutions",
    "top IT professionals",
    "accelerate business growth",
  ];
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");

  return text.split("\n").map((line, index) => (
    <span key={index}>
      {line.split(regex).map((part, i) =>
        wordsToHighlight.includes(part) ? (
          <span key={i} className="text-lime-400 font-semibold">
            {part}
          </span>
        ) : (
          part
        )
      )}
      <br />
    </span>
  ));
};

interface CardProps {
  i: number;
  title: string;
  description: string;
  rotate: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  logo: string; // ✅ Added logo prop
}

const StackingCard: React.FC<CardProps> = ({
  i,
  title,
  description,
  rotate,
  progress,
  range,
  targetScale,
  logo, // ✅ Use logo prop
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          y: translateY,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`justify-start relative flex flex-col p-6 rounded-xl shadow-xl bg-teal-600 border-4 border-lime-400 ${rotate} 
                    w-[340px] h-[300px] sm:w-[400px] sm:h-[250px] md:w-[440px] md:h-[260px] lg:w-[490px] lg:h-[274px]`} // Adjusted responsive widths and heights
      >
        <h4 className="text-lime-400 text-3xl font-medium font-Montserrat leading-10">
          <span className="flex items-center mb-1">
            <Image
              src={logo} // ✅ Dynamic logo here
              alt="Card Logo"
              width={39}
              height={39}
              className="mr-2 inline-block align-middle"
            />
          </span>
          {title}
        </h4>
        <p className="justify-start text-[#1B2B3A] mt-4 font-inter text-base font-normal leading-normal">
          {highlightWords(description)}
        </p>
      </motion.div>
    </div>
  );
};
