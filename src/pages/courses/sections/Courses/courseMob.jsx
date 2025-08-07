
import { GoArrowDownLeft } from "react-icons/go";
import "./courses.css"

export const MobWorkSection = () => {tjohm
  const items = [
  {
    image: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/03/What-is-the-Difference-Between-Sales-and-Marekting-1.jpg.webp",
    pills: ["2 Months Intensive Training", "Offline Classroom", "Sales Simulations"],
    heading: "",
    description:
      "Kickstart your journey with 2 months of offline, high-intensity classroom training — 3-4 days a week. Experience real-time sales call breakdowns, live simulations, high-pressure challenge days, and continuous progress tracking with peer learning.",
    link: "https://www.hustlify.in/sales-program", // Replace with actual link if available
  },
  {
    image: "https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM=",
    pills: ["2 Months Internship", "CRM Tools", "Inbound & Outbound Sales"],
    heading: "Real Internship",
    description:
      "Work directly with real companies for 2 months and gain hands-on experience in inbound and outbound selling. Learn to manage pipelines, handle leads, and track sales using CRM tools. Get weekly reviews and real-time feedback.",
    link: "https://www.hustlify.in/sales-program",
  },
  {
    image: "https://backend.glnk.com/storage/blog-image/Sales-Hack-How-to-Grow-Business-with-Steady-Sales-Flow-guest-post-1.jpeg",
    pills: ["High-Ticket Sales", "Buyer Psychology", "Premium Product Positioning"],
    heading: "What You’ll Master",
    description:
      "Understand how to sell products and services worth ₹50K+. Learn buyer behavior in premium markets, psychological triggers that influence decisions, urgency creation, and value stacking for maximum impact.",
    link: "https://www.hustlify.in/sales-program",
  },
  {
    image: "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg",
    pills: ["Inbound vs Outbound", "Closer’s Protocol", "Mock Deals & Objection Handling"],
    heading: "The Closer’s Protocol",
    description:
      "Master Hustlify’s Closing Framework — from 'Hello' to 'Paid'. Build confidence in sales conversations, learn to handle objections effectively, and practice with mock deals and real-time simulations.",
    link: "https://www.hustlify.in/sales-program",
  },
];
  return (
    <div className="mob-work-section">
      <div className="mob-work-section__header-container">
        <h1 className="mob-work-section__title">Course Structure.</h1>
      </div>

      <div className="mob-work-section__scroll-container">
        {items.map((item, index) => (
          <div key={index} className="mob-work-section__item">
            <div className="mob-work-section__item-image-container">
              <img src={item.image} alt={item.heading} />
            </div>
            <div className="mob-work-section__item-pills">
              {item.pills.map((pill, pillIndex) => (
                <div key={pillIndex} className="mob-work-section__pill-item">
                  {pill}
                </div>
              ))}
              <div>
                <h1 className="work-section__heading-style">{item.heading}</h1>
                <p
                  className="work-section__para-style"
                  style={{ color: "#696969", fontSize: "20px" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <a
              href={item.link}
              className="work-section__linktag"
              target="_blank"
              rel="noreferrer"
            >
              {/* <div style={{ color: "white" }}>See full case study</div>
              <div className="work-section__icon">
                <GoArrowDownLeft />
              </div> */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};