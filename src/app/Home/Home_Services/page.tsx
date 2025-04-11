'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'IT Staffing & Workforce Solutions',
    description: [
      'Access pre-vetted IT professionals for short-term projects or full-time positions.',
      'Optimize candidate sourcing with streamlined hiring strategies.',
    ],
    src: '/OurServices.svg',
    color: 'bg-[#D6F1F5]',
  },
  {
    title: 'Digital Transformation & IT Consulting',
    description: [
      'Scale operations with custom software, cloud migration, and AI-driven solutions.',
      'Optimize IT infrastructure and improve workflow automation.',
    ],
    src: '/digital_transformation.svg',
    color: 'bg-[#DFF5CC]',
  },
  {
    title: 'Recruitment Process Optimization',
    description: [
      'Reduce time-to-hire with AI-powered candidate matching and predictive analytics.',
      'Implement structured assessment frameworks for effective talent screening.',
    ],
    src: '/recruitement.svg',
    color: 'bg-[#E3E6E8]',
  },
  {
    title: 'Talent Development & Career Growth',
    description: [
      'Upskill teams with workshops, leadership training, and emerging tech certifications.',
      'Get expert guidance on career growth and industry trends.',
    ],
    src: '/Talent.svg',
    color: 'bg-[#F2E8CF]',
  },
];

export default function HomeService() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className="relative font-inter" ref={container}>
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-[-1]"
          width={1264}
          height={1306}
          alt=""
          src="/Vector 4.svg"
        />
  
        {/* Service Header */}
        <section className="relative w-full bg-[#00A6B2] py-12 sm:py-16 flex flex-col items-center px-4 sm:px-6 text-white">
          
          {/* Centered Section Title */}
          <div
            data-property-1="Section Title Light bg"
            className="px-6 py-1.5 rounded-[56px] shadow-[inset_0px_0px_4px_1px_rgba(255,255,255,0.14)] 
            outline-1 outline-offset-[-1px] outline-black backdrop-blur-[2px] 
            flex justify-center items-center gap-2 overflow-hidden w-fit mx-auto mt-5"
          >
            <div className="text-center text-zinc-950 text-base sm:text-lg font-normal font-Montserrat leading-relaxed">
              Our Service
            </div>
          </div>
  
          {/* Hero Section */}
          <div className="relative text-white w-full grid place-content-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-7xl font-semibold text-center tracking-tight leading-snug font-inter mt-6 sm:mt-8 px-4">
              Smart IT Solutions & Talent Strategies
            </h1>
          </div>
  
          {/* Paragraph */}
          <p className="mt-6 sm:mt-8 text-sm sm:text-base text-center text-black font-inter font-normal leading-normal max-w-xl">
            At Elite Experis, we help businesses scale with cutting-edge IT solutions and top-tier talent acquisition.
            Our expertise ensures faster hiring, streamlined operations, and future-ready workforce strategies.
          </p>
        </section>
  
        {/* Services Section */}
        <section className="relative w-full bg-[#00a6b2] text-white">
          {services.map((service, i) => {
            const targetScale = 1 - (services.length - i) * 0.05;
            return (
              <Card
                key={`s_${i}`}
                i={i}
                src={service.src}
                title={service.title}
                color={service.color}
                description={service.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}  

interface CardProps {
  i: number;
  title: string;
  description: string[];
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, title, description, src, color, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start'],
    });
  
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
  
    return (
      <>
        {/* Mobile Layout (Small Screens) */}
        <div className="w-full flex justify-center px-4 sm:px-6 sticky top-0 lg:hidden">
          <motion.div
            style={{
              scale,
              top: `calc(-5vh + ${i * 25}px)`,
            }}
            className={`flex flex-col items-center relative 
              w-[370px] h-[420px] rounded-xl shadow-lg 
              p-4 sm:p-6 md:p-[10px] ${color}`}
          >
            {/* Image on Top */}
            <div className="w-full h-full rounded-lg overflow-hidden mb-3">
              <motion.div
                className="relative w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image fill src={src} alt={title} className="object-cover rounded-lg" />
              </motion.div>
            </div>
    
            {/* Text Section */}
            <div className="w-full flex flex-col justify-center text-center px-2">
              <h2 className="text-base sm:text-lg font-bold text-[#1B2B3A] font-Montserrat leading-snug">
                {title}
              </h2>
              <div className="mt-2">
                {description.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm text-[#1B2B3A] mb-1 font-inter leading-snug"
                  >
                    {text}
                  </p>
                ))}
              </div>
              <a
                href="#"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#009CA6] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md hover:bg-[#00818A] transition duration-300 mt-3 justify-center"
              >
                Learn more
                <svg
                  width="20"
                  height="10"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
    
        {/* Desktop Layout (Large Screens and Up) */}
        <div className="hidden lg:flex h-screen items-center justify-center sticky top-0">
          <motion.div
            style={{
              scale,
              top: `calc(-5vh + ${i * 25}px)`,
            }}
            className={`flex flex-row items-center relative -top-[10%] h-[580px] w-[1184px] rounded-xl shadow-lg p-[10px] ${color}`}
          >
            {/* Left Section: Text Content */}
            <div className="w-[50%] flex flex-col justify-center pr-[145px] pl-[144px]">
              <h2 className="text-3xl font-bold text-[#1B2B3A] justify-start font-Montserrat leading-10 w-[444px] h-[80px]">
                {title}
              </h2>
              <div className="mt-[59px]">
                {description.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-base text-[#1B2B3A] mb-2 font-inter font-normal w-[360px] h-[48px] leading-normal"
                  >
                    {text}
                  </p>
                ))}
              </div>
              <a
                href="#"
                target="_blank"
                className="w-50 inline-flex items-center gap-2 bg-[#009CA6] text-white font-semibold px-6 py-[5px] rounded-[56px] shadow-md hover:bg-[#00818A] transition duration-300 mt-[59px] leading-tight backdrop-blur-[2px] justify-start overflow-hidden"
              >
                Learn more
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
    
            {/* Right Section: Image */}
            <div className="w-[50%] h-full flex items-center justify-center">
              <motion.div
                className="relative w-[80%] h-[80%] rounded-lg overflow-hidden shadow-md"
                style={{ scale: imageScale }}
              >
                <Image fill src={src} alt={title} className="object-cover rounded-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </>
    );
  };    