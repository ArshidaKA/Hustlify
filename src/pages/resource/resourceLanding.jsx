import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaBook, FaLightbulb } from "react-icons/fa";

const resources = [
  {
    icon: <FaDownload size={30} />,
    title: "Sales Objection Cheatsheet",
    desc: "Overcome the top 10 objections without sounding pushy or needy.",
  },
  {
    icon: <FaBook size={30} />,
    title: "Hustlify Playbook",
    desc: "Learn our exact strategies to convert leads into high-ticket clients.",
  },
  {
    icon: <FaLightbulb size={30} />,
    title: "High-Impact Scripts",
    desc: "Proven closing scripts used by 6-figure sales teams.",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

const FreeResourcesLanding = () => {
  return (
    <div className="relative min-h-screen font-sans text-[#C0C0C0] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://www.prosalesconnection.com/hubfs/images/7%20Steps%20to%20Creating%20a%20Successful%20Sales%20Meeting.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-8xl font-bold mb-6"
          {...fadeIn(0)}
        >
          <span className="text-white">Free</span>  Resources.
        </motion.h1>
        <motion.p className="max-w-2xl mx-auto text-white text-lg mb-8" {...fadeIn(0.2)}>
          Level up your sales game with our battle-tested playbooks, scripts,
          and frameworks—available at no cost.
        </motion.p>
       <a href="#contact">
  <motion.button
    className="bg-gradient-to-r from-[#C0C0C0] to-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
    {...fadeIn(0.4)}
  >
    let&apos;s get started
  </motion.button>
</a>

      </section>

      {/* Resource Cards */}
      <section className="px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              className="bg-[#111] p-8 rounded-xl shadow-xl hover:shadow-[#C0C0C0]/30 hover:-translate-y-1 transition-all"
              {...fadeIn(0.3 + i * 0.2)}
            >
              <div className="text-[#C0C0C0] mb-4">{res.icon}</div>
              <h3 className="text-xl text-white font-bold mb-2">{res.title}</h3>
              <p className="text-gray-400 text-sm">{res.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesLanding;
