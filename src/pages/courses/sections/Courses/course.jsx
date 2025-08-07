import React from "react";

const Courses1 = () => {
  const items = [
    {
      image:
        "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/03/What-is-the-Difference-Between-Sales-and-Marekting-1.jpg.webp",
      pills: ["2 Months Intensive Training", "Offline Classroom", "Sales Simulations"],
      heading: "Foundation Training",
      description:
        "Kickstart your journey with 2 months of offline, high-intensity classroom training — 3-4 days a week. Experience real-time sales call breakdowns, live simulations, high-pressure challenge days, and continuous progress tracking with peer learning.",
      link: "https://www.hustlify.in/sales-program"
    },
    {
      image:
        "https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM=",
      pills: ["2 Months Internship", "CRM Tools", "Inbound & Outbound Sales"],
      heading: "Real Internship",
      description:
        "Work directly with real companies for 2 months and gain hands-on experience in inbound and outbound selling. Learn to manage pipelines, handle leads, and track sales using CRM tools. Get weekly reviews and real-time feedback.",
      link: "https://www.hustlify.in/sales-program"
    },
    {
      image:
        "https://backend.glnk.com/storage/blog-image/Sales-Hack-How-to-Grow-Business-with-Steady-Sales-Flow-guest-post-1.jpeg",
      pills: ["High-Ticket Sales", "Buyer Psychology", "Premium Product Positioning"],
      heading: "What You’ll Master",
      description:
        "Understand how to sell products and services worth ₹50K+. Learn buyer behavior in premium markets, psychological triggers that influence decisions, urgency creation, and value stacking for maximum impact.",
      link: "https://www.hustlify.in/sales-program"
    },
    {
      image:
        "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg",
      pills: ["Inbound vs Outbound", "Closer’s Protocol", "Mock Deals & Objection Handling"],
      heading: "The Closer’s Protocol",
      description:
        "Master Hustlify’s Closing Framework — from 'Hello' to 'Paid'. Build confidence in sales conversations, learn to handle objections effectively, and practice with mock deals and real-time simulations.",
      link: "https://www.hustlify.in/sales-program"
    }
  ];

  return (
    <div className="bg-black text-white pb-16">
      {/* Heading */}
      <div className="text-center pt-16 pb-10 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Program Structure
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Explore how our sales program is structured for immersive learning and real-world mastery.
        </p>
      </div>

      {/* Scroll Cards */}
      <div className="h-[400vh] relative">
        {items.map((item, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen w-full flex items-center justify-center px-4"
          >
            <div className="max-w-6xl w-full bg-[#111111] rounded-3xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col md:flex-row gap-6 p-6 md:p-12">
              {/* Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.pills.map((pill, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-xs md:text-sm px-3 py-1 rounded-full border border-gray-600"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {item.heading}
                </h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses1;
