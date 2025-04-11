"use client";

const ContactForm = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Badge */}
      <div className="px-6 py-2 bg-white/10 rounded-full shadow-[inset_0px_0px_4px_1px_rgba(255,255,255,0.14)] backdrop-blur-[2px] inline-flex justify-center items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-lg font-normal font-['Montserrat']">Get in Touch</span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-white text-4xl md:text-5xl font-semibold font-inter leading-snug mt-4 px-4">
        Strategic Solutions Begin{" "}<br/>
        <span className="mt-[-30px] text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-5xl sm:text-5xl font-semibold leading-[56px] font-inter">with Your First Message!</span>
      </h2>

      {/* Form Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-10 w-full max-w-5.5xl">
        {/* Contact Form */}
        <div className="w-full max-w-lg p-6 bg-white/10 rounded-xl backdrop-blur-md flex flex-col gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-lg md:text-2xl font-medium font-inter">Name</label>
            <input
              type="text"
              placeholder="Tell us who you are"
              className="w-full p-4 bg-white/10 rounded-xl outline outline-gray-200 text-white placeholder-white placeholder-opacity-50 backdrop-blur-sm font-inter text-lg font-medium leading-relaxed"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-lg md:text-2xl font-medium font-inter">Email Address</label>
            <input
              type="email"
              placeholder="Where can we reach you?"
              className="w-full p-4 bg-white/10 rounded-xl outline outline-gray-200 text-white placeholder-white placeholder-opacity-50 backdrop-blur-sm font-inter text-lg font-medium leading-relaxed"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-lg md:text-2xl font-medium font-inter">Phone</label>
            <input
              type="tel"
              placeholder="Let’s stay connected."
              className="w-full p-4 bg-white/10 rounded-xl outline outline-gray-200 text-white placeholder-white placeholder-opacity-50 backdrop-blur-sm font-inter text-lg font-medium leading-relaxed"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-lg md:text-2xl font-medium font-inter">Message (Optional)</label>
            <textarea
              placeholder="Tell us your specific case"
              className="w-full p-4 bg-white/10 rounded-xl outline outline-gray-200 text-white placeholder-white placeholder-opacity-50 backdrop-blur-sm resize-none font-inter text-lg font-medium leading-relaxed"
              rows={2}
            />
          </div>

          {/* Submit Button */}
            <div className="flex justify-center mt-4">
                <button className="px-4 py-2 bg-teal-400 rounded-full text-black font-medium text-base flex items-center justify-center gap-2 hover:bg-teal-500 transition font-Montserrat font-inter leading-relaxed">
                    Send to Us
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
            </div>


        {/* Circular Image Design */}
       {/* 👇 Mobile-only Version */}
<div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:hidden flex justify-center items-center">
  <div className="absolute w-full h-full rounded-full border border-lime-400"></div>
  <div className="absolute w-3/4 h-3/4 rounded-full border border-lime-400"></div>
  <div className="absolute w-1/2 h-1/2 rounded-full border border-lime-400"></div>
  <div className="absolute w-1/4 h-1/4 rounded-full border border-lime-400"></div>

  {/* Smaller / adjusted positions for mobile */}
  <img className="absolute w-8 h-8 rounded-full -top-3 left-44 -translate-x-1/2" src="/contact-form-circle-img.svg" alt="User" />
  <img className="absolute w-7 h-7 rounded-full top-[18%] left-[5%]" src="/contact-circle-img8.svg" alt="User" />
  <img className="absolute w-6 h-6 rounded-full bottom-0 right-1/4" src="/contact-circle-img5.svg" alt="User" />
  <img className="absolute w-6 h-6 rounded-full top-[70%] right-[70%]" src="/contact-circle-img4.svg" alt="User" />
  <img className="absolute w-7 h-7 rounded-full top-[75%] right-[20%]" src="/contact-circle-img6.svg" alt="User" />
  <img className="absolute w-7 h-7 rounded-full top-[30%] right-[14%]" src="/contact-circle-img7.svg" alt="User" />
  <img className="absolute w-6 h-6 rounded-full top-[35%] left-[45%]" src="/contact-circle-img3.svg" alt="User" />
  <img className="absolute w-6 h-6 rounded-full bottom-[33%] right-[40%]" src="/contact-us-circle-img2.png" alt="User" />
</div>

{/* 👇 Desktop-only Version (DO NOT TOUCH THIS) */}
<div className="hidden lg:flex relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] justify-center items-center">
  <div className="absolute w-full h-full rounded-full border border-lime-400"></div>
  <div className="absolute w-3/4 h-3/4 rounded-full border border-lime-400"></div>
  <div className="absolute w-1/2 h-1/2 rounded-full border border-lime-400"></div>
  <div className="absolute w-1/4 h-1/4 rounded-full border border-lime-400"></div>

  {/* Floating Images */}
  <img className="absolute w-18 h-18 rounded-full -top-4 left-86" src="/contact-form-circle-img.svg" alt="User" />
  <img className="absolute w-18 h-18 rounded-full top-21 left-2" src="/contact-circle-img8.svg" alt="User" />
  <img className="absolute w-14 h-14 rounded-full -bottom-4 right-1/4" src="/contact-circle-img5.svg" alt="User" />
  <img className="absolute w-10 h-10 rounded-full top-96 right-84" src="/contact-circle-img4.svg" alt="User" />
  <img className="absolute w-14 h-14 rounded-full top-85 right-20" src="/contact-circle-img6.svg" alt="User" />
  <img className="absolute w-14 h-14 rounded-full top-36 right-14" src="/contact-circle-img7.svg" alt="User" />
  <img className="absolute w-12 h-12 rounded-full bottom-1/2 left-1/2.8 top-27" src="/contact-circle-img3.svg" alt="User" />
  <img className="absolute w-11 h-11 rounded-full bottom-1/3 right-1/2.5" src="/contact-us-circle-img2.png" alt="User" />
</div>

      </div>
    </div>
  );
};

export default ContactForm;
