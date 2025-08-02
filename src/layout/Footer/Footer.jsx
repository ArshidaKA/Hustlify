import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-black text-white pb-10 px-4 text-center">
      <div className="flex justify-center gap-5 mb-6">
        <FooterIcon
          Icon={FaFacebookF}
          link="https://www.facebook.com/share/1B1cP8rrrL/"
        />
        <FooterIcon
          Icon={FaInstagram}
          link="https://www.instagram.com/hustlify.in?igsh=MWFjZHVsNG04NWgw"
        />
        <FooterIcon
          Icon={FaLinkedinIn}
          link="https://www.linkedin.com/company/talkease-co?trk=experience-timeline"
        />
        <FooterIcon
          Icon={FaYoutube}
          link="https://youtube.com/@hustlify_in?si=k5JwGDvEuR8Krl4d"
        />
      </div>
      <p className="text-sm text-white/90">
        Copyright © 2025 <span className="font-semibold">Hustlify</span>, Ltd. All Rights Reserved.
      </p>
    </footer>
  );
};

const FooterIcon = ({ Icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black rounded-full p-3 hover:scale-110 transition"
  >
    <Icon size={18} />
  </a>
);

export default Footer;
