import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Product_Components() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".component",
      { scale: 1 },
      {
        scale: 0.3,
        y: 100,
        top: 0,
        left: 0,
        delay: 0.5,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".component-container",
          start: "center 80%", // When the top of the box hits the center of the viewport
        },
        onComplete: () => {
          document.body.style.overflow = "auto";
          gsap.fromTo(
            boxRef.current,
            {
              scale: 0,
            },
            { scale: 2 }
          );
        },
      }
    );
  }, []);

  return (
    <div className="h-[60vh] flex flex-col lg:mt-32 items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="flex z-0 w-32 component-container relative items-center justify-center">
          <img
            className="component absolute -top-[15vh] left-[30vw]"
            src="camera.png"
          ></img>
          <img
            className="component absolute -top-[15vh] -left-[30vw]"
            src="battery.png"
          ></img>
          <img
            className="component absolute top-[25vh] -left-[25vw]"
            src="elevenlabs.png"
          ></img>
          <img
            className="component absolute top-[20vh] left-[25vw]"
            src="chatgpt.png"
          ></img>
          <img
            className="component absolute -z-10 top-[40vh] left-[15vw]"
            src="esp32.png"
          ></img>
        </div>
      </div>

      <img
        className="w-[40vw] md:w-[35vw] xl:w-[20vw] z-10 scale-0 lg:mt-0 md:mt-12 mt-[100px]"
        src="glasses.png"
        ref={boxRef}
      />
    </div>
  );
}
