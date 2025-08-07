import React from "react";
import {
  FaChartLine,
  FaHandshake,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const benefitItems = [
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Master High-Ticket Sales",
    description:
      "Learn how to confidently sell ₹50K+ products with buyer psychology, premium positioning & deal-closing frameworks.",
  },
  {
    icon: <FaHandshake className="text-white text-2xl" />,
    title: "2-Month Real Internship",
    description:
      "Work with real companies to gain hands-on experience in inbound & outbound selling, CRM tools, and live sales reviews.",
  },
  {
    icon: <FaLaptopCode className="text-white text-2xl" />,
    title: "Live Pitching & Simulations",
    description:
      "Build trust and persuasion through live mock deals, cold calling simulations, and real-world sales call breakdowns.",
  },
  {
    icon: <FaBrain className="text-white text-2xl" />,
    title: "Closer's Protocol Framework",
    description:
      "Follow Hustlify's proven 'Hello-to-Paid' protocol, master objection handling, and practice with feedback-rich challenges.",
  },
];

const WhyChooseHustlify = () => {
  return (
    <section className="bg-white px-6 py-20 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-center">
        {/* Left Column */}
        <div className="space-y-6 col-span-1 flex flex-col gap-6">
          {benefitItems.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-teal-800 text-white p-6 rounded-xl shadow-lg space-y-2"
            >
              <div>{item.icon}</div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg"
            alt="Why Choose Hustlify"
            className="object-cover w-full h-full max-h-[500px]"
          />
        </motion.div>

        {/* Right Column */}
        <div className="col-span-1 flex flex-col gap-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold text-black mb-2">
              WHY <span className="text-teal-800">CHOOSE US?</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Everyday we work hard to make life of our clients better and happier.
            </p>
          </motion.div>

          <div className="space-y-6">
            {benefitItems.slice(2).map((item, index) => (
              <motion.div
                key={index}
                custom={index + 2}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-black text-white p-6 rounded-xl shadow-lg space-y-2"
              >
                <div>{item.icon}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHustlify;
