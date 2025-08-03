import React from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Is this program suitable for complete beginners?",
    answer:
      "Absolutely. Our sales training is crafted to guide complete beginners through every step of becoming confident, result-driven closers.",
  },
  {
    question: "How is the 4-month structure divided?",
    answer:
      "The first 2 months focus on in-depth classroom sessions: objection handling, live roleplays, and pitch development. The next 2 months involve internship-based live selling with real brands.",
  },
  {
    question: "Will I get to work on real sales calls?",
    answer:
      "Yes. We ensure you get hands-on experience with live client calls, CRM systems, and outbound closing strategies under expert guidance.",
  },
  {
    question: "What kind of support or feedback will I receive?",
    answer:
      "You’ll get structured weekly performance reviews, 1-on-1 mentorship, and access to expert-led workshops during the entire program.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } },
};

function SalesFaq() {
  return (
    <section className="bg-white text-black py-16 px-4 sm:px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Heading */}
        <div className="lg:w-1/2 space-y-4">
          <p className="uppercase text-sm text-gray-500">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            Got questions? <br />
            We’ve got <span className="text-gray-600">answers</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="lg:w-1/2 space-y-4 w-full"
        >
          {faqData.map((item, idx) => (
            <details
              key={idx}
              className="bg-gray-100 px-5 py-4 rounded-lg border border-gray-200 cursor-pointer transition-all"
            >
              <summary className="font-semibold text-base sm:text-lg text-gray-800">
                {item.question}
              </summary>
              <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SalesFaq;
