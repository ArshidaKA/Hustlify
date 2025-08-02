
import { GoArrowDownLeft } from "react-icons/go";
import "./courses.css"

export const MobWorkSection = () => {
  const items = [
    {
      image: "",
      pills: ["Skymark", "Wilmouont"],
      heading: "Hacien",
      description:
        "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging, and marketing assets as well as 3D renders of their signature bottles.",
      link: "https://www.phunk.co.uk/work/hacien",
    },
    {
      image: "",
      pills: ["Splash Screens", "Illustrations"],
      heading: "Mobilleo",
      description:
        "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees.  The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",
      link: "https://www.phunk.co.uk/work/mobillio",
    },
    {
      image: "",
      pills: ["Webflow Development", "UI/UX Design"],
      heading: "Mannson Freight",
      description:
        "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
      link: "https://www.phunk.co.uk/work/mannson-freight",
    },
    {
      image: "",
      pills: ["Webflow Development", "UI/UX Design"],
      heading: "BOX iQ",
      description:
        "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
      link: "https://www.phunk.co.uk/work/box-iq",
    },
    {
      image: "",
      pills: ["Webflow Development", "Visual Identity"],
      heading: "The Honest Watch Dealer",
      description:
        "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
      link: "https://www.phunk.co.uk/work/honest-watch-dealer",
    },
  ];

  return (
    <div className="mob-work-section">
      <div className="mob-work-section__header-container">
        <h1 className="mob-work-section__title">Dive into the work.</h1>
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
              <div style={{ color: "white" }}>See full case study</div>
              <div className="work-section__icon">
                <GoArrowDownLeft />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};