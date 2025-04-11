'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Review = {
  text: string;
  name: string;
  title: string;
  image: string;
};

const reviews: Review[] = [
  {
    text: "Working with this consulting team has been a game-changer for our business...",
    name: "Michael Carter",
    title: "CEO of GrowthEdge Solutions",
    image: "/Ellipse 17.svg"
  },
  {
    text: "Elite Experis helped us identify bottlenecks...",
    name: "Sophia Lin",
    title: "CTO of Quantum Leap Inc.",
    image: "/Ellipse 17.svg"
  },
  {
    text: "Partnering with Elite Experis gave us the clarity...",
    name: "Aarav Patel",
    title: "VP of Engineering, NovaEdge Analytics",
    image: "/Ellipse 17.svg"
  },
  {
    text: "We were facing data pipeline failures and performance issues...",
    name: "Emily Zhang",
    title: "Head of Data Engineering, Polaris Tech",
    image: "/Ellipse 17.svg"
  },
  {
    text: "From cloud migration to CI/CD integration...",
    name: "Lucas Martínez",
    title: "DevOps Lead, CloudNest Solutions",
    image: "/Ellipse 17.svg"
  },
  {
    text: "Their team not only delivered on performance optimization...",
    name: "Fatima Rahman",
    title: "Director of IT, Helix Financial",
    image: "/Ellipse 17.svg"
  },
  {
    text: "Elite Experis was a catalyst in transforming our legacy systems...",
    name: "Johan Müller",
    title: "Chief Architect, SynapTech AG",
    image: "/Ellipse 17.svg"
  },
  {
    text: "Thanks to their guidance, we restructured our product...",
    name: "Dylan Ramirez",
    title: "Founder of BrightPath AI",
    image: "/Ellipse 17.svg"
  },
];

const ReviewCard = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const frontIndex = index % reviews.length;
  const backIndex = (index + 1) % reviews.length;

  const renderCard = (review: Review, isFront: boolean, isGreen: boolean) => (
    <motion.div
      key={review.name + (isFront ? '-front' : '-back')}
      initial={{ opacity: 0, x: isFront ? 100 : -40, scale: 0.95 }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        rotate: isFront ? 0 : -6,
        zIndex: isFront ? 2 : 1
      }}
      exit={{ opacity: 0, x: isFront ? -100 : 50, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`absolute w-[90%] h-auto sm:h-[95%] p-6 sm:p-8 text-white flex flex-col justify-between shadow-2xl overflow-hidden rounded-[24px] cursor-default ${
        isGreen
          ? 'bg-gradient-to-r from-lime-400 to-cyan-600 border border-[#a3db21]'
          : 'bg-gradient-to-r from-[#F57C3C] via-[#EF4476] to-[#873AE3] bg-opacity-95 backdrop-blur-md shadow-inner shadow-pink-300/30'
      }`}
      style={{
        top: isFront ? '0' : '1.25rem',
        left: isFront ? '0' : '0.15rem',
        zIndex: isFront ? 2 : 1
      }}
    >
      <div className="absolute top-4 left-2 w-20 h-20 sm:top-2 sm:w-24 sm:h-24 opacity-90">
        <Image src="/quote.svg" alt="Quote" width={96} height={96} className="w-full h-full" />
      </div>

      <div className="text-base sm:text-lg md:text-xl leading-relaxed font-medium mt-20 sm:mt-32">
        {review.text}
      </div>

      <div className="border-t border-white pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14"
            width={56}
            height={56}
            alt={review.name}
            src={review.image}
          />
          <div className="flex flex-col">
            <div className="text-lg font-semibold">{review.name}</div>
            <div className="text-sm font-light">{review.title}</div>
          </div>
        </div>
        {isFront && (
          <div className="flex gap-4 mt-2 sm:mt-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="w-10 h-10 flex items-center justify-center hover:bg-white/20 transition rounded-full cursor-pointer hover:scale-110 duration-200"
            >
              <Image src="/left arrow.svg" alt="Left" width={30} height={30} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="w-10 h-10 flex items-center justify-center hover:bg-white/20 transition rounded-full cursor-pointer hover:scale-110 duration-200"
            >
              <Image src="/right arrow.svg" alt="Right" width={30} height={30} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="flex justify-center items-center w-full py-12 px-4 sm:px-6 md:px-8">
      <div className="relative w-full max-w-lg min-h-[520px] sm:h-[560px] md:h-[600px] font-sans-serif">
        <AnimatePresence mode="wait">
          {renderCard(reviews[frontIndex], true, index % 2 === 0)}
          {renderCard(reviews[backIndex], false, index % 2 !== 0)}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReviewCard;
