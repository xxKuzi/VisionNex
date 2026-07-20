import React, { useRef, useEffect } from "react";
import SEO from "../components/SEO";
import Introduction from "../components/Product_Introduction";
import Cards from "../components/Product_Cards";
import Components from "../components/Product_Components";
import Model from "../components/Product_Model";
import Carousel from "../components/Product_Carousel";
import Description from "../components/Product_Description";

import { useData } from "../parts/Memory";

export default function Product() {
  const { data } = useData();
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (window.scrollY <= 150) {
        smoothScrollTo(sectionRef.current, 1000);
      }
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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VisionNex Smart Glasses",
    "image": "https://visionnex.cz/glasses.webp",
    "description": "Camera-based audio description device that transforms visual information into clear speech for enhanced independence.",
    "brand": {
      "@type": "Brand",
      "name": "VisionNex"
    },
    "category": "Assistive Technology",
    "url": "https://visionnex.cz/product"
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <SEO
        title="VisionNex Glasses - Product Specs, Features & 3D Model"
        description="Explore the VisionNex smart audio glasses. High-performance camera sensors, long battery life, USB-C charging, and intelligent voice description."
        keywords="VisionNex product, smart glasses features, assistive audio device specs, camera glasses for blind, USB-C smart glasses"
        canonical="https://visionnex.cz/product"
        jsonLd={productJsonLd}
      />
      <div className="flex flex-col items-center justify-center">
        <Components />
        <section ref={sectionRef}>
          <Introduction />
        </section>

        <Model version={"15.3"} />
        <Description />
        <Carousel data={data.product} />
      </div>
    </div>
  );
}
