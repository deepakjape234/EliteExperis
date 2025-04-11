"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  end: number;         // Final number to count to
  duration?: number;   // Duration in milliseconds
  suffix?: string;     // Optional suffix (%, +, etc.)
};

const ContactCounter = ({ end, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <div
      ref={ref}
      className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-6xl sm:text-5.5xl font-semibold leading-[72px] font-Montserrat"
    >
      {count}
      {suffix}
    </div>
  );
};

export default ContactCounter;
