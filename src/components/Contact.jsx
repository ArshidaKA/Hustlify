import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-black px-4 md:px-16">
      {/* CTA Section */}
      <section className="text-white py-20 flex flex-col md:flex-row justify-between items-center rounded-3xl">
        <div className="text-left mb-10 md:mb-0">
          <h2 className="text-6xl sm:text-8xl font-bold leading-tight">
            Ready?
            <br />
            <span className="text-gray-500">Let's Talk.</span>
          </h2>
        </div>
        <div>
          <a
            href="#contact"
            className="bg-white hover:bg-gray-800 text-black font-semibold text-sm md:text-base py-3 px-6 md:px-8 rounded-lg transition duration-300"
          >
            Contact Now
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <div className="py-14 md:py-20" id="contact">
        <section className="bg-[#f5f5f5] text-black py-14 px-4 sm:px-6 md:px-10 rounded-3xl sm:rounded-[60px] md:rounded-[100px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Left Side: Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-extrabold mb-4">
                Get <span className="text-gray-700">in Touch.</span>
              </h2>
              {/* <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                Have questions or ready to collaborate? Reach out and we’ll get back to you shortly. We’re excited to hear from you!
              </p> */}

              <div className="mb-6">
                <h4 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                  <FaMapMarkerAlt className="text-black" />
                  Our Office
                </h4>
                <p className="text-gray-600 ml-7 text-sm sm:text-base">
                  7th floor, Phase 1, HiLITE Business Park, Palazhi, Kozhikode, Kerala 673637
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                  <FaEnvelope className="text-black" />
                  Contact Us
                </h4>
                <p className="text-gray-600 ml-7 text-sm sm:text-base">+91 90486 44333</p>
                <p className="text-gray-600 ml-7 text-sm sm:text-base">hustlify.in@gmail.com</p>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              // initial={{ opacity: 0, x: 40 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.7 }}
              // viewport={{ once: true }}
            >
              <form className="bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-4 sm:space-y-5 border border-gray-200">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded border border-gray-300 text-black placeholder-gray-500 focus:outline-black text-sm"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full p-3 rounded border border-gray-300 text-black placeholder-gray-500 focus:outline-black text-sm"
                />
                <select
                  className="w-full p-3 rounded border border-gray-300 text-black focus:outline-black text-sm"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select Course
                  </option>
                  <option>Sales Mastery</option>
                  <option>Marketing 101</option>
                  <option>AI for Sales</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded border border-gray-300 text-black h-28 sm:h-32 resize-none placeholder-gray-500 focus:outline-black text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-800 transition-all"
                >
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactSection;
