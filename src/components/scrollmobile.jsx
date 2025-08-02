import React, { useState, useRef, useEffect } from 'react';

const SyncScrollMobile = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const mobileContentRef = useRef(null);

  const sections = [
    {
      title: "HIGH TICKET",
      subtitle: "SALES BLUEPRINT",
      description: "Transform from Beginner to Closer in Just 4 Months. Master real-world selling, earn high income, and build unshakeable confidence.",
      accent: "from-yellow-400 to-orange-500",
      tag: "HUSTLIFY TRAINING"
    },
    {
      title: "INTENSIVE",
      subtitle: "CLASSROOM TRAINING",
      description: "2 Months of rigorous offline training with sales call breakdowns, simulations, real pitching, and high-pressure challenge days.",
      accent: "from-blue-400 to-cyan-500",
      tag: "PHASE 1: FOUNDATION"
    },
    {
      title: "REAL WORLD",
      subtitle: "INTERNSHIP",
      description: "2 Months working with real companies. Experience inbound & outbound selling, master CRM systems, and handle live leads.",
      accent: "from-green-400 to-emerald-500",
      tag: "PHASE 2: APPLICATION"
    },
    {
      title: "CLOSER'S",
      subtitle: "PROTOCOL",
      description: "Master Hustlify's proven closing framework from 'Hello' to 'Paid'. Handle objections with confidence and close ₹50K+ deals.",
      accent: "from-purple-400 to-pink-500",
      tag: "MASTER LEVEL"
    }
  ];

  const handleScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrollPercent = scrollTop / scrollHeight;
    
    setScrollPosition(scrollPercent);
    
    // Determine current section
    const sectionIndex = Math.floor(scrollPercent * sections.length);
    setCurrentSection(Math.min(sectionIndex, sections.length - 1));
    
    // Sync mobile content scroll
    if (mobileContentRef.current) {
      const mobileScrollHeight = mobileContentRef.current.scrollHeight - mobileContentRef.current.clientHeight;
      mobileContentRef.current.scrollTop = scrollPercent * mobileScrollHeight;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto scrollbar-hide"
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
<div style={{ height: `100vh`
}}>
          {/* Dynamic Content Section */}
          <div className="h-screen flex items-center justify-between px-8 lg:px-16 relative">
            {/* Dynamic Left Content */}
            <div className="flex-1 max-w-2xl relative z-10">
              <div className="mb-8 transform transition-all duration-700 ease-out">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-700 text-white border border-gray-600 shadow-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                  {sections[currentSection].tag}
                </span>
              </div>
              
              <div 
                key={currentSection}
                className="transform transition-all duration-1000 ease-out"
                style={{
                  transform: `translateY(${scrollPosition * 30}px)`,
                  opacity: 1 - (scrollPosition % 0.25) * 1.5
                }}
              >
                <h1 className="text-6xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight">
                  {sections[currentSection].title}
                </h1>
                <h2 className={`text-4xl lg:text-6xl font-light mb-8 bg-gradient-to-r ${sections[currentSection].accent} bg-clip-text text-transparent tracking-wide`}>
                  {sections[currentSection].subtitle}
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-light">
                  {sections[currentSection].description}
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className={`px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r ${sections[currentSection].accent} shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                    START YOUR JOURNEY →
                  </button>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="absolute bottom-16 left-0 flex space-x-3">
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSection 
                        ? 'w-12 bg-gradient-to-r from-yellow-400 to-orange-500' 
                        : 'w-6 bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="flex-1 flex justify-center items-center relative">
              {/* Floating background elements */}
              <div 
                className="absolute -left-20 top-1/4 w-32 h-32 bg-gradient-to-r from-yellow-500/10 to-orange-400/10 backdrop-blur-xl rounded-full border border-yellow-500/20"
                style={{
                  transform: `translateY(${scrollPosition * 120}px) rotate(${scrollPosition * 180}deg)`,
                  filter: `blur(${scrollPosition * 2}px)`
                }}
              ></div>
              <div 
                className="absolute -right-16 top-2/3 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-cyan-300/10 backdrop-blur-xl rounded-2xl border border-blue-400/20"
                style={{
                  transform: `translateY(${-scrollPosition * 80}px) rotate(${-scrollPosition * 90}deg)`,
                  filter: `blur(${scrollPosition * 1.5}px)`
                }}
              ></div>

              {/* Phone Frame */}
              <div className="relative">
                <div className="w-80 h-[640px] bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-2 shadow-2xl border border-gray-700">
                  <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-50 rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-gradient-to-r from-gray-900 to-black px-6 py-3 flex justify-between items-center text-white">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-black text-xs font-black">H</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm font-bold">HUSTLIFY</span>
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div 
                      ref={mobileContentRef}
                      className="h-full overflow-y-auto scrollbar-hide bg-gradient-to-b from-white to-gray-50"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      <div className="p-6 space-y-6">
                        {/* Dynamic Header */}
                        <div className="text-center py-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${sections[currentSection].accent} rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl`}>
                            <span className="text-2xl font-black text-black">
                              {currentSection === 0 ? '🎯' : currentSection === 1 ? '📚' : currentSection === 2 ? '💼' : '🏆'}
                            </span>
                          </div>
                          <p className="text-gray-800 font-bold text-lg">
                            {sections[currentSection].tag}
                          </p>
                        </div>

                        {/* Main Dashboard Card */}
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white border border-gray-700 shadow-2xl">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className={`w-6 h-6 bg-gradient-to-r ${sections[currentSection].accent} rounded flex items-center justify-center`}>
                                <span className="text-xs text-black font-bold">$</span>
                              </div>
                              <span className="text-sm font-bold text-gray-300">Sales Tracker</span>
                            </div>
                            <div className="w-4 h-4 text-gray-400">📊</div>
                          </div>
                          
                          <h3 className="text-lg font-bold mb-2">
                            Your {sections[currentSection].title} 
                            <br />
                            <span className={`bg-gradient-to-r ${sections[currentSection].accent} bg-clip-text text-transparent`}>
                              Progress
                            </span>
                          </h3>
                          
                          <p className="text-gray-300 text-sm mb-6">
                            {currentSection === 0 ? "Ready to transform into a high-ticket closer?" :
                             currentSection === 1 ? "Building your sales foundation daily" :
                             currentSection === 2 ? "Applying skills with real companies" :
                             "Mastering the art of closing deals"}
                          </p>
                          
                          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 mb-4 border border-gray-600">
                            <div className="flex justify-between text-center">
                              <div>
                                <p className="text-gray-400 text-xs mb-1">Deal Value</p>
                                <p className={`text-2xl font-bold bg-gradient-to-r ${sections[currentSection].accent} bg-clip-text text-transparent`}>
                                  ₹{Math.floor(scrollPosition * 100000) + 50000}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-400 text-xs mb-1">Success Rate</p>
                                <p className="text-2xl font-bold text-green-400">{Math.floor(scrollPosition * 30) + 65}%</p>
                              </div>
                            </div>
                          </div>
                          
                          <button className={`w-full bg-gradient-to-r ${sections[currentSection].accent} text-black rounded-xl py-3 font-bold mb-2 shadow-lg`}>
                            {currentSection === 0 ? "START TRAINING" :
                             currentSection === 1 ? "CONTINUE LEARNING" :
                             currentSection === 2 ? "VIEW OPPORTUNITIES" :
                             "CLOSE MORE DEALS"}
                          </button>
                          
                          <button className="w-full text-gray-400 py-2 text-sm">
                            View Full Dashboard
                          </button>
                        </div>

                        {/* Dynamic Content Based on Section */}
                        <div className="space-y-4">
                          {currentSection === 0 && (
                            <>
                              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                                <h4 className="font-bold text-gray-800 mb-3">Program Overview</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Duration</span>
                                    <span className="font-semibold text-gray-800">4 Months</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Training Format</span>
                                    <span className="font-semibold text-gray-800">Offline + Internship</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Target Income</span>
                                    <span className="font-semibold text-green-600">₹50K+ deals</span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                                <h4 className="font-bold text-gray-800 mb-2">🎯 What You'll Achieve</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Master high-ticket sales</li>
                                  <li>• Build unshakeable confidence</li>
                                  <li>• Earn substantial income</li>
                                </ul>
                              </div>
                            </>
                          )}

                          {currentSection === 1 && (
                            <>
                              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                                <h4 className="font-bold text-gray-800 mb-3">Training Schedule</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Frequency</span>
                                    <span className="font-semibold text-gray-800">3-4 Days/Week</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Format</span>
                                    <span className="font-semibold text-gray-800">Offline Classroom</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Focus</span>
                                    <span className="font-semibold text-blue-600">Live Practice</span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                                <h4 className="font-bold text-gray-800 mb-2">📚 Core Activities</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Sales call breakdowns</li>
                                  <li>• Live simulations</li>
                                  <li>• High-pressure challenges</li>
                                </ul>
                              </div>
                            </>
                          )}

                          {currentSection === 2 && (
                            <>
                              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                                <h4 className="font-bold text-gray-800 mb-3">Real Company Experience</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Inbound Sales</span>
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Outbound Sales</span>
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">CRM Mastery</span>
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                                <h4 className="font-bold text-gray-800 mb-2">💼 Skills Applied</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Pipeline management</li>
                                  <li>• Lead handling</li>
                                  <li>• Weekly performance reviews</li>
                                </ul>
                              </div>
                            </>
                          )}

                          {currentSection === 3 && (
                            <>
                              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                                <h4 className="font-bold text-gray-800 mb-3">Closing Mastery</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Framework</span>
                                    <span className="font-semibold text-purple-600">Hello → Paid</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Objection Handling</span>
                                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Mock Deals</span>
                                    <span className="font-semibold text-gray-800">Real-time feedback</span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                                <h4 className="font-bold text-gray-800 mb-2">🏆 Master Skills</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Psychology of Sales</li>
                                  <li>• Value stacking techniques</li>
                                  <li>• Confidence in closing</li>
                                </ul>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black border-t border-gray-700 px-6 py-3">
                      <div className="flex justify-between text-white">
                        <div className="text-center">
                          <div className="w-6 h-6 mx-auto mb-1 text-yellow-400">🏠</div>
                          <span className="text-xs">Dashboard</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 mx-auto mb-1 text-blue-400">📈</div>
                          <span className="text-xs">Progress</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 mx-auto mb-1 text-green-400">💰</div>
                          <span className="text-xs">Earnings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      {/* Advanced Scroll Indicator - Hide when scroll is complete */}
      {/* {scrollPosition < 0.95 && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 w-2 h-40 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-600 overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-600 rounded-full transition-all duration-500 ease-out shadow-lg"
            style={{ height: `${scrollPosition * 100}%` }}
          ></div>
        </div>
      )} */} 

      {/* Floating Money Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400 opacity-20 text-xl"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
              transform: `translateY(${scrollPosition * (80 + i * 30)}px) translateX(${Math.sin(scrollPosition * Math.PI * 2 + i) * 30}px) rotate(${scrollPosition * 360}deg)`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            {i % 2 === 0 ? '💰' : '📈'}
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SyncScrollMobile;