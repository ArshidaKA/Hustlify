import React from 'react';
import { Helmet } from 'react-helmet';
import AboutSection from './Components/AboutHero';
import MeetOurTeam from './Components/MeetOurTeam';
import AboutContent from './Components/AboutContent';
import MissionVision from './Components/vision';

function AboutContent() {
  return (
    <section className="py-12 px-4 md:px-12 max-w-5xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        About Hustlify – Best Sales Training Institute in Calicut, Kerala
      </h1>

      <p className="mb-6 text-lg">
        <strong>Hustlify Institute</strong> is a leading{" "}
        <strong>Sales Training Institute in Calicut</strong> dedicated to
        helping individuals master the art of selling and communication. Based
        in HiLITE Business Park, Calicut, Kerala — Hustlify offers India’s most
        practical and result-driven{" "}
        <strong>sales training program</strong> designed for students,
        professionals, and entrepreneurs who want to build a successful career
        in sales.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Mission – Empowering the Next Generation of Sales Professionals
      </h2>
      <p className="mb-6">
        Our mission is simple — to create confident, result-oriented sales
        professionals who can close high-value deals and achieve financial
        freedom. Through our{" "}
        <strong>4-month practical sales training program</strong>, we combine
        classroom learning with live sales practice, mock calls, and one-on-one
        mentorship.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Why Choose Hustlify in Calicut?
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Practical Sales Training:</strong> 80% of our sessions are
          focused on real-world practice, not theory.
        </li>
        <li>
          <strong>High-Ticket Closing:</strong> Learn to close deals worth ₹50K+
          with confidence and strategy.
        </li>
        <li>
          <strong>Guaranteed Placement Support:</strong> You only pay after you
          secure a job in sales — that’s our promise.
        </li>
        <li>
          <strong>Experienced Mentors:</strong> Get trained by industry experts
          with years of sales and business experience.
        </li>
        <li>
          <strong>Strong Network:</strong> Join a growing community of
          sales-driven individuals across Kerala and India.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Founders and Team
      </h2>
      <p className="mb-6">
        Hustlify was founded by <strong>Sarang P</strong>,{" "}
        <strong>Adish Vinayk PV</strong>, <strong>Midhun Raj</strong>, and{" "}
        <strong>Adhil</strong> — four passionate sales mentors who turned their
        experience in high-ticket closing into a mission to uplift young talent.
        Their hands-on approach and proven strategies have helped hundreds of
        students become confident, skilled, and employable professionals.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Join Kerala’s No.1 Sales Training Institute
      </h2>
      <p className="mb-6">
        Whether you’re a fresher looking for your first job or a working
        professional aiming for career growth, Hustlify helps you level up with
        expert-led, practical training. Our program focuses on{" "}
        <strong>sales psychology, communication, high-ticket closing, and
        real-world sales execution</strong>.
      </p>

      <p className="text-lg font-medium mt-6">
        Visit us at HiLITE Business Park, Calicut, Kerala — or call{" "}
        <a
          href="tel:+919048644333"
          className="text-blue-600 underline hover:text-blue-800"
        >
          +91 90486 44333
        </a>{" "}
        to learn more about Kerala’s best{" "}
        <strong>Sales Training Institute in Calicut</strong>.
      </p>
    </section>
  );
}

export default AboutContent;
