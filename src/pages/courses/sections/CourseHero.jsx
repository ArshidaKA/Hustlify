import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  },
});

const HustlifyHero = () => {
  return (
    <section className="relative bg-cover bg-center text-white min-h-screen flex items-center px-6 md:px-16"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?cs=srgb&dl=pexels-tirachard-kumtanom-112571-733856.jpg&fm=jpg')`, // replace with your uploaded image path
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
        {/* Left Side */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-widest text-gray-200 font-medium">
            Career focused
          </p>

          <h1 className="text-4xl md:text-7xl  font-[poppins] leading-tight">
            About our <br />  Program
          </h1>

          <p className="text-lg text-gray-200 max-w-lg">
             Learn in-demand skills, grow your career, and unlock financial
            freedom with expert-led, flexible programs.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 text-base shadow-lg hover:bg-gray-200 transition">
              Start now <FaArrowRight />
            </button>

            <div className="flex items-center gap-2 border-l pl-4 border-white/30">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-sm">100+ Positive Client Reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - empty intentionally */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default HustlifyHero;
