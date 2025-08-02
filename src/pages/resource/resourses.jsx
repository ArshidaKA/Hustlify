import React from "react";
import { motion } from "framer-motion";
import FreeResourcesLanding from "./resourceLanding";
import { Link } from "react-router-dom";

const masterclassData = [
  
  {
    title: " The 3-Step Objection Diffuser",
    description:
      "1. CLARIFY: Dig deeper — don’t assume. Ask questions to uncover the truth.2. DISCUSS: Validate, don’t defend. Show empathy and understanding.3. DIFFUSE: Shift the lens. Let them solve it with your guidance....",
    buttonText: "Download",
    pdf:"/assets/3step.pdf",
   
    image:
      "https://backend.glnk.com/storage/blog-image/Sales-Hack-How-to-Grow-Business-with-Steady-Sales-Flow-guest-post-1.jpeg",
  },
  {
    title: "Closer’s Pre-Pitch Checklist",
    pdf:"/assets/close.pdf",
    description:
      "“If you don’t know this, don’t pitch yet.”Problem: What challenge are they facing?Pain Level: How emotionally urgent is it?urrent Situation: Where are they now?Desired Outcome: What result do they truly wantBudget: Can they afford this solution?Roadblocks: What’s slowing them ...",
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
      <div className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          {masterclassData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10 p-18 rounded-2xl shadow-xl bg-white border border-gray-300`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt="Masterclass"
                  className="w-[400px] max-w-full rounded-xl shadow-md"
                />
              </div>

              {/* Content */}
              <div className="text-left max-w-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-snug">
                  {item.title}
                </h2>
                <p className="text-lg mb-6 text-gray-600">{item.description}</p>
               <Link to="/form" state={{ image: item.image, pdf: item.pdf }}> <button  className="bg-gradient-to-r from-gray-200 to-gray-300 text-black font-semibold px-6 py-3 rounded-md transition-all hover:from-gray-300 hover:to-gray-400">
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
