"use client";

const ContactMap = () => {
  return (
    <div className="relative w-full flex flex-col bg-black px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Map Image Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-[url('/Contact-us-map-new.svg')] bg-cover bg-center bg-no-repeat opacity-60 md:opacity-50 z-0 mt-50"
        ></div>

        {/* Content Above the Map */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 mt-[-400px]">
          {/* "Get in Touch" Badge */}
          <div className="px-3 py-1 bg-white/10 rounded-full shadow-lg backdrop-blur-md inline-flex justify-center items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-lg font-medium font-Montserrat">
              Get in Touch
            </span>
          </div>

          {/* Heading Text */}
          <h1 className="mt-4 text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-2xl font-inter">
            Your Growth Starts Here—{" "}
            <span className="mt-[-30px] text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-5xl sm:text-5xl font-semibold leading-[56px] font-inter">Reach Out to Us!</span>
          </h1>
        </div>
      </div>

      {/* Contact Cards Section (Appears Below the Map) */}
      <div className="relative z-10 flex justify-center items-center gap-8 flex-wrap mt-10 pb-20">
        {/* 📞 Phone Contact Card */}
        <div className="w-86 px-3 py-10 bg-white/10 rounded-3xl shadow-lg outline-[0.5px] outline-white backdrop-blur-md flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-gradient-to-r from-lime-400 to-cyan-600 rounded-full flex items-center justify-center">
            <img src="/whatsapp.svg" alt="Contact Icon" className="w-8 h-8 object-contain" />
            
          </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-2xl sm:text-2xl font-semibold leading-[10x] font-inter text-center">
              +6232456678
              <p className="text-white text-2xl font-normal font-inter leading-loose text-center">
            We Are Always Ready to Help
          </p>
            </div>
          </div>
        </div>

        {/* 📧 Email Contact Card */}
        <div className="w-86 px-3 py-5 bg-white/10 rounded-3xl shadow-lg outline-[0.5px] outline-white backdrop-blur-md flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-gradient-to-r from-lime-400 to-cyan-600 rounded-full flex items-center justify-center">
            <img src="/linkedin.svg" alt="Contact Icon" className="w-8 h-8 object-contain" />
          </div>

            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-2xl sm:text-2xl font-semibold leading-[10x] font-inter text-center">
              Support@help.com
              <p className="text-white text-2xl font-normal font-inter leading-loose text-center">
            The Best Way to Get a Faster Answer
          </p>
            </div>
          </div>

        </div>

        {/* 🐦 Social Media Contact Card */}
        <div className="w-86 px-3 py-5 bg-white/10 rounded-3xl shadow-lg outline-[0.5px] outline-white backdrop-blur-md flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-gradient-to-r from-lime-400 to-cyan-600 rounded-full flex items-center justify-center">
            <img src="/telegram.svg" alt="Contact Icon" className="w-8 h-8 object-contain" />
          </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-2xl sm:text-2xl font-semibold leading-[10x] font-inter text-center">
              @Optivis_Business
              <p className="text-white text-2xl font-normal font-inter leading-loose text-center">
            The Best Way to Connect with Us
          </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactMap;
