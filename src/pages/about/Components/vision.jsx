import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MissionVision = () => {
  return (
    <div className=" text-white w-full font-sans">
      {/* OUR MISSION */}
      <section className="min-h-[70vh] flex items-center px-6 lg:px-29">
        <div className="w-full max-w-5xl ml-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-[3rem] lg:text-[5rem] font-extrabold uppercase text-left"
          >
            Our <br /> Mission
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-left max-w-[600px] mt-4 text-gray-300 text-base lg:text-lg"
          >
            At Hustlify, our mission is to empower individuals with high-quality
            sales education and tools to thrive in the competitive digital economy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            className="mt-10 text-left"
          >
            <p className="text-sm text-white mb-2">What We Do</p>
            <div className="animate-bounce">
              <span className="text-2xl">&#x25BC;</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="min-h-[70vh] flex items-center px-6 lg:px-20 border-t border-gray-800">
        <div className="w-full max-w-5xl mr-auto text-right ml-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-[3rem] lg:text-[5rem] font-extrabold uppercase"
          >
            Our <br /> Vision
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="max-w-[600px] mt-4 text-gray-300 text-base lg:text-lg ml-auto"
          >
            We envision a world where anyone with ambition can master sales and
            entrepreneurship through accessible, engaging, and effective learning.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
