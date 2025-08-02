import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    count: 6,
    suffix: "mo",
    title: "Training Program",
    description: "Develop sales, marketing, and growth skills in 6 months.",
  },
  {
    id: 2,
    count: 1500,
    suffix: "+",
    title: "Qualified Leads",
    description: "Learn lead generation & close high-value clients.",
  },
  {
    id: 3,
    count: 500,
    suffix: "+",
    title: "Client Interactions",
    description: "Master communication and client relationship building.",
  },
  {
    id: 4,
    count: 250,
    suffix: "+",
    title: "Business Projects",
    description: "Apply strategies on real-world growth projects.",
  },
];

const HustlifyStats = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 rounded-4xl">
      <h2 className="text-4xl font-[poppins] md:text-5xl font-bold text-center text-black mb-12">
        Our Numbers Speak <br className="hidden md:block" /> For Themselves
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-gray-100 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{stat.description}</p>
            <p className="text-4xl font-extrabold text-black">
              <CountUp end={stat.count} duration={6} suffix={stat.suffix} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HustlifyStats;
