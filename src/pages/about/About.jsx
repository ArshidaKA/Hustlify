import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from './Components/AboutHero';
import MeetOurTeam from './Components/MeetOurTeam';
import AboutContent from './Components/AboutContent';
import MissionVision from './Components/vision';

function About() {
  return (
    <div>
      <Helmet>
        <title>About Hustlify | Leading Sales Training Programs in India</title>
        <meta
          name="description"
          content="Learn about Hustlify Institute, a leader in sales training programs in India. Meet our team, explore our mission, and discover how we help students master high-ticket closing and secure job placements."
        />
        <meta
          name="keywords"
          content="Sales Training Programs in India, Hustlify Institute, high-ticket closing, sales training with job placement, sales institute India"
        />
        <link rel="canonical" href="https://www.hustlify.in/about-us" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="About Hustlify | Sales Training Experts in India" />
        <meta
          property="og:description"
          content="Meet the team behind Hustlify – India’s leading institute for sales training and high-ticket closing with job placement support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hustlify.in/about-us" />
        <meta property="og:image" content="https://www.hustlify.in/images/hustlify-banner.jpg" />

        {/* SEO Crawling */}
        <meta name="robots" content="index, follow" />

        {/* FAQ Schema JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Hustlify?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hustlify is a sales training institute in Calicut, India, offering high-ticket closing courses and job placement support for students."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is the founder of Hustlify?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hustlify was co-founded by Sarang P, Adish Vinayk PV, Midhun Raj, and Adhil — experienced sales mentors passionate about high-ticket closing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Hustlify located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hustlify is located at HiLITE Business Park, Palazhi, Calicut, Kerala, India."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <AboutSection />
      <MissionVision />
      <MeetOurTeam />
      <AboutContent />
    </div>
  );
}

export default About;
