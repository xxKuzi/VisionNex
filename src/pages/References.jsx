import React from "react";
import SEO from "../components/SEO";
import Journey from "../components/References_Journey";
import Articles from "../components/References_Articles";
import Timeline from "../components/References_Timeline";
import Carousel from "../components/References_Carousel";
import { useData } from "../parts/Memory";

export default function References() {
  const { data } = useData();

  const referencesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "VisionNex Press & Media References",
    "description": "Media articles, European awards, and press coverage of VisionNex smart assistive glasses.",
    "url": "https://visionnex.cz/references"
  };

  return (
    <div>
      <SEO
        title="VisionNex Media References - Press Coverage, Awards & SFT European Winners"
        description="Discover how VisionNex won Samsung Solve for Tomorrow Europe, featured on ČT24, Aktuality.sk, Samsung Newsroom, and Czech media."
        keywords="VisionNex references, Solve for Tomorrow winner, Samsung award, ČT24 VisionNex, assistive technology news, Czech tech startup"
        canonical="https://visionnex.cz/references"
        jsonLd={referencesJsonLd}
      />
      <div className="flex flex-col items-center justify-center overflow-x-hidden">
        <div className="flex flex-col w-[85vw] lg:w-[70vw] mt-8 items-start justify-center">
          <p className="ml-1">How we got there?</p>
          <h1 className="md:text-7xl text-5xl font-normal">Our Journey</h1>
        </div>
        <Journey data={data.journey} />
        <Timeline data={data.timeline} />

        <div className="flex flex-col w-[85vw] lg:w-[70vw] mt-[150px] items-start justify-center">
          <p>Articles</p>
          <h2 className="md:text-7xl text-5xl font-normal">Wrote about us</h2>
        </div>

        <Carousel data={data.articles} />
      </div>
    </div>
  );
}
