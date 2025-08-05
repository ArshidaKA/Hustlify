import React, { useState, useEffect } from 'react';

const SyncScrollMobile = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "HIGH TICKET",
      subtitle: "SALES BLUEPRINT",
      description: "Transform from Beginner to Closer in Just 4 Months. Master real-world selling, earn high income, and build unshakeable confidence.",
      accent: "from-yellow-400 to-orange-500",
      tag: "HUSTLIFY TRAINING",
      emoji: "🎯"
    },
    {
      title: "INTENSIVE",
      subtitle: "CLASSROOM TRAINING",
      description: "2 Months of rigorous offline training with sales call breakdowns, simulations, real pitching, and high-pressure challenge days.",
      accent: "from-blue-400 to-cyan-500",
      tag: "PHASE 1: FOUNDATION",
      emoji: "📚"
    },
    {
      title: "REAL WORLD",
      subtitle: "INTERNSHIP",
      description: "2 Months working with real companies. Experience inbound & outbound selling, master CRM systems, and handle live leads.",
      accent: "from-green-400 to-emerald-500",
      tag: "PHASE 2: APPLICATION",
      emoji: "💼"
    },
    {
      title: "CLOSER'S",
      subtitle: "PROTOCOL",
      description: "Master Hustlify's proven closing framework from 'Hello' to 'Paid'. Handle objections with confidence and close ₹50K+ deals.",
      accent: "from-purple-400 to-pink-500",
      tag: "MASTER LEVEL",
      emoji: "🏆"
    }
  ];

  // Optional: Autoplay
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSection((prev) => (prev + 1) % sections.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const next = () => setCurrentSection((prev) => (prev + 1) % sections.length);
  const prev = () => setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);

  const section = sections[currentSection];

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-black to-gray-800 mt-10 overflow-hidden">
      <div className="h-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-700 text-white border border-gray-600 shadow-lg mb-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
            {section.tag}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight">
            {section.title}
          </h1>
          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-light mb-6 bg-gradient-to-r ${section.accent} bg-clip-text text-transparent`}>
            {section.subtitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {section.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 ml-20 sm:ml-0">
  <button
    onClick={prev}
    className="text-white border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
  >
    Prev
  </button>
  <button
    onClick={next}
    className={`px-6 py-3 rounded-xl font-bold text-black bg-gradient-to-r ${section.accent} shadow-xl hover:scale-105 transition`}
  >
    Next →
  </button>
</div>


          <div className="mt-6 flex justify-center lg:justify-start space-x-2">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSection ? 'w-10 bg-gradient-to-r from-yellow-400 to-orange-500' : 'w-5 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Mobile View */}
<div className="w-full lg:w-1/2 flex justify-center items-center h-auto lg:h-auto">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-2 shadow-2xl border border-gray-700">
              <div className="w-full h-[600px] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 rounded-[2.5rem] relative">
                {/* Mobile Header */}
                <div className="bg-gradient-to-r from-gray-900 to-black px-4 py-2 flex justify-between items-center text-white text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-black">H</span>
                    </div>
                    <span className="font-semibold">HUSTLIFY</span>
                  </div>
                </div>

                {/* Mobile Content */}
                <div className="h-full overflow-hidden px-4 rounded-full py-6">
                  <div className="text-center py-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.accent} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <span className="text-2xl font-black text-black">{section.emoji}</span>
                    </div>
                    <p className="text-gray-800 font-bold text-lg">{section.tag}</p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white border border-gray-700 shadow-2xl">
                    <h3 className="text-lg font-bold mb-2">
                      Your {section.title}
                      <br />
                      <span className={`bg-gradient-to-r ${section.accent} bg-clip-text text-transparent`}>
                        Progress
                      </span>
                    </h3>
                    <p className="text-gray-300 text-sm mb-6">
                      {currentSection === 0
                        ? "Ready to transform into a high-ticket closer?"
                        : currentSection === 1
                        ? "Building your sales foundation daily"
                        : currentSection === 2
                        ? "Applying skills with real companies"
                        : "Mastering the art of closing deals"}
                    </p>
                    <button className={`w-full bg-gradient-to-r ${section.accent} text-black rounded-xl py-3 font-bold mb-2 shadow-lg`}>
                      {currentSection === 0
                        ? "START TRAINING"
                        : currentSection === 1
                        ? "CONTINUE LEARNING"
                        : currentSection === 2
                        ? "VIEW OPPORTUNITIES"
                        : "CLOSE MORE DEALS"}
                    </button>
                    <button className="w-full text-gray-400 py-2 text-sm">View Full Dashboard</button>
                  </div>
                </div>

                {/* Mobile Bottom Nav */}
                <div className="absolute bottom-0 w-full bg-gradient-to-r from-gray-900 to-black border-t border-gray-700 px-4 py-2 flex justify-around text-xs text-white">
                  <div className="text-center"><div className="text-yellow-400 mb-1">🏠</div><span>Dashboard</span></div>
                  <div className="text-center"><div className="text-blue-400 mb-1">📈</div><span>Progress</span></div>
                  <div className="text-center"><div className="text-green-400 mb-1">💰</div><span>Earnings</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default SyncScrollMobile;
