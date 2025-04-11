'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Blog1 from '../blog1/page';
import Footer from '../../Home/footer/page';
import BlogFaqPage from '../Blog_Faqs/page';
import BlogCtaPage from '../Blog_Cta/page';

const Insights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    '/portrait5.svg',
    '/portrait4.svg',
    '/3.svg',
    'https://placehold.co/383x387',
    'https://placehold.co/383x387',
    'https://placehold.co/383x387',
  ];
  const visibleCards = 3;
  const cardWidth = 383 + 24;
  const handleArrowClick = (dir: 'left' | 'right') => {
    if (dir === 'left') {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setCurrentIndex((prev) =>
        Math.min(prev + 1, cardData.length - visibleCards)
      );
    }
  };
  return (
    <>
      <Blog1/>
      <div className="bg-black overflow-hidden py-[82px] px-4 sm:px-8 md:px-[82px] lg:px-[115px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          {/* Featured Cards */}
          <div className="flex flex-col lg:flex-row gap-6">
            {['/portrait3.svg', '/portrait2.svg'].map((src, index) => (
              <div
                key={index}
                className="relative w-full lg:w-[629px] h-[473px] rounded-3xl overflow-hidden flex flex-col justify-end"
              >
                <Image
                  src={src}
                  alt={`Featured card ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <div className="relative z-20 px-8 pb-6 flex flex-col gap-3.5">
                  <div className="text-white text-2xl font-medium leading-loose">
                    Future-Proofing Your Business: Top Strategies for Sustainable Growth
                  </div>
                  <div className="flex gap-3">
                    {['Business Insight', '6 Min Read'].map((text) => (
                      <div
                        key={text}
                        className="px-3.5 py-1 bg-white/10 rounded-[40px] shadow-[inset_0_0_4px_2px_rgba(255,255,255,0.10)] outline-[0.5px] outline-white backdrop-blur-blur flex items-center gap-2"
                      >
                        <span className="text-white text-xs font-normal font-[Inter] leading-none">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Popular Now Section */}
          <div className="w-full">
            <div className="flex flex-col gap-14">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans">
                  Popular Now
                </h2>
                <div className="flex gap-3.5">
                  <button
                    onClick={() => handleArrowClick('left')}
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-neutral-100 rounded-full flex justify-center items-center"
                    aria-label="left arrow"
                  >
                    <span className="text-black text-lg sm:text-xl">←</span>
                  </button>
                  <button
                    onClick={() => handleArrowClick('right')}
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-neutral-100 rounded-full flex justify-center items-center"
                    aria-label="right arrow"
                  >
                    <span className="text-black text-lg sm:text-xl">→</span>
                  </button>
                </div>
              </div>
              <div className="overflow-hidden w-full">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: -currentIndex * cardWidth }}
                  transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                >
                  {cardData.map((src, i) => (
                    <div
                      key={i}
                      className="w-[280px] sm:w-[320px] md:w-[383px] h-auto p-4 bg-white/10 border border-white rounded-xl flex flex-col justify-between gap-6 shrink-0"
                    >
                      <img
                        src={src}
                        alt={`card-image-${i}`}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg border border-white"
                      />
                      <div className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-loose font-sans">
                        The Power of Data-Driven Decisions in Modern Business
                      </div>
                      <div className="text-white text-xs sm:text-sm font-normal font-[Inter_Tight] leading-snug">
                        <div className="flex flex-col gap-3.5">
                          Explore key strategies to adapt, innovate, and thrive in an ever-evolving market, ensuring your business stays ahead of the competition.
                        </div>
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        {['Business Insight', '6 Min Read'].map((text) => (
                          <div
                            key={text}
                            className="px-3.5 py-1 bg-white/10 rounded-full border border-white backdrop-blur-sm flex items-center gap-2"
                          >
                            <span className="text-white text-xs font-normal font-[Inter] leading-none">
                              {text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-950 text-white w-full min-h-screen py-[82px] px-4 sm:px-8 md:px-[82px] lg:px-[115px]">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[82px] items-start">
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Leadership Visual"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-start gap-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
              Leadership in the Digital Age: Embracing Innovation, Driving Change, and Building Resilient Teams for Sustainable Business
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white">
              In the rapidly evolving digital landscape, effective leadership requires adaptability, innovation, and a forward-thinking mindset. Today’s leaders must embrace technological advancements, foster a culture of continuous learning, and inspire teams to navigate change with confidence. Strategic decision-making, clear communication, and resilience are key to staying competitive. This insight explores essential leadership principles, practical strategies, and real-world examples to help you lead successfully, drive transformation, and build a future-ready organization in an era of constant disruption and innovation.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="px-3.5 py-1 bg-white/10 rounded-full shadow-[inset_0_0_4px_2px_rgba(255,255,255,0.1)] outline-[0.5px] outline-white backdrop-blur">
                <span className="text-white text-xs font-normal leading-none">Business Insight</span>
              </span>
              <span className="px-3.5 py-1 bg-white/10 rounded-full shadow-[inset_0_0_4px_2px_rgba(255,255,255,0.1)] outline-[0.5px] outline-white backdrop-blur">
                <span className="text-white text-xs font-normal leading-none">6 Min Read</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <BlogFaqPage />
      <BlogCtaPage />
      <Footer />
    </>
  );
};
export default Insights;