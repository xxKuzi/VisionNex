import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useData } from "../parts/Memory";

const Carousel = ({ data }) => {
  const { windowSize } = useData();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  const prevSlide = () => {
    if (isDisabled === false) {
      const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      buttonDelay();
    }
  };

  const nextSlide = () => {
    if (isDisabled === false) {
      const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      buttonDelay();
    }
  };

  const buttonDelay = () => {
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 300);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8 mt-64">
      <div className="flex min-h-[600px] justify-center items-center space-x-4 relative">
        {data.map((item, index) => {
          const isActive = index === currentIndex;

          // Dynamically adjust image sizes and positions based on its status
          const imageSize = isActive ? "scale-75" : "scale-100"; //75

          const imageOpacity = isActive ? "opacity-100" : "opacity-50";

          const positionClass = `translateX(${
            (index - currentIndex) *
            (windowSize === 0 ? 40 : windowSize === 1 ? 50 : 60)
          }vw)`;

          // const positionClass = `translateX(${
          //   (index - currentIndex) * 30
          // }vw) scale(${isActive ? 1 : 0.97})`;
          //zIndex: isActive ? 10 : 1,

          return (
            <div
              key={index}
              className={`absolute  transition-all flex justify-center duration-500 ease-in-out transform ${imageSize} ${imageOpacity}  mx-4`}
              style={{
                width: isActive
                  ? windowSize === 0
                    ? "50%"
                    : windowSize === 1
                    ? "60%"
                    : "80%"
                  : "25%",
                transform: positionClass,
              }}
            >
              <Card key={index} cardData={item} />
            </div>
          );
        })}
      </div>

      {/* Previous & Next Buttons */}

      {/* Navigation Dots */}
      <div className="flex justify-center items-center mt-4">
        <button
          className={`transform p-2 text-white ${
            currentIndex > 0 ? "bg-gray-800" : "bg-gray-400"
          } rounded-full`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>

        <div className="px-16 flex items-center">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-[6px] rounded-full focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>

        <button
          className={`transform p-2 text-white ${
            currentIndex < data.length - 1 ? "bg-gray-800" : "bg-gray-400"
          } rounded-full`}
          onClick={nextSlide}
          disabled={currentIndex === data.length - 1}
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const Card = (props) => {
  const { category, title, image, text, position } = props.cardData;
  return (
    <div
      className="flex hover:scale-[102%] duration-300 px-4 py-2 w-full h-[500px] flex-col bg-cover justify-start items-left border-2 rounded-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition:
          position > 0 ? `${position}% ${100 - position}%` : "0% 100%",
        color: text === 1 ? "white" : "black",
      }}
    >
      <span className="sr-only">Feature illustration: {title}</span>
      <p>{category}</p>
      <p className="headline__small font-semibold">{title}</p>
    </div>
  );
};

export default Carousel;
