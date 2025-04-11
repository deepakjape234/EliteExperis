'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const logos = [
  '/xantera.png',
  '/nomura.svg',
  '/Rectangle.png',
  '/disney.svg',
  '/zf.svg',
];
const Blog1 = () => {
  const [logoList] = useState([...logos, ...logos]);
  const logoWidth = 100;
  const speed = 3;
  return (
    <div className="relative w-full min-h-screen text-white font-sans overflow-hidden bg-black px-[6.36px] sm:px-8 md:px-12 lg:px-[80px] xl:px-[114px] pt-[82px] pb-0">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '249px 185px',
        }}
      />
      {/* Background Curve */}
      <Image
        src="/Vector 1.svg"
        alt="bg-curve"
        width={1463}
        height={579}
        className="absolute top-0 left-0 z-0 w-full h-auto pointer-events-none"
      />
      {/* Overlay Squares */}
      <div className="absolute z-10 pointer-events-none">
        <div className="w-[249px] h-[185px] bg-white/5 absolute top-[185px] left-[0px]" />
        <div className="w-[249px] h-[185px] bg-white/5 absolute top-[185px] left-[747px]" />
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-[1512px] mx-auto w-full">
        <section className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 py-16 sm:py-24 md:py-28">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-6 text-left">
            <div className="px-4 py-[6px] rounded-full border border-white/80 backdrop-blur-md w-fit bg-[#071A2B] text-sm sm:text-base font-medium text-white">
              Data-Driven Decisions
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] leading-tight text-white font-montserrat font-semibold">
              Smart Hiring. Bold Strategy.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] via-[#72D06C] to-[#00A6B2] font-semibold font-montserrat">
                Career-Defining Insights.
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/85 max-w-xl">
              Explore practical advice, industry trends, and real-world strategies that empower businesses to hire better and professionals to grow faster.
            </p>
          </div>
          {/* Image Block */}
          <div className="flex-1 relative w-full max-w-[500px] h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] xl:h-[460px] 2xl:h-[500px]">
            {/* Desktop View - Overlapping images */}
            <div className="hidden md:block absolute inset-0 scale-[0.6] sm:scale-[0.75] md:scale-100 origin-top-left">
              <img
                src="/laptop.svg"
                alt="Laptop"
                className="absolute top-[-9px] left-[160px] lg:left-[160px] xl:left-[180px] w-[384px] h-[256px] object-cover rounded-xl z-20 shadow-xl"
              />
              <img
                src="/image.svg.svg"
                alt="Robot"
                className="absolute top-[160px] lg:top-[200px] xl:top-[210px] left-[-120px] lg:left-[-8%] xl:left-[-10%] w-[384px] object-cover rounded-xl z-10 shadow-md"
              />
            </div>
            {/* Mobile View - Stacked images */}
            <div className="md:hidden flex flex-col items-center gap-6 scale-90">
              <img
                src="/laptop.svg"
                alt="Laptop"
                className="w-[90%] max-w-xs object-cover rounded-xl shadow-xl"
              />
              <img
                src="/image.svg.svg"
                alt="Robot"
                className="w-[90%] max-w-xs object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>
        {/* Logo Tagline */}
        <div className="text-center text-white text-sm sm:text-base md:text-lg font-medium font-Montserrat leading-relaxed -translate-y-[5px]">
          Chosen by the world’s top groundbreaking businesses
        </div>
        {/* Logo Carousel */}
        <div className="w-full overflow-hidden mt-4 mb-0">
          <motion.div
            className="flex gap-2 sm:gap-10 items-center"
            animate={{ x: `-${logoWidth * logos.length}px` }}
            transition={{
              duration: speed * logos.length,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{
              whiteSpace: 'nowrap',
              width: 'max-content',
            }}
          >
            {logoList.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-6 sm:h-8 md:h-10 object-contain px-4"
                initial={{ opacity: 0, x: logoWidth }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -logoWidth }}
                transition={{ duration: 1.5 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Blog1;