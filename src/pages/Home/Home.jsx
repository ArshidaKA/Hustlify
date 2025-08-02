import React from 'react'
import Hero from './sections/Hero'
import SalesCardsSection from './sections/SalesCard'
import AnnualRecap from './sections/VEDIO.JSX'
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LjDX_WChuKths8ccpuIR1ot1L3KWRfg4Jg&s", // Replace with your actual path
    content: (
      <p className="text-neutral-600 dark:text-neutral-300">
        Hustlify was born out of a need to empower individuals with actionable sales knowledge. The idea was to combine mentorship, digital tools, and a vibrant community to help closers scale their impact.
      </p>
    ),
  },
  {
    title: "Masterclass Launched",
    image: "https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM=",
    content: (
      <p className="text-neutral-600 dark:text-neutral-300">
        We launched our first Sales Masterclass, helping hundreds of participants gain real-world insights, confidence, and improved closing rates through live sessions and downloadable frameworks.
      </p>
    ),
  },
  {
    title: "Community Building",
    image: "",
    content: (
      <p className="dark:text-neutral-300">
        A Discord and WhatsApp community emerged from our events. Sales closers began collaborating, sharing wins, and referring deals to each other. Hustlify became more than a platform — it became a movement.
      </p>
    ),
  },
  {
    title: "Beyond Sales",
    image: "https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM=",
    content: (
      <p className="text-neutral-600 dark:text-neutral-300">
        We started offering workshops on branding, personal funnels, and high-ticket offers — helping closers not just sell, but build their own legacy.
      </p>
    ),
  },
  {
    title: "Future Vision",
    image: "",
    content: (
      <p className="text-neutral-600 dark:text-neutral-300">
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
<GoogleGeminiScrollWrapper />

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