import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const AboutContent = () => {
  return (
    <section className="bg-white text-black py-20 px-4 sm:px-8 md:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-lg"
        >
          <p className="text-sm uppercase mb-2 text-gray-500 tracking-wide">
            About Hustlify
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Empower Your Future with <span className="text-black underline underline-offset-4 decoration-gray-500">Hustlify</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Learn in-demand skills, grow your career, and unlock financial freedom with expert-led, flexible programs.
          </p>
          <ul className="space-y-2 text-gray-500 text-base">
            <li>✔ Skill-based training for all ages.</li>
            <li>✔ Career-focused and practical learning.</li>
            <li>✔ Flexible, expert-led courses.</li>
          </ul>
          <button className="mt-8 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Explore Services
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden shadow-xl group h-64 sm:h-80 md:h-full"
        >
          <img
            src="https://www.prosalesconnection.com/hubfs/images/7%20Steps%20to%20Creating%20a%20Successful%20Sales%20Meeting.png"
            alt="Hustlify Office"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black p-4 rounded-full bg-opacity-70 hover:scale-110 transition">
              <FaPlay className="text-white text-sm" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
