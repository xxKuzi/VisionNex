import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const References_Journey = ({ data }) => {
  const timelineRef = useRef([]);

  useEffect(() => {
    timelineRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Animation starts when the element is 80% in the viewport
            toggleActions: "play none none none", // Play on enter, no other actions
          },
        }
      );
    });
  }, [data]);

  return (
    <div className="flex flex-col items-center md:space-y-16 xl:space-y-[80px] space-y-10 mt-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="md:h-[40vh] xl:h-[60vh] xl:w-[50vw] h-[30vh] w-[87vw] relative rounded-lg"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the whole image is visible
            backgroundRepeat: "no-repeat", // Prevents image repetition
          }}
        >
          <div
            ref={(el) => (timelineRef.current[index] = el)}
            className="flex flex-col items-center absolute -bottom-2 right-2 bg-white rounded-lg md:p-6 px-4 py-3 shadow-md"
          >
            <div className="text text-gray-600">{item.year}</div>
            <div className="headline__extraSmall font-bold">{item.event}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default References_Journey;
