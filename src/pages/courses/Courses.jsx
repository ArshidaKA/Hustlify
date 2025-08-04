import React from 'react';
import HustlifyHero from './sections/CourseHero';
import HustlifyBenefits from './sections/Benifit';
import Testimonials from '../Home/sections/Testimonials';
import {  PopularCourses } from './sections/Courses/course';
import { ParallaxProvider } from 'react-scroll-parallax';
import HustlifyWelcome from './sections/join';
import SalesCardsSection from '../Home/sections/SalesCard';
import { Timeline } from '../../components/ui/timeline';
import { MobWorkSection } from './sections/Courses/courseMob';

function Courses() {
const hustlifyTimeline = [
  {
    title: "Idea Sparked",
    image: "https://www.betterteam.com/images/sales-manager-job-description-6000x4000-20201128.jpeg?crop=40:21,smart&width=1200&dpr=2&format=pjpg&auto=webp&quality=85&format=jpg&quality=85",
    content: (
      <p className="text-gray-200">
        Hustlify was born out of a need to empower individuals with actionable sales knowledge. The idea was to combine mentorship, digital tools, and a vibrant community to help closers scale their impact.
      </p>
    ),
  },
  {
    title: "Masterclass Launched",
    image: "https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM=",
    content: (
      <p className="text-gray-200">
        We launched our first Sales Masterclass, helping hundreds of participants gain real-world insights, confidence, and improved closing rates through live sessions and downloadable frameworks.
      </p>
    ),
  },
  {
    title: "Community Building",
    image: "",
    content: (
      <p className="text-gray-200">
        A Discord and WhatsApp community emerged from our events. Sales closers began collaborating, sharing wins, and referring deals to each other. Hustlify became more than a platform — it became a movement.
      </p>
    ),
  },
  {
    title: "Beyond Sales",
    image: "https://connectionsny.com/media/video_posters/sales.jpg",
    content: (
      <p className="text-gray-200">
        We started offering workshops on branding, personal funnels, and high-ticket offers — helping closers not just sell, but build their own legacy.
      </p>
    ),
  },
  {
    title: "Future Vision",
    image: "",
    content: (
      <p className="text-gray-200">
        Hustlify is scaling into a full-fledged platform offering tailored tools for closers — think pitch builders, AI outreach, and certified growth tracks.
      </p>
    ),
  },
];



const isMobile = window.innerWidth < 768;
  return (
    <ParallaxProvider>
      <HustlifyHero />

       {isMobile?<MobWorkSection/>:<PopularCourses />}
      <SalesCardsSection/>
      <Timeline data={hustlifyTimeline} />
      
      <HustlifyBenefits />
      <HustlifyWelcome/>
    </ParallaxProvider>
  );
}

export default Courses;
