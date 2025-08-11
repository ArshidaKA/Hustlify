import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
console.log("fg")
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxA3QCD39h3skkYMXaZKKPW-hp2Wk4sP7Jl90Wn4k-GqJ9r9WvCIgC67xRHhp0Gxvgk/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("course", formData.course);
    data.append("message", formData.message);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", course: "", message: "" });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Error occurred. Check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black px-4 md:px-16">
      {/* CTA Section */}
      <section className="text-white py-20 flex flex-col md:flex-row justify-between items-center rounded-3xl">
  <motion.div
    className="text-left mb-10 md:mb-0"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-6xl sm:text-8xl font-bold leading-tight">
      Ready?
      <br />
      <span className="text-gray-500">Let's Talk.</span>
    </h2>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <a
      href="#contact"
      className="bg-white hover:bg-gray-800 text-black font-semibold text-sm md:text-base py-3 px-6 md:px-8 rounded-lg transition duration-300"
    >
      Contact Now
    </a>
  </motion.div>
</section>
      {/* Contact Section */}
      <div className="py-14 md:py-20" id="contact">
        <section className="bg-[#f5f5f5] text-black py-14 px-4 sm:px-6 md:px-10 rounded-3xl sm:rounded-[60px] md:rounded-[100px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-extrabold mb-4">
                Get <span className="text-gray-700">in Touch.</span>
              </h2>

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
            <motion.div>
              <form
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-4 sm:space-y-5 border border-gray-200"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 text-black placeholder-gray-500 focus:outline-black text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 text-black placeholder-gray-500 focus:outline-black text-sm"
                />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 text-black focus:outline-black text-sm"
                >
                  <option disabled value="">
                    Select Course
                  </option>
                  <option>Sales Mastery</option>
                  <option>Marketing 101</option>
                  <option>AI for Sales</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 text-black h-28 sm:h-32 resize-none placeholder-gray-500 focus:outline-black text-sm"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-800 transition-all"
                >
                  {submitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {success && (
                  <p className="text-green-600 text-center font-medium mt-2">
                    Message submitted successfully!
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactSection;
