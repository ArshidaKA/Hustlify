import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const HustlifyVision = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const location = useLocation();
const { image, pdf } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true); // Start loading

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxrgxNCgqmXsUc6uw-9z1PgExGqPTUGRX8NLexVkRIm4w0XnurWdglvaSmS9ruyekQd/exec",
      {
        method: "POST",
        body: new URLSearchParams(formData),
      }
    );

    if (response.ok) {
      console.log("Form submitted successfully!");

      // PDF Download
      const link = document.createElement("a");
      link.href = pdf;
      link.setAttribute("download", "Hustlify-Masterclass.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("Failed to submit form.");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setIsSubmitting(false); // End loading regardless of result
  }
};

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-16 py-20 bg-gray-50 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-0">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[500px] aspect-video rounded-3xl border-8 border-black shadow-2xl overflow-hidden">
            <img
              src={image}
              alt="Laptop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-4 border-black rounded-2xl pointer-events-none" />
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full flex justify-center lg:justify-start"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-200 w-full max-w-md lg:max-w-[500px]">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Learn How Top Sales Pros Handle Objections With Class...
              </h2>
              <p className="text-sm text-gray-600">
                Without lowering themselves to logical traps, high-pressure tactics, or low-status gimmicks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900"
                required
              />
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900"
                required
              />
             <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
>
  {isSubmitting ? "Submitting..." : "S U B M I T"}
</button>

            </form>

            <div className="text-center text-sm text-gray-500 mt-4">
              🔒 Your information is secure and will never be shared
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HustlifyVision;
