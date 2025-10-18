import React from 'react';
import { Helmet } from 'react-helmet';
import AboutSection from './Components/AboutHero';
import MeetOurTeam from './Components/MeetOurTeam';
import AboutContent from './Components/AboutContent';
import MissionVision from './Components/vision';

function About() {
  return (
    <div>
      <Helmet>
        {/* Page Title & Meta */}
        <title>About Hustlify | Best Sales Training Institute in Calicut, Kerala</title>
        <meta
          name="description"
          content="Hustlify is the top-rated Sales Training Institute in Calicut, Kerala. Learn high-ticket closing, advanced sales techniques, and get guaranteed job placement with our 4-month practical training program."
        />
        <meta
          name="keywords"
          content="Sales Training Institute in Calicut, Best Sales Training in Kerala, Hustlify Institute, High-Ticket Closing Course, Sales Training with Job Placement, Sales Course Calicut"
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

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* ✅ Combined JSON-LD for LocalBusiness + FAQPage */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "name": "Hustlify Institute",
                  "image": "https://www.hustlify.in/images/hustlify-banner.jpg",
                  "url": "https://www.hustlify.in",
                  "telephone": "+91-9048644333",
                  "priceRange": "₹10,000,
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "7th Floor, HiLITE Business Park, Palazhi",
                    "addressLocality": "Calicut",
                    "addressRegion": "Kerala",
                    "postalCode": "673014",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "11.2560",
                    "longitude": "75.7765"
                  },
                  "openingHours": "Mo-Sa 10:00-18:00",
                  "sameAs": [
                    "https://www.facebook.com/hustlify",
                    "https://www.instagram.com/hustlify",
                    "https://www.linkedin.com/company/hustlify"
                  ]
                },
                {
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
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Page Sections */}
      <AboutSection />
      <MissionVision />
      <MeetOurTeam />
      <AboutContent />
    </div>
  );
}

export default About;
