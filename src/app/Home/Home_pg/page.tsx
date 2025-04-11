'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/xantera.png",
  "/nomura.svg",
  "/Rectangle.png",
  "/disney.svg",
  "/zf.svg",
];

const Home_page = () => {
  const [logoList] = useState([...logos, ...logos]); // Duplicate logos for seamless effect
  const logoWidth = 100; // Adjust logo width for better scaling
  const speed = 3; // Speed of animation (in seconds)

  return (

<div className="relative w-full min-h-[103.5vh] flex flex-col items-center justify-center bg-black overflow-hidden">

      {/* Vector Background Image (full-page background) */}
      <div className="w-[1512px] px-16 py-px bg-gradient-to-r from-lime-400 to-cyan-600 inline-flex justify-center items-center gap-2.5 relative -top-12">
        <div className="text-center justify-start text-white text-lg font-bold font-sans leading-relaxed">
          The Website is under Maintenance
        </div>
      </div>
      <Image
        src="/gradient-bg.svg"
        alt="bg-curve"
        width={1463}
        height={579}
        className="absolute top-0 left-0 z-0 w-full h-auto pointer-events-none"
      />

      {/* Matrix Grid Overlay with Lighter Green Grid Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(163, 219, 33, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(163, 219, 33, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '249px 185px', // Adjust grid size
          backgroundPosition: '0 0, 0 -185px', // Shift background to remove the last line from the bottom
        }}
      />

      {/* Matrix Background */}
      <div
        className="absolute inset-0 bg-[url('/matrix.svg')] bg-repeat opacity-30 z-0"
        style={{
          backgroundSize: "249px 185px", // Set matrix grid size to match the specified width and height
        }}
      ></div>

      {/* Website Maintenance Notification */}


      {/* Content Wrapper */}
      <div className="relative z-10 self-stretch mt-20 sm:mt-32 flex flex-col justify-start items-center gap-6 sm:gap-10 text-center overflow-hidden">
        <div className="flex justify-center items-center">
          <img src="/optimized_it_solutions.svg" alt="Optimized IT Solutions" className="h-4 sm:h-5 md:h-6" />
        </div>
        
        {/* Main Heading & Subheading */}
        <div className="max-w-[90%] sm:max-w-[600px] lg:max-w-[1080px] px-4 sm:px-0 lg:pb-24 mx-auto lg:flex lg:flex-col lg:items-center lg:text-center">
  <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold leading-snug font-Montserrat sm:leading-[62px]">
    Strategic IT Consulting <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] font-Montserrat">
      for Professionals & Businesses
    </span>
  </h1>
  <p className="w-full text-white text-sm sm:text-lg font-normal mt-4 font-Montserrat leading-relaxed">
    From career growth to strategic hiring, we help IT professionals land top jobs and businesses find the right talent.
    Get expert guidance on resumes, job applications, and interviews—all in one place.
  </p>
</div>



        {/* Call to Action Button */}
        <div className="h-10 sm:h-12 px-5 sm:px-6 bg-cyan-600 rounded-full inline-flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-cyan-700 transition relative lg:-top-15">
  <span className="text-white text-sm sm:text-lg font-medium font-['Montserrat'] leading-relaxed">
    Explore Our Services
  </span>
  <span className="text-white text-lg sm:text-2xl">→</span>
</div>



      </div>

      {/* Auto-Sliding Logos */}
      <div className="relative w-full overflow-hidden py-6 mt-8 sm:mt-[-48]">
        <motion.div
          className="flex gap-6 sm:gap-10 justify-center items-center"
          animate={{ x: `-${logoWidth * logos.length}px` }} // Move logos to the left based on their total width
          transition={{
            duration: speed * logos.length, // Speed based on total logos length
            ease: "linear",
            repeat: Infinity, // Infinite loop
            repeatType: "loop",
          }}
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            width: "max-content",
          }}
        >
          {logoList.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-6 sm:h-8 md:h-10 object-contain mx-2 sm:mx-4"
              initial={{ opacity: 0, x: logoWidth }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -logoWidth }}
              transition={{ duration: 1.5 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home_page;
