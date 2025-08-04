import React, { useEffect, useRef, useState } from 'react';

const HustlifyTeam = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Adhish Vinayak PV',
      role: 'Co-Founder',
      image: '/founder/adhish.jpg',
      delay: 0,
    },
    {
      id: 2,
      name: 'Sarang P',
      role: 'Co-Founder',
      image: '/founder/sarang.jpg',
      delay: 0.2,
    },
    {
      id: 3,
      name: 'Adhil',
      role: 'Co-Founder',
      image: '/founder/adhil.jpg',
      delay: 0.4,
    },
    {
      id: 4,
      name: 'Midhun Raj M',
      role: 'Co-Founder',
      image: '/founder/midhun.jpg',
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
        const progress = Math.max(
          0,
          Math.min(1, (scrollStart - sectionTop) / (scrollStart - scrollEnd))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white/10 rounded-full blur-md" />
      </div>

      {/* Section Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 bg-white/10 text-sm font-medium rounded-full backdrop-blur">
          🚀 Hustlify Team
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4">
          Meet the Team <br />
          That Makes It Happen
        </h2>
        <p className="text-gray-300 max-w-xl text-lg mt-4">
          From strategy to execution, our team combines creativity, tech, and hustle to turn your
          ideas into reality. This is Hustlify.
        </p>
      </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {teamMembers.map((member, index) => {
    const visible = scrollProgress > member.delay;
    const opacity = Math.max(0, Math.min(1, (scrollProgress - member.delay) / 0.3));
    const scale = visible ? 1 : 0.95;
    const rotate = 0; // No rotate for a cleaner look

    return (
      <div
        key={member.id}
        className="transition-all duration-700 ease-out transform hover:scale-[1.02] rounded-2xl bg-white/5 backdrop-blur-md shadow-xl overflow-hidden"
        style={{
          opacity,
          transform: `scale(${scale}) rotate(${rotate}deg)`,
        }}
      >
        <div className="flex flex-col md:flex-row items-stretch h-full">
          {/* Text Section */}
          <div className="flex-1 p-6 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
            <p className="text-sm text-yellow-300 font-medium mb-4">{member.role}</p>
            <p className="text-sm text-gray-300">
              Passionate and driven, {member.name.split(' ')[0]} brings vision, strategy, and
              hustle to Hustlify’s mission.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-contain p-5 rounded-b-2xl md:rounded-tr-none md:rounded-bl-2xl transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    );
  })}
</div>



      {/* Scroll Progress Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden mt-12">
        <div
          className="h-full bg-yellow-300 rounded-full transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HustlifyTeam;
