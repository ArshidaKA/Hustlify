import React from "react";
import { motion } from "framer-motion";
import FreeResourcesLanding from "./resourceLanding";
import { Link } from "react-router-dom";

const masterclassData = [
  {
    title: "The 3-Step Objection Diffuser",
    description:
      "1. CLARIFY: Dig deeper — don’t assume. Ask questions to uncover the truth.\n2. DISCUSS: Validate, don’t defend. Show empathy and understanding.\n3. DIFFUSE: Shift the lens. Let them solve it with your guidance...",
    buttonText: "Download",
    pdf: "/assets/3step.pdf",
    image:
      "https://backend.glnk.com/storage/blog-image/Sales-Hack-How-to-Grow-Business-with-Steady-Sales-Flow-guest-post-1.jpeg",
  },
  {
    title: "Closer’s Pre-Pitch Checklist",
    pdf: "/assets/close.pdf",
    description:
      "If you don’t know this, don’t pitch yet.\nProblem: What challenge are they facing?\nPain Level: How emotionally urgent is it?\nCurrent Situation: Where are they now?\nDesired Outcome: What result do they truly want?\nBudget: Can they afford this solution?\nRoadblocks: What’s slowing them down?",
    buttonText: "Download",
    image:
      "https://img.freepik.com/free-photo/sales-sell-selling-commerce-costs-profit-retail-concept_53876-132327.jpg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MasterclassSection = () => {
  return (
    <>
      <FreeResourcesLanding />
      <div className="bg-white py-16 px-4 md:px-10 font-[Poppins]">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          {masterclassData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10 p-6 md:p-10 rounded-2xl shadow-lg bg-white border border-gray-200`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* Image */}
              <div className="w-full md:w-[40%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-[60%] text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
                  {item.title}
                </h2>
                <p className="text-base md:text-lg mb-6 text-gray-600 whitespace-pre-line">
                  {item.description}
                </p>
                <Link to="/form" state={{ image: item.image, pdf: item.pdf }}>
                  <button className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-sm hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300">
                    {item.buttonText}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MasterclassSection;
