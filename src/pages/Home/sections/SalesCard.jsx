import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const cards = [
  {
    title: "Introducing High-Ticket Sales",
    text: "Understand what makes ₹50K+ products/services sell. Learn buyer behavior in premium markets and unlock the world of premium clients.",
    btn: "Master High-Ticket Selling",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Foundation of Sales",
    text: "Master rapport building, trust, and persuasion. Get the exact structure of effective conversations that convert leads into loyal customers.",
    btn: "Learn Sales Psychology",
    img: "https://assets.entrepreneur.com/content/3x2/2000/20180713183338-GettyImages-881542122.jpeg",
  },
  {
    title: "Practice with Real Feedback",
    text: "Train with mock deals and get real-time feedback. Build muscle memory and real confidence in every conversation.",
    btn: "Start Training Now",
    img: "https://sitescdn.wearevennture.co.uk/public/paretousa/mediahub/sales%20training-deb753bf-888c-4d37-8db6-85a0c56e3761.jpg",
  },
];

const SalesCardsSection = () => {
  return (
    <div className="bg-transparent text-white py-20 px-4 md:px-28 font-sans relative z-10">
      <div className="mb-16 max-w-3xl ">
        <h2 className="text-slate-100 text-4xl md:text-6xl mb-4 font-bold leading-tight font-[Poppins]">
          What You’ll Master <br/> at  <span className="text-gray-400">Hustlify?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          A revolutionary sales training program built for those who are tired of watching life from the sidelines.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-white/5 backdrop-blur-md rounded-xl border border-gray-600/30 shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-slate-200 mb-2 uppercase">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm flex-1">{card.text}</p>
              <button className="mt-6 bg-gradient-to-r from-gray-300 to-gray-100 text-black py-2 rounded-md font-medium hover:opacity-90 transition">
                {card.btn}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SalesCardsSection;
