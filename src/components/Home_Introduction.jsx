import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useData } from "../parts/Memory";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import Card from "./Home_Card";
gsap.registerPlugin(ScrollTrigger);

export default function Home_hello() {
  const { windowSize } = useData();
  useEffect(() => {
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });
    if (windowSize === 5) {
      return;
    }

    setTimeout(() => {
      gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 200 }, // Start state
        {
          opacity: 1,
          stagger: 0.3,
          y: 0, // End state
          duration: 1,
        }
      );

      gsap.fromTo(
        ".image",
        { opacity: 0 }, // Start state
        {
          opacity: 1,
          delay: 1,

          duration: 2,
          onComplete: () => {
            gsap.to(
              ".image",

              { opacity: 1, duration: 1 }
            );
          },
        }
      );

      // {
      //   windowSize === 0 &&
      //     gsap.fromTo(
      //       ".moving",
      //       { opacity: 1, y: 0 }, // Start state
      //       {
      //         opacity: 1,
      //         y: 800,
      //         scrollTrigger: {
      //           trigger: ".moving",
      //           start: "top 30%", // When the top of the box reaches 50% of the viewport
      //           end: "bottom -70%", // Can tweak this for the exact timing you want
      //           scrub: true,
      //         },
      //       }
      //     );
      // }

      // {
      //   windowSize === 1 &&
      //     gsap.fromTo(
      //       ".moving",
      //       { opacity: 1, y: 0 }, // Start state
      //       {
      //         opacity: 1,
      //         y: 850,
      //         scrollTrigger: {
      //           trigger: ".moving",
      //           start: "top 40%", // When the top of the box reaches 50% of the viewport
      //           end: "bottom -1000px ", // Can tweak this for the exact timing you want
      //           scrub: true,
      //         },
      //       }
      //     );
      // }

      {
        windowSize === 2 &&
          gsap.fromTo(
            ".moving",
            { opacity: 1, y: 0 }, // Start state
            {
              opacity: 1,
              y: 850,
              scrollTrigger: {
                trigger: ".moving",
                start: "top 40%", // When the top of the box reaches 50% of the viewport
                end: "bottom -1000px ", // Can tweak this for the exact timing you want
                scrub: true,
              },
            }
          );
      }

      {
        windowSize === 0 &&
          gsap.fromTo(
            ".card",
            { opacity: 0, y: -1000 }, // Start state
            {
              opacity: 1,
              y: -300,
              scrollTrigger: {
                trigger: ".wall",
                start: "top 30%", // When the top of the box reaches 50% of the viewport
                end: "bottom 10%", // Can tweak this for the exact timing you want
                scrub: true,
              },
            }
          );
      }

      {
        windowSize === 1 &&
          gsap.fromTo(
            ".card",
            { opacity: 0, y: -500 }, // Start state
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: ".wall",
                start: "top 0%", // When the top of the box reaches 50% of the viewport
                end: "bottom 10%", // Can tweak this for the exact timing you want
                scrub: true,
              },
            }
          );
      }

      {
        windowSize === 2 &&
          gsap.fromTo(
            ".card",
            { opacity: 0, y: -500 }, // Start state
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: ".wall",
                start: "top 0%", // When the top of the box reaches 50% of the viewport
                end: "bottom 10%", // Can tweak this for the exact timing you want
                scrub: true,
              },
            }
          );
      }

      gsap.fromTo(
        ".text",
        { opacity: 0 }, // Start state
        {
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".text",
            start: "top 30%", // When the top of the box reaches 50% of the viewport
          },
        }
      );
    }, 200);
  }, [windowSize]);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="bg-gradient-to-b from-black to-white w-full flex flex-col items-center">
        <div className="opacity-0 moving relative flex flex-col  md:mt-[200px] justify-center items-start">
          <div className="h-[100px]"></div>
          <p className=" opacity-0 text-8xl md:text-[220px] text-left reveal">
            Hi
          </p>
          <p className="opacity-0 lg:mt-6 text-4xl md:text-6xl lg:text-7xl ml-1 md:ml-[6px] lg:ml-3 reveal">
            We are
          </p>
          <div className="lg:w-[500px] md:w-[400px] w-[300px]"></div>

          <img
            className="absolute  opacity-0 lg:h-[170px] h-[110px] -right-[35px] lg:-right-[100px] image bottom-[165px]" //opacity-0 -left-5 image
            style={{ opacity: 0 }}
            src="logo nobg.png"
          />
          <div className="h-[200px]"></div>
        </div>
      </div>

      <div className="wall flex flex-col items-center justify-center w-full lg:mt-32 mt-64">
        <div className="w-full bg-gradient-to-b h-[400px] z-30 from-blue-500 to-white flex flex-col items-center justify-center"></div>
        <div className=" bg-white  w-full z-10 h-[400px]"></div>
      </div>
      <Card />
    </div>
  );
}

function Card() {
  const { windowSize } = useData();
  return (
    <div className="card z-20">
      {windowSize === 0 && (
        <div className="border-2 mt-64 rounded-xl w-[50vw] flex px-6 py-4 flex-col justify-center items-center">
          <img src="glasses.png" className="w-[30vw]" />
          <p className="mt-4 text-7xl text">Vision Nexes</p>
          <p className="mt-4 text">Our latest product</p>
          <a href="/product">
            <button className="text text-[15px] text-lg button__small mt-4 button__positive">
              Learn more
            </button>
          </a>
        </div>
      )}

      {windowSize !== 0 && (
        <div className="border-2 rounded-xl w-[85vw] flex px-6 py-4 flex-col justify-center items-center">
          <img src="glasses.png" className="w-[60vw]" />
          <p className="mt-4 text-4xl md:text-7xl">Vision Nexes</p>
          <p className="mt-4 md:text-xl">Our latest product</p>
          <a href="/product">
            <button className="button__extraSmall md:button__small md:text-xl text-[15px] mt-4 button__positive">
              Learn more
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
