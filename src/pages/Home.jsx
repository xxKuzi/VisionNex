import React from "react";
import SEO from "../components/SEO";
import Reason from "../components/Home_Reason";
import Introduction from "../components/Home_Introduction";
import InterestingFact from "../components/InterestingFact";

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VisionNex",
    "url": "https://visionnex.cz/",
    "description": "VisionNex transforms what visually impaired individuals see into clear audio descriptions.",
    "publisher": {
      "@type": "Organization",
      "name": "VisionNex",
      "logo": "https://visionnex.cz/logo%20rounded.png"
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-20 relative w-full">
      <SEO
        title="VisionNex - Vision to Your Ears | AI Assistive Glasses for Visually Impaired"
        description="VisionNex transforms visual input into clear audio descriptions. Advanced camera smart glasses for independence and visual accessibility."
        keywords="VisionNex, assistive technology, smart glasses, audio description for blind, visual impairment, AI glasses, Czech innovation"
        canonical="https://visionnex.cz/"
        jsonLd={homeJsonLd}
      />
      <InterestingFact />
      <Introduction />
      <Reason />
    </div>
  );
}
