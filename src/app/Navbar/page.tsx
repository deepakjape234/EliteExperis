"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="relative z-[10000]"> {/* 👈 Ensures nav is always on top */}
      <div className="absolute w-full flex justify-center mt-[32.14px] mb-[32.14px]">
        <nav className="z-10 bg-[#0a192f] text-white px-6 py-2 rounded-full shadow-lg flex justify-between items-center w-[116rem] h-[3.2rem] mx-auto max-w-[90%] md:px-10">
          {/* Left Section - Logo */}
          <div className="flex items-center gap-3">
            <Image src="/Property 1=Logo dark bg.svg" alt="Elite Experis Logo" width={78} height={78} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {["/", "/about_us", "/blog", "/Services"].map((path, index) => (
              <Link
                key={index}
                href={path}
                className={`px-6 py-1.5 rounded-[40px] text-lg font-medium font-Montserrat ${
                  isActive(path) ? "bg-white text-black" : "text-white"
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path
                      .replace("/", "")
                      .replace(/_/g, " ")
                      .split(" ")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
              </Link>
            ))}
          </div>

          {/* Right Section - Contact Us Button */}
          <Link
            href="/contact_us"
            className="hidden md:block bg-lime-400 text-zinc-950 text-base font-medium font-inter px-6 py-2 rounded-full hover:bg-lime-500"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="relative inset-0 z-[999] pointer-events-none">
          <div className="absolute top-20 right-4 w-64 bg-black/90 backdrop-blur-md rounded-xl shadow-xl flex flex-col items-center py-6 px-4 space-y-4 pointer-events-auto">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {["/", "/about_us", "/blog", "/Services"].map((path, index) => (
              <Link
                key={index}
                href={path}
                className={`text-base font-medium font-Montserrat ${
                  isActive(path) ? "text-lime-400" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {path === "/"
                  ? "Home"
                  : path
                      .replace("/", "")
                      .replace(/_/g, " ")
                      .split(" ")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
              </Link>
            ))}

            <Link
              href="/contact_us"
              className="bg-lime-400 text-zinc-950 text-sm font-medium font-inter px-4 py-2 rounded-full hover:bg-lime-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
