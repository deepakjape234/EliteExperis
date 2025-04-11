"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactMap from "../contact_us_map/page";
import ContactForm from "../contact_us_form/page";
import ContactClient from "../contact_us_client/page";
import ContactCtaPage from "../ContactCta/page";
import ContactFooterPage from "../ContactFooter/page";
import ContactFaqPage from "../Contact_us_faq/page";

const logos = [
  "/xantera.png",
  "/nomura.svg",
  "/Rectangle.png",
  "/disney.svg",
  "/zf.svg",
];

const Contactus = () => {
  const [logoList] = useState([...logos, ...logos]); // Duplicate logos for seamless effect
  const logoWidth = 100; // Adjust logo width for better scaling
  const speed = 3; // Speed of animation (in seconds)

  return (
    <>
      {/* Contact Us Page */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-[url('/contactus_vector.svg')] bg-cover bg-center bg-no-repeat opacity-60 md:opacity-50 z-0"></div>

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

        {/* Content Wrapper */}
        <div className="relative z-10 self-stretch mt-20 sm:mt-32 flex flex-col justify-start items-center gap-6 sm:gap-10 text-center">
          <div className="flex justify-center items-center">
            <img
              src="/Frame 4 (4).svg"
              alt="Data-Driven-Decisions"
              className="h-4 sm:h-5 md:h-6 mt-4"
            />
          </div>

          {/* Main Heading & Subheading */}
          <div className="max-w-[90%] sm:max-w-[600px] lg:max-w-[1080px]">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-Montserrat">
              Expert Guidance, Lasting Success —<br />
              <span className="mt-[-30px] text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-5xl sm:text-5xl font-semibold leading-[56px] font-Montserrat">
                Let's Connect Today!
              </span>
            </h1>
            <p className="text-white text-sm lg:max-w-[800px] sm:text-lg justify-center items-center font-normal mt-4 font-Montserrat">
              Our comprehensive consulting services empower businesses with
              strategic insights, innovative solutions, and data-driven
              approaches to achieve lasting success.
            </p>
          </div>
        </div>

        {/* Auto-Sliding Logos */}
        <div className="relative w-full overflow-hidden py-6 mt-8 sm:mt-12">
          <div className="self-stretch text-center justify-start text-white text-lg font-medium font-Montserrat leading-relaxed mb-[25px] mt-[38px]">
            Chosen by the world’s top groundbreaking businesses
          </div>
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
                alt="logo"
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

      {/* Add Extra Space Before ContactMap */}
      {/* <div className="h-32 py-0 sm:h-40"></div> */}

      {/* Contact Map Section (Placed Below) */}
      <div className="w-full">
        <ContactMap />
      </div>
      <div className="w-full">
        <ContactForm/>
      </div>
      <div className="w-full">
        <ContactClient/>
      </div>
      <div className="w-full">
        <ContactFaqPage/>
      </div>
      <div className="w-full">
        <ContactCtaPage/>
      </div>

      <div className="w-full">
        <ContactFooterPage/>
      </div>
    </>
  );
};

export default Contactus;
