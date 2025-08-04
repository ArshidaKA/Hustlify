import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../lib/utils"; // Assuming cn is exported from utils.js or similar

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full  bg-black text-white font-sans md:px-10"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl text-gray-100">
          Hustlify Masterclass <span className="text-gray-500"> Roadmap</span>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-md">
          Follow the journey to becoming a sales closer. Here's the changelog of the masterclass milestones.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
      {data?.map((item, index) => (
  <div key={index} className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10">
    
    {/* Left: Sticky Timeline Point + Title */}
    <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
      <div className="h-10 absolute left-3 w-10 rounded-full bg-black flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
      </div>
      <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-600">
        {item.title}
      </h3>
    </div>

    {/* Right: Title (mobile), Content, Image */}
    <div className="relative pl-20 pr-4 md:pl-4 w-full">
      <h3 className="md:hidden block text-2xl mb-4 font-bold text-neutral-500">
        {item.title}
      </h3>

      <div className="text-gray-100 text-lg leading-relaxed space-y-4">
        {item.content}

        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="mt-4 w-full max-w-xl rounded-xl border border-neutral-800 shadow-lg"
          />
        )}
      </div>
    </div>
  </div>
))}


        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent mask-image-linear"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
