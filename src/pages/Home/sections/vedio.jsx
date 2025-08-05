import React from "react";

const AnnualRecap = () => {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 md:px-12 lg:px-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://www.highspot.com/wp-content/uploads/2023/07/essential-sales-skills.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-gray-400 font-medium tracking-wide uppercase text-sm sm:text-base mb-3">
          # Hustlify Sales Training
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 leading-tight bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">
          High-Ticket Closer <br />
          in <span className="text-gray-400">4 Months.</span>
        </h2>

        {/* YouTube Iframe */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-xl aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/NV6TtjPoYgA?si=HQn6f-po0TCd7tGx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Join Hustlify Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnnualRecap;
