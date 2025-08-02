import React from "react";

const AnnualRecap = () => {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 md:px-12 lg:px-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://www.highspot.com/wp-content/uploads/2023/07/essential-sales-skills.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto z-10 max-w-6xl ">
        <p className="text-gray-300 font-semibold tracking-wider uppercase mb-4 text-sm sm:text-base">
          # Hustlify Sales Training
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-gray-200 to-white inline-block text-transparent bg-clip-text">
          High-Ticket Closer <br/> in  <span className="text-gray-400">4 Months.</span>
        </h2>

        {/* <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-base sm:text-lg">
          Learn the mindset, skillset, and toolset of a top 1% closer. Whether you're starting from scratch or ready to scale, our proven sales blueprint helps you close deals with confidence and authority.
        </p> */}

        {/* Video Box */}
        <div className="relative w-full pb-[56.25%] mb-12 rounded-2xl overflow-hidden border-4 border-gray-600 shadow-lg">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <a
            href="#"
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition"
          >
            Join Hustlify Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnnualRecap;
