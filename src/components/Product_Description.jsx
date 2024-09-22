import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useData } from "../parts/Memory";
gsap.registerPlugin(ScrollTrigger);

export default function Product_Description() {
  const { windowSize } = useData();
  useEffect(() => {
    if (windowSize === 5) {
      return;
    }
    gsap.fromTo(
      ".headline",
      { opacity: 0, x: -200 },
      {
        opacity: 1,

        x: windowSize === 0 ? 40 : 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".headline",
          toggleActions: "restart reverse restart reverse",
          start: "top 80%",
        },
      }
    );

    gsap.utils.toArray(".text").forEach((textElement) => {
      gsap.fromTo(
        textElement,
        { opacity: 0 }, // Start state
        {
          opacity: 1,
          delay: 0.5,
          duration: 2,
          scrollTrigger: {
            trigger: textElement,
            toggleActions: "restart none none none",
            start: "top 80%",

            onLeaveBack: () => gsap.to(textElement, { opacity: 0 }), // Optional: hide when scrolling back up
          },
        }
      );
    });
  }, [windowSize]);
  return (
    <div className="flex flex-col items-center justify-center">
      {windowSize !== 2 && (
        <div className="flex flex-col items-center justify-center">
          <div className="w-[85vw] flex flex-col items-start">
            <p className="ml-1 text-lg ">Principle</p>
            <p className="text-7xl mb-16">How it works?</p>
          </div>
          <div className="flex max-w-[90vw] flex-col justify-center items-center md:py-8 md:px-8 lg:py-16 lg:px-32 border-2 border-gray-200 duration-500 hover:border-brand rounded-xl">
            <p className="headline text-7xl">Vision to your ears</p>
            <div className="flex items-center mt-16 justify-center gap-4">
              <div className="flex flex-col items-center justify-center">
                <img className="rounded-xl" src="glasses vision.jpg " />
                <p className="text mt-6 text-xl text-center">
                  Capture reality through a camera
                </p>
              </div>
              <img className="h-32" src="arrow.png" />
              <div className="flex flex-col items-center justify-center">
                <img className="w-64 rounded-xl" src="headphones.jpg" />
                <p className="text mt-6 text-xl text-center">
                  Play the description in the headphones
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {windowSize === 2 && (
        <div className="flex flex-col items-center justify-center">
          <div className="w-[85vw] flex flex-col items-start">
            <p className="ml-1 text-lg ">Principle</p>
            <p className="text-5xl mb-12">How it works?</p>
          </div>
          <div className="flex flex-col justify-center items-center border-2 px-4 py-6 border-gray-200 duration-500 hover:border-brand rounded-xl">
            <p className="headline text-4xl font-semibold text-center w-[80vw]">
              Vision to your ears
            </p>
            <div className="flex flex-col items-center mt-12 justify-center gap-6">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="rounded-xl w-[300px]"
                  src="glasses vision.jpg "
                />
                <p className="text mt-2 text-lg text-center">
                  Capture reality through a camera
                </p>
              </div>
              <img className="h-32 rotate-90" src="arrow.png" />
              <div className="flex flex-col items-center justify-center">
                <img className="w-64 rounded-xl" src="headphones.jpg" />
                <p className="text mt-6 text-lg text-center">
                  Play the description in the headphones
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
