import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

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
    <section className="bg-white text-black py-20 px-6 md:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-widest text-gray-600 font-medium">
            About our course
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[Poppins]">
            Transform in to<br />
            <span className="underline underline-offset-4 decoration-gray-400">
          high-ticket closer.
            </span>
          </h1>

          <p className="text-gray-600 text-lg">
            Learn in-demand skills, grow your career, and unlock financial
            freedom with expert-led, flexible programs.
          </p>

          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-purple-600 mt-1" />
              <span>Skill-based training for all ages.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-purple-600 mt-1" />
              <span>Career-focused and practical learning.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-purple-600 mt-1" />
              <span>Flexible, expert-led courses.</span>
            </li>
          </ul>

          <button className="bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300">
            Enroll now
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
          className="relative w-full h-full flex justify-center items-center"
        >
          <img
            src="https://www.lystloc.com/blog/wp-content/uploads/2023/01/Lystloc.webp" // Or use your uploaded image path here
            alt="Team working"
            className="rounded-xl shadow-lg w-full max-w-[600px] object-cover"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-black bg-opacity-70 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl hover:scale-105 transition">
              ▶
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HustlifyHero;
