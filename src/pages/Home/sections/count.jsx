import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    count: 6,
    suffix: "mo",
    title: "Training Program",
    description: "Master sales, marketing, and growth in just 6 months.",
  },
  {
    id: 2,
    count: 1500,
    suffix: "+",
    title: "Qualified Leads",
    description: "Learn to generate and convert high-quality leads.",
  },
  {
    id: 3,
    count: 500,
    suffix: "+",
    title: "Client Interactions",
    description: "Sharpen your communication and trust-building skills.",
  },
  {
    id: 4,
    count: 250,
    suffix: "+",
    title: "Business Projects",
    description: "Work hands-on with real businesses to grow them.",
  },
];

const HustlifyStats = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`py-14 px-6 ${
            index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
          }`}
        >
          <h3 className="text-4xl font-extrabold text-gray-800 leading-tight mb-2">
            <CountUp
              end={stat.count}
              duration={4}
              decimals={stat.count % 1 !== 0 ? 1 : 0}
            />
            <span className="text-gray-500 font-bold ml-1">{stat.suffix}</span>
          </h3>
          <p className="text-sm text-gray-600 font-medium max-w-xs mx-auto leading-snug">
            {stat.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default HustlifyStats;
