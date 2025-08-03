import React, { useState, useEffect, useRef } from 'react';

const HustlifyTeam = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alex",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      position: { top: "10%", left: "20%" },
      delay: 0,
    },
    {
      id: 2,
      name: "Sarah",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face",
      position: { top: "25%", left: "55%" },
      delay: 0.2,
    },
    {
      id: 3,
      name: "Bob",
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      position: { bottom: "20%", left: "15%" },
      delay: 0.4,
    },
    {
      id: 4,
      name: "Emma",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
      position: { bottom: "10%", left: "45%" },
      delay: 0.6,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        const scrollStart = windowHeight;
        const scrollEnd = -sectionHeight + windowHeight * 0.3;
        const progress = Math.max(0, Math.min(1, (scrollStart - sectionTop) / (scrollStart - scrollEnd)));

        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative bg-gradient-to-br from-gray-700 via-black to-gray-900 overflow-hidden text-white px-6 py-24 md:px-16 lg:px-28">
      {/* Background Glow Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-32 h-32 bg-white opacity-10 rounded-full blur-2xl top-10 left-10" />
        <div className="absolute w-24 h-24 bg-white opacity-10 rounded-full blur-xl bottom-20 left-1/4" />
        <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full blur-xl top-1/2 right-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-white/10 text-sm font-medium rounded-full backdrop-blur">
            🚀 Hustlify Team
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Meet the Team <br />
            That Makes It Happen
          </h2>
          <p className="text-gray-300 max-w-xl text-lg">
            From strategy to execution, our team combines creativity, tech, and hustle to turn your
            ideas into reality. This is Hustlify.
          </p>
        </div>

        {/* Right Side */}
        <div className="relative h-[500px] lg:h-[600px]">
          {teamMembers.map((member, index) => {
            const shouldShow = scrollProgress > member.delay;
            const memberProgress = Math.max(0, Math.min(1, (scrollProgress - member.delay) / 0.3));
            return (
              <div
                key={member.id}
                className="absolute transition-all duration-1000 ease-out"
                style={{
                  ...member.position,
                  transform: `translateY(${shouldShow ? 0 : 50}px) rotate(${shouldShow ? (index % 2 === 0 ? -6 : 6) : 0}deg) scale(${shouldShow ? 1 : 0.85})`,
                  opacity: memberProgress,
                  zIndex: 10 - index,
                }}
              >
                <div className="bg-white p-3 rounded-xl shadow-2xl w-32 sm:w-36 md:w-40 lg:w-44 hover:scale-105 transform transition-transform duration-300">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-40 sm:h-44 md:h-48 object-cover"
                    />
                  </div>
                  <div className="mt-2 text-center text-black">
                    <h4 className="font-semibold text-base">{member.name}</h4>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating Decorations */}
          <div
            className="absolute top-0 right-0 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl"
            style={{
              transform: `scale(${scrollProgress}) rotate(${scrollProgress * 360}deg)`,
              opacity: scrollProgress * 0.5,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-12 h-12 bg-pink-400/20 rounded-full blur-lg"
            style={{
              transform: `scale(${scrollProgress}) rotate(${-scrollProgress * 180}deg)`,
              opacity: scrollProgress * 0.4,
            }}
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HustlifyTeam;
