import React, { useRef, useEffect } from "react";
import Introduction from "../components/Product_Introduction";
import Cards from "../components/Product_Cards";
import Components from "../components/Product_Components";
import Model from "../components/Product_Model";
import Carousel from "../components/Product_Carousel";

import { useData } from "../parts/Memory";

export default function Product() {
  const { data } = useData();
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (window.scrollY <= 150) {
        smoothScrollTo(sectionRef.current, 1000);
      }
      0;
    }, 3000);
  }, []);

  const smoothScrollTo = (element, duration) => {
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const Box = ({ w, h, tx }) => (
    <div
      className="border-2 w-32 justify-center flex flex-col items-center"
      style={{ height: `${h}px`, width: `${w}px` }}
    >
      {tx}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <div className="flex flex-col items-center justify-center">
        <Components />
        <section ref={sectionRef}>
          <Introduction />
        </section>

        <Model version={"15.3"} />
        <Carousel data={data.product} />
      </div>
    </div>
  );
}
