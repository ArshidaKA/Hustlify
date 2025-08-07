import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaMoneyCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-transparent text-white  px-6 md:px-17 py-20 font-sans bg-cover bg-center">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="flex items-center gap-2 text-sm text-green-400 font-[Poppins]">
            <FaMoneyCheck />
            Welcome to <a href="/" className="underline">Hustlify</a>
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl  font-bold leading-tight font-[Poppins]">
            Unlock <span className="underline decoration-gray-200">High </span ><br />
           <span className="bg-gradient-to-r from-gray-700 to-gray-300 text-transparent bg-clip-text">Ticket Sales.</span>
          </h1>

          <p className="text-gray-400 font-[Poppins] text-base sm:text-lg max-w-md">
            Develop elite-level skills in sales and strategic business growth with Hustlify’s 6-month intensive training.
          </p>

         <div className="flex flex-wrap gap-4">
  <a href="#contact">
    <button className="flex items-center bg-white text-black px-4 py-2 rounded-full font-medium shadow-md hover:scale-105 transition">
      <span className="mr-2">Join now</span>
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 7L7 17M17 7H9M17 7V15"
          />
        </svg>
      </span>
    </button>
  </a>
</div>


          {/* Stats Section */}
<div className="hidden md:flex flex-wrap gap-10 pt-8">
            <div className="min-w-[120px]">
              <p className="text-2xl font-bold text-white font-[Poppins]">
                <CountUp end={4} duration={2} />X Faster
              </p>
              <p className="text-sm text-gray-400 font-[Poppins]">
                Sales Conversion Speed
              </p>
            </div>

            <div className="min-w-[120px]">
              <p className="text-2xl font-bold text-white font-[Poppins]">
                <CountUp end={98} duration={2} />%
              </p>
              <p className="text-sm text-gray-400 font-[Poppins]">
                Trainees Land Clients Within 30 Days
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Content: Responsive YouTube Video */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YqDEOWI7qZc?si=2SN33QeDQEgNMccD"
              title="Hustlify Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
