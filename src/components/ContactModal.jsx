import React, { useEffect, useRef, useState } from "react";

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOutsideClick = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxA3QCD39h3skkYMXaZKKPW-hp2Wk4sP7Jl90Wn4k-GqJ9r9WvCIgC67xRHhp0Gxvgk/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        setToastMsg("Contact form submitted successfully!");
        form.reset();
        setTimeout(() => setShowModal(false), 1000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setToastMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToastMsg(""), 3000);
    }
  };

  return (
    <>
      {showModal && (
        <div
          ref={modalRef}
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm mt-12 flex items-center justify-center z-50 px-4"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 font-sans w-full max-w-lg sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 sm:space-y-9 relative overflow-y-auto max-h-[90vh]"
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>

            <div>
              <h6 className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                Contact Us
              </h6>
              <h4 className="text-3xl font-bold text-black">
                Get <span className="text-gray-600">in Touch</span>
              </h4>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full text-sm border border-gray-300 p-3 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/60"
            />

            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              className="w-full text-sm border border-gray-300 p-3 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/60"
            />

            <select
              name="service"
              required
              className="w-full text-sm border border-gray-300 p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/60"
              defaultValue=""
            >
              <option value="" disabled>
                Select Course
              </option>
              <option value="bde">Business Development Executive</option>
              <option value="mern">Web Development (MERN)</option>
              <option value="mean">Web Development (MEAN)</option>
              <option value="appdevelopment">App Development</option>
              <option value="ui&ux">UI & UX Designing</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full text-sm border border-gray-300 p-3 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/60"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-[200px] py-3 rounded-lg text-sm font-bold transition-all duration-300
                  ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      )}

      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-50 text-sm sm:text-base">
          {toastMsg}
        </div>
      )}
    </>
  );
};

export default ContactModal;
