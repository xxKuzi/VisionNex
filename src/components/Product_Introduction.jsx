import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useData } from "../parts/Memory";

gsap.registerPlugin(ScrollTrigger);

export default function Product_Introduction() {
  const { windowSize } = useData();
  const textRef = useRef();

  useEffect(() => {
    console.log(windowSize);
  });

  const calculateText = () => {
    let height = 0;
    switch (windowSize) {
      case 0:
        height = 300;
        break;
      case 1:
        height = 300;
        break;
      case 2:
        height = 250;
        break;
    }
    console.log(height);
    return height;
  };

  useEffect(() => {
    setTimeout(() => {
      {
        windowSize === 0 &&
          gsap.to(textRef.current, {
            y: 155,
            scale: 1,
            opacity: 1,
            ease: "Power1.inOut",
            scrollTrigger: {
              trigger: textRef.current,
              start: "0px 50%", // When the top of the box hits the center of the viewport
              scrub: true, // Smooth scrubbing
            },
          });
      }
      {
        windowSize === 1 &&
          gsap.to(textRef.current, {
            y: 155,
            scale: 1,
            opacity: 1,
            ease: "Power1.inOut",
            scrollTrigger: {
              trigger: textRef.current,
              start: "0px 50%", // When the top of the box hits the center of the viewport
              scrub: true, // Smooth scrubbing
            },
          });
      }

      {
        windowSize === 2 &&
          gsap.to(textRef.current, {
            y: 250,
            scale: 1,
            opacity: 1,
            ease: "Power1.inOut",
            scrollTrigger: {
              trigger: textRef.current,
              start: "0px 50%", // When the top of the box hits the center of the viewport
              scrub: true, // Smooth scrubbing
            },
          });
      }
    }, 200); // The delay, if you need one, specify in milliseconds here (0 means no delay)

    gsap.fromTo(
      ".roll",
      { opacity: 0, y: 0 },
      {
        y: -50,
        scale: 1,
        opacity: 1,
        ease: "Power1.inOut",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".roll",
          toggleActions: "restart reverse restart reverse",
          markers: false,

          start: "top 70%", // When the top of the box hits the center of the viewport
        },
      }
    );
  }, [windowSize]);

  const Box = ({ w, h, tx }) => (
    <div
      className="w-32 justify-center flex flex-col items-center"
      style={{ height: `${h}px`, width: `${w}px` }}
    >
      {tx}
    </div>
  );
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col items-center justify-center h-[500px]
      "
      >
        <p
          ref={textRef}
          className={"opacity-0 scale-50 md:mt-32 md:text-9xl text-6xl"}
        >
          Vision Nexes
        </p>

        <div className="md:h-[700px] h-[300px]"></div>
        <p className="roll opacity-0 scale-75 text-lg md:text-3xl">
          our new most advanced product
        </p>
      </div>
    </div>
  );
}
