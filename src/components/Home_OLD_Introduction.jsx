import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home_Introduction() {
  const helloRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      helloRef.current,
      { scale: 0.3, opacity: 0 },
      {
        scale: 2,
        y: 150,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: helloRef.current,
          start: "top center", // When the top of the box hits the center of the viewport
          end: "top 100px", // When the top of the box hits 100px from the top

          scrub: true,
        },
      }
    );

    gsap.fromTo(
      imgRef.current,
      { scale: 1, opacity: 1 },
      {
        scale: 3,
        y: 150,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 100", // When the top of the box hits the center of the viewport
          end: "top -300", // When the top of the box hits 100px from the top

          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="h-[100vh] w-full bg-gradient-to-b from-black to-white flex flex-col items-center justify-center">
        <img ref={imgRef} className="w-[50vw]" src="glasses nobc.png" />
        <div
          id="hello"
          ref={helloRef}
          className="flex flex-col mt-10 justify-center items-start"
        >
          <p className="text-7xl md:text-9xl text-left">Hi</p>
          <p className="text-xl md:text-5xl ml-1 md:ml-[6px] lg:ml-2">
            We are VisionNex
          </p>
        </div>
      </div>
    </div>
  );
}
