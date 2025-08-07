import React from "react";
import { motion } from "framer-motion";

const HustlifyTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Adhish Vinayak PV",
      role: "Co-Founder",
      image: "/founder/adhish.jpg",
      delay: 0,
    },
    {
      id: 2,
      name: "Sarang P",
      role: "Co-Founder",
      image: "/founder/sarang.jpg",
      delay: 0.2,
    },
    {
      id: 3,
      name: "Adhil",
      role: "Co-Founder",
      image: "/founder/adhil.jpg",
      delay: 0.4,
    },
    {
      id: 4,
      name: "Midhun Raj M",
      role: "Co-Founder",
      image: "/founder/midhun.jpg",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-24 py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white/10 rounded-full blur-md" />
      </div>

      {/* Section Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <div className="inline-block px-4 py-2 bg-white/10 text-sm font-medium rounded-full backdrop-blur">
          🚀 Hustlify Team
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mt-4">
          Meet the Team <br />
          That Makes It Happen
        </h2>
        <p className="text-gray-300 max-w-xl text-base sm:text-lg mt-4 mx-auto">
          From strategy to execution, our team combines creativity, tech, and hustle to turn your
          ideas into reality. This is Hustlify.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="relative bg-transparent rounded-md text-center shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: member.delay, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image Frame */}
            <div className="relative p-4">
              <div className="relative w-full max-w-[240px] aspect-[3/4] mx-auto overflow-hidden rounded-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-70 object-contain grayscale z-0 relative"
                />
                <div className="absolute top-6 left-2 right-2 bottom-9 border-r-[10px] border-b-[8px] border-yellow-200 pointer-events-none -z-0" />
              </div>
            </div>

            {/* Name & Role */}
            <div className="pb-6 px-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-400">{member.name}</h3>
              <p className="text-sm text-yellow-200 font-semibold">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HustlifyTeam;
