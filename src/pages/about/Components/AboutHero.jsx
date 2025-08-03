import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <section className="text-black px-4 md:px-16 py-10 font-sans overflow-hidden">
      {/* Top Banner */}
      <div className="relative mb-20 h-64 md:h-72 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl text-white font-bold mb-2 leading-tight">
            About Us.
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400">
            Hustlify &gt; About Us
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl items-center p-4 sm:p-8">
        {/* Image Block */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20100147/61c0526c13c2c742de2cdeb5_WhatsApp-Image-2021-12-20-at-16.51.07.jpeg"
              alt="Team"
              className="w-full h-auto object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-xl font-bold text-base sm:text-xl"
          >
            <span>25+</span>
            <p className="text-xs sm:text-sm font-semibold -mt-1">
              Years of Experience
            </p>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Company <br />
            <span className="italic text-gray-700">About</span>
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            Hustlify helps businesses of all sizes — from startups to enterprises —
            grow with expert training in sales, marketing, and client success.
            We empower teams to scale faster, smarter, and more strategically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            {[
              "Emerging Sales Solutions",
              "Affordable Pricing",
              "How to Improve Conversions",
              "Reliable & Expert Mentors",
            ].map((item, index) => (
              <motion.p
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-yellow-500 shrink-0" />
                {item}
              </motion.p>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="mt-8 bg-black text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-900 transition"
          >
            Get A Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
