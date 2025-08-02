import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { GoogleGeminiEffect } from "./gemini";

const GoogleGeminiScrollWrapper = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animation range
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    useTransform(scrollYProgress, [0, 1], [0, 1]),
  ];

  return (
    <section ref={ref} className="h-[200vh] relative">
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        title="Scroll-Based SVG Animation"
        description="Watch the magic happen as you scroll!"
      />
    </section>
  );
};

export default GoogleGeminiScrollWrapper;
