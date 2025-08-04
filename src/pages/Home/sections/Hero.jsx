import React from "react";
import { motion } from "framer-motion";
import { FaMoneyCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative bg-transparent text-white min-h-[90vh] px-4 font-sans bg-cover bg-center"
      // style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-dark-grunge-display-background-with-smoky-atmosphere_1048-16218.jpg?semt=ais_hybrid&w=740&q=80')" }} // 🔁 Replace with your image path
    >
      <div className="absolute inset-0  bg-opacity-60 z-0" /> {/* Optional: dark overlay */}

      <div className="relative z-10 grid md:grid-cols-2 gap-12 md:px-10 px-4 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="flex items-center gap-2 font-[Poppins] text-sm text-green-400">
            <FaMoneyCheck /> welcome to
            <a href="/" className="underline">hustlify</a>
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[Poppins]">
            Unlock <span className="underline decoration-gray-200">High-Ticket</span><br />
            Sales.
          </h1>
          <p className="text-gray-400 font-[Poppins]">
            Develop the skills to excel in sales, marketing, client relations, and strategic growth with this 6-month training program
          </p>
<div className="flex gap-4">
  <a href="#contact">
    <button className="bg-gradient-to-r from-gray-200 to-gray-300 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
      Join us – now!
    </button>
  </a>
</div>

<div className="hidden md:flex flex-wrap gap-8 pt-6">
            <div>
              <p className="text-2xl font-bold text-white font-[Poppins]">3X Faster</p>
              <p className="text-sm text-gray-400 font-[Poppins]">Sales Cycle Completion Time</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-[Poppins]">95%</p>
              <p className="text-sm text-gray-400 font-[Poppins]">Trainees Close Deals Within 30 Days</p>
            </div>
          </div>
        </motion.div>

        {/* Right Video Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <video
              src="/vedi.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full  md:h-[80vh] h-[40vh] object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
