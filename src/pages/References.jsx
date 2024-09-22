import React, { useEffect } from "react";
import Journey from "../components/References_Journey";
import Articles from "../components/References_Articles";
import Timeline from "../components/References_Timeline";
import Carousel from "../components/References_Carousel";
import { useData } from "../parts/Memory";

export default function References() {
  const { data, windowSize } = useData();

  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-x-hidden">
        <div className="flex flex-col w-[85vw] lg:w-[70vw] mt-8 items-start justify-center">
          <p className="ml-1">How we got there?</p>
          <p className="md:text-7xl text-5xl ">Our Journey</p>
        </div>
        <Journey data={data.journey} />
        <Timeline data={data.timeline} />

        <div className="flex flex-col w-[85vw] lg:w-[70vw] mt-[150px] items-start justify-center">
          <p>Articles</p>
          <p className="md:text-7xl text-5xl ">Wrote about us</p>
        </div>

        <Carousel data={data.articles} />
      </div>
    </div>
  );
}
