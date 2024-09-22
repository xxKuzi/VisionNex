import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useData } from "../parts/Memory";

const References_Timeline = ({ data }) => {
  const { windowSize } = useData();
  const bubblesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animation when the bubbles are visible
            gsap.fromTo(
              bubblesRef.current,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: "elastic.out(1, 0.5)",
              }
            );
            observer.disconnect(); // Optional: Stop observing once animation has played
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    // Observe the first bubble to trigger the animation when it becomes visible
    if (bubblesRef.current[0]) {
      observer.observe(bubblesRef.current[0]);
    }

    return () => {
      if (bubblesRef.current[0]) {
        observer.unobserve(bubblesRef.current[0]);
      }
    };
  }, []);

  const monthToNumber = (month) => {
    const months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
    return months[month] + "/" || "null"; // Return null if the month is not found
  };

  return (
    <div className="flex items-center justify-center w-full mt-[170px]">
      <div className="relative items-center flex flex-col">
        <div className="h-2 absolute lg:top-3 md:top-[10px] top-[6px] w-[80vw] md:w-[70vw] bg-gray-300"></div>
        <div className="flex justify-between w-[92vw] md:w-[82vw]">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => (bubblesRef.current[index] = el)}
              className="flex flex-col items-center md:w-[12vw] w-[14vw]"
            >
              <div className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="mt-2 text-xs text-center text-gray-700">
                <p className="lg:text-base md:text-sm text-[10px]">
                  {windowSize !== 2
                    ? item.year
                    : item.year.split(" ").length > 1
                    ? monthToNumber(item.year.split(" ")[0]) +
                      item.year.split(" ")[1]
                    : item.year}
                </p>
                <div className="font-bold md:text-lg text-[10px] md:mt-1">
                  {item.event}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References_Timeline;
