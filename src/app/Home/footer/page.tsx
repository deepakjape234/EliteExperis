import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0097a7] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start">
        {/* Logo + Text Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-start">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
        {/* Logo Image */}
        <img src="/Mask group.png" alt="Elite Experis" className="w-16 h-16" />

      {/* Company Name */}
        <div className="flex flex-col leading-tight">
            <span className="text-black font-extrabold text-2xl tracking-widest">ELITE</span>
            <span className="text-white font-light text-2xl tracking-widest">EXPERIS</span>
        </div>
    </div>

    {/* Strategic Consulting Line (Now Placed Below) */}
    <p className="text-sm text-white mt-3 leading-relaxed">
      Strategic Consulting to <br /> Make Your Life Easier
    </p>
    </div>


        {/* Links Section */}
        <div className="w-full md:w-3/4 flex flex-wrap justify-between">
          {/* Column: Home */}
          <div className="w-1/2 md:w-1/5 mb-4">
            <h3 className="font-semibold text-lg">Home</h3>
            {Array(5).fill("Vision & Mission").map((item, index) => (
              <p key={index} className="text-sm hover:underline cursor-pointer">{item}</p>
            ))}
          </div>

          {/* Column: About Us */}
          <div className="w-1/2 md:w-1/5 mb-4">
            <h3 className="font-semibold text-lg">About Us</h3>
            {Array(5).fill("Vision & Mission").map((item, index) => (
              <p key={index} className="text-sm hover:underline cursor-pointer">{item}</p>
            ))}
          </div>

          {/* Column: Service */}
          <div className="w-1/2 md:w-1/5 mb-4">
            <h3 className="font-semibold text-lg">Service</h3>
            {Array(5).fill("Vision & Mission").map((item, index) => (
              <p key={index} className="text-sm hover:underline cursor-pointer">{item}</p>
            ))}
          </div>

          {/* Column: Social Media */}
          <div className="w-1/2 md:w-1/5 mb-4">
            <h3 className="font-semibold text-lg">Social Media</h3>
            {["WhatsApp", "Instagram", "Email", "Facebook", "LinkedIn"].map((item, index) => (
              <p key={index} className="text-sm hover:underline cursor-pointer">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;