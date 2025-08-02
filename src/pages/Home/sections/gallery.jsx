import React from "react";

const servicesData = [
  {
    title: "Sales Mastery",
    description: "Learn proven techniques to close more deals with confidence and clarity.",
    image: "https://www.quotapath.com/wp-content/uploads/blog_why-sales_header_730x414.webp",
  },
  {
    title: "Objection Handling",
    description: "Master the art of diffusing objections using Hustlify’s 3-step strategy.",
    image: "https://fekrait.com/uploads/media/files/shares/zkiah/sales-forecast-the-golden-rules-for%E2%80%AFalignment-with-your-revenue-forecast.jpg",
  },
  {
    title: "Pitch Like a Pro",
    description: "Craft powerful, persuasive pitches that convert every time.",
    image: "https://images.contentstack.io/v3/assets/blte891c850d5781579/blt392ff32c4d7d7866/655d319175391100bfd03b19/Sales-interview-tips.jpg",
  },
  
  {
    title: "Personal Branding",
    description: "Build a strong personal brand that attracts clients and opportunities.",
    image: "https://www.lystloc.com/blog/wp-content/uploads/2023/02/webpd.webp",
  },
  {
    title: "Growth Hacking",
    description: "Explore out-of-the-box tactics to grow your business exponentially.",
    image: "https://fekrait.com/uploads/media/files/shares/zkiah/sales-forecast-the-golden-rules-for%E2%80%AFalignment-with-your-revenue-forecast.jpg",
  },
  {
    title: "Hustler’s Mindset",
    description: "Cultivate the discipline, drive, and mindset to win in any market.",
    image: "https://blogcdn.gmass.co/blog/wp-content/uploads/2021/06/Featured-image-sales-team-guide-178kb.png",
  },
];

const Services = () => {
  return (
    <div className="w-full px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        {/* <h1 className="text-4xl font-bold mb-2">What You’ll Master with Hustlify</h1> */}
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our signature offerings designed to level up your sales game.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide -mx-4 px-4">
        <div className="flex gap-4 w-max pointer-events-auto">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative w-[270px] h-[380px] flex items-end rounded-2xl overflow-hidden bg-cover bg-center shrink-0 group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
              <div className="relative z-10 w-full h-full flex flex-col justify-end p-5 text-white transition-all duration-300 pointer-events-auto">
                <h3 className="text-lg font-semibold mb-2 transform transition-transform group-hover:-translate-y-6">
                  {service.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-[-0.5rem] transition-all duration-500 ease-in-out touch:opacity-100 touch:translate-y-[-0.5rem]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
