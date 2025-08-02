import React, { useState, useEffect, useRef } from 'react';

const TeamSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alex",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      position: { top: "10%", right: "20%" },
      delay: 0
    },
    {
      id: 2,
      name: "Sarah",
      role: "UI/UX Designer", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face",
      position: { top: "25%", right: "45%" },
      delay: 0.2
    },
    {
      id: 3,
      name: "Bob",
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      position: { top: "45%", right: "15%" },
      delay: 0.4
    },
    {
      id: 4,
      name: "Emma",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
      position: { bottom: "15%", right: "35%" },
      delay: 0.6
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate scroll progress through this section
        const scrollStart = windowHeight;
        const scrollEnd = -sectionHeight + windowHeight * 0.3;
        const progress = Math.max(0, Math.min(1, (scrollStart - sectionTop) / (scrollStart - scrollEnd)));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Add some space before the team section for scrolling */}
      {/* <div className="h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Scroll down to see our team</h2>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div> */}

      {/* Team Section */}
      <section 
        ref={sectionRef}
        className="min-h-screen bg-gradient-to-br from-gray-600 via-black to-gray-800 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
          <div className="absolute top-1/3 right-10 w-20 h-20 bg-white rounded-full blur-md"></div>
        </div>

        <div className="relative z-10 px-8 py-20 lg:px-16">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              WE'VE BUILT 75+ PROJECTS TOGETHER
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Meet Our Team<br />
                That Delivers<br />
                Your Results
              </h1>
              
              <p className="text-xl text-purple-100 leading-relaxed max-w-lg">
                Our architects, designers, and engineers work together to turn your ideas into powerful 
                software. We use agile methods and clear communication to deliver fast, high-quality results. 
                From concept to ongoing support, we're committed to your success.
              </p>
            </div>

            {/* Right Side - Team Photos */}
            <div className="relative h-96 lg:h-[600px]">
              {teamMembers.map((member, index) => {
                const shouldShow = scrollProgress > member.delay;
                const memberProgress = Math.max(0, Math.min(1, (scrollProgress - member.delay) / 0.3));
                
                return (
                  <div
                    key={member.id}
                    className="absolute transition-all duration-1000 ease-out"
                    style={{
                      ...member.position,
                      transform: `translateY(${shouldShow ? 0 : 50}px) rotate(${shouldShow ? (index % 2 === 0 ? -8 : 8) : 0}deg) scale(${shouldShow ? 1 : 0.8})`,
                      opacity: memberProgress,
                      zIndex: teamMembers.length - index
                    }}
                  >
                    {/* Polaroid-style photo */}
                    <div className="bg-white p-4 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <div className="relative overflow-hidden rounded-md">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-40 lg:w-40 lg:h-48 object-cover"
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Name and role */}
                      <div className="mt-3 text-center">
                        <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
                        <p className="text-gray-500 text-sm font-medium">{member.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Floating elements */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl transition-all duration-1000"
                style={{
                  transform: `scale(${scrollProgress}) rotate(${scrollProgress * 360}deg)`,
                  opacity: scrollProgress * 0.6
                }}
              ></div>
              
              <div 
                className="absolute bottom-10 left-0 w-12 h-12 bg-pink-400/20 rounded-full blur-lg transition-all duration-1000"
                style={{
                  transform: `scale(${scrollProgress}) rotate(${-scrollProgress * 180}deg)`,
                  opacity: scrollProgress * 0.4
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* Additional content for more scrolling */}
      {/* <div className="h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to work with us?</h2>
          <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default TeamSection;