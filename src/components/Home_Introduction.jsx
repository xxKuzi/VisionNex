import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useData } from "../parts/Memory";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { browserName, browserVersion } from "react-device-detect";
//import Card from "./Home_Card";
gsap.registerPlugin(ScrollTrigger);

export default function Home_hello() {
  const { windowSize } = useData();
  const [badBrowser, setBadBrowser] = useState(false);
  const cardRef = useRef(null);

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
  useEffect(() => {
    console.log(navigator.userAgent);
    console.log("browser", browserName);
    if (browserName === "Mobile Safari") {
      setBadBrowser(true);
    }
  }, [navigator]);

  const smoothScrollTo = (element, duration) => {
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 100; //-100 because of I don't have an ref to moving element
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

  useEffect(() => {
    // Early return for windowSize 5
    if (windowSize === 5) {
      return;
    }

    // Kill all existing ScrollTrigger instances to prevent conflicts
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Store timeline references for cleanup
    const timelines = [];

    // Initial reveal animation with delay
    const revealTimeout = setTimeout(() => {
      const revealTl = gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          stagger: 0.3,
          y: 0,
          duration: 1,
        }
      );
      timelines.push(revealTl);
    }, 200);

    // Image fade in animation
    const imageTl = gsap.fromTo(
      ".image",
      { opacity: 0 },
      {
        opacity: 1,
        delay: 1.2,
        duration: 2,
        onComplete: () => {
          const imageCompleteTl = gsap.to(".image", {
            opacity: 1,
            duration: 1,
          });
          timelines.push(imageCompleteTl);
        },
      }
    );
    timelines.push(imageTl);

    // Moving element animations based on windowSize
    if (windowSize === 0) {
      gsap.fromTo(
        ".moving",
        { opacity: 1, y: 0 },
        {
          opacity: 1,
          y: 800,
          scrollTrigger: {
            trigger: ".moving",
            start: "top 30%",
            end: "bottom -70%",
            scrub: true,
          },
        }
      );
    } else if (windowSize === 1) {
      gsap.fromTo(
        ".moving",
        { opacity: 1, y: 0 },
        {
          opacity: 1,
          y: 850,
          scrollTrigger: {
            trigger: ".moving",
            start: "top 40%",
            end: "bottom -1000px",
            scrub: true,
          },
        }
      );
    } else if (windowSize === 2 && !badBrowser) {
      gsap.fromTo(
        ".moving",
        { opacity: 1, y: 0 },
        {
          opacity: 1,
          y: 850,
          scrollTrigger: {
            trigger: ".moving",
            start: "top 27.5%",
            end: "bottom -1000px",
            scrub: true,
          },
        }
      );
    }

    // Card animations based on windowSize
    if (windowSize === 0) {
      gsap.fromTo(
        ".card",
        { opacity: 0, y: -700 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".wall",
            start: "top 10%",
            end: "bottom -100%",
            scrub: true,
          },
        }
      );
    } else if (windowSize === 1) {
      gsap.fromTo(
        ".card",
        { opacity: 0, y: -500 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".wall",
            start: "top 0%",
            end: "bottom 10%",
            scrub: true,
          },
        }
      );
    } else if (windowSize === 2) {
      if (badBrowser) {
        // Special animation for bad browsers
        const moveTl = gsap.fromTo(
          ".move",
          { opacity: 0, y: 150 },
          {
            delay: 1.5,
            duration: 1,
            opacity: 0.5,
            y: 0,
            ease: "power2.in",
            onComplete: () => {
              const moveCompleteTl = gsap.to(".move", { opacity: 1 });
              timelines.push(moveCompleteTl);
            },
          }
        );
        timelines.push(moveTl);

        // Card animation for bad browsers (no scrub)
        gsap.fromTo(
          ".card",
          { opacity: 0, y: -500 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger: {
              trigger: ".wall",
              start: "top 0%",
            },
          }
        );
      } else {
        // Normal card animation for good browsers
        gsap.fromTo(
          ".card",
          { opacity: 0, y: -500 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: ".wall",
              start: "top 0%",
              end: "bottom 10%",
              scrub: true,
            },
          }
        );
      }
    }

    // Text fade in animation
    gsap.fromTo(
      ".text",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".text",
          start: "top 30%",
        },
      }
    );

    // Refresh ScrollTrigger to ensure proper calculations
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      // Clear timeout
      clearTimeout(revealTimeout);

      // Kill all timelines
      timelines.forEach((tl) => {
        if (tl && tl.kill) {
          tl.kill();
        }
      });

      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [windowSize, badBrowser]); // Added badBrowser to dependencies
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="bg-gradient-to-b from-black to-white w-full flex flex-col items-center">
        <div className="moving relative flex flex-col  mt-[200px] justify-center items-start">
          <div className="h-[100px]"></div>
          <p className="opacity-0 reveal text-8xl md:text-[220px] text-left ">
            Hi
          </p>
          <p className="opacity-0 reveal lg:mt-6 text-4xl md:text-6xl lg:text-7xl ml-1 md:ml-[6px] lg:ml-3 ">
            We are
          </p>
          <div className="lg:w-[500px] md:w-[400px] w-[300px]"></div>

          <img
            className="absolute  opacity-0 lg:h-[170px] h-[110px] -right-[35px] lg:-right-[100px] image bottom-[165px]" //opacity-0 -left-5 image
            src="logo nobg.png"
          />
          <div className="h-[200px]"></div>
        </div>
        {badBrowser && (
          <button
            className="opacity-0 move mx-auto button__positive rounded-xl px-6 py-1"
            onClick={() => smoothScrollTo(cardRef.current, 500)}
          >
            Go down ↓
          </button>
        )}
      </div>

      <div className="wall flex flex-col items-center justify-center w-full lg:mt-32 mt-64">
        <div className="w-full bg-gradient-to-b h-[400px] z-30 from-brand to-white flex flex-col items-center justify-center"></div>
        <div className=" bg-white  w-full z-10 h-[400px]"></div>
      </div>
      <div ref={cardRef}></div>
      <Card />
    </div>
  );
}

function Card() {
  const { windowSize } = useData();
  return (
    <div className="card z-20">
      {windowSize === 0 && (
        <div className="border-2 duration-300 group  mt-64 rounded-xl w-[50vw] flex px-6 py-4 flex-col justify-center items-center">
          <img src="glasses.png" className="w-[30vw]" />
          <p className="mt-4 text-7xl text">Vision Nexes</p>
          <p className="mt-4 text">Our latest product</p>
          <a href="/product">
            <button className="text text-[15px] bg-white border-2 text-brand active:bg-white active:text-brand border-gray-300 hover:bg-brand hover:text-white  duration-300 group-hover:border-brand  text-lg button__small mt-4">
              Learn more
            </button>
          </a>
        </div>
      )}

      {windowSize !== 0 && (
        <div className="border-2  rounded-xl w-[85vw] flex px-6 py-4 flex-col justify-center items-center">
          <img src="glasses.png" className="w-[60vw]" />
          <p className="mt-4 text-4xl md:text-7xl">Vision Nexes</p>
          <p className="mt-4 md:text-xl">Our latest product</p>
          <a href="/product">
            <button className="button__extraSmall border-2 border-brand bg-white text-brand hover:bg-brand hover:text-white md:button__small md:text-xl text-[15px] mt-4 button__positive">
              Learn more
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
