import React from 'react'
import Hero from './sections/Hero'
import SalesCardsSection from './sections/SalesCard'
import AnnualRecap from './sections/vedio'
import HustlifyStats from './sections/count'
import Faq from './sections/Faq'
import TestimonialSection from './sections/Testimonials'
import ContactModal from '../../components/ContactModal'
import VideoGallery from './sections/gallery'
import SyncScrollMobile from '../../components/scrollmobile'
import { Timeline } from '../../components/ui/timeline'
import { GoogleGeminiEffect } from '../../components/ui/gemini'
import GoogleGeminiScrollWrapper from '../../components/ui/geminiwrapper'


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


function Home() {
  return (
    <div>
<Hero/>
<HustlifyStats/>
<SyncScrollMobile/>

<SalesCardsSection/>
{/* <GoogleGeminiScrollWrapper /> */}

<div className='py-16'>

<AnnualRecap/>
<VideoGallery/>

<Timeline data={hustlifyTimeline} />

{/* <TestimonialSection/> */}

</div>
<Faq/>
<ContactModal/>

    </div>
  )
}

export default Home