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
    <div className="relative w-full max-w-7xl mx-auto py-8">
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
        >
          <FaArrowLeft />
        </button>

        <div className="px-16 flex">
          {data.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-2 h-2 mx-[6px] rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        <button
          className={`transform p-2 text-white ${
            currentIndex < data.length - 1 ? "bg-gray-800" : "bg-gray-400"
          } rounded-full`}
          onClick={nextSlide}
          disabled={currentIndex === data.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const Card = (props) => {
  const { title, source, link, image, position, text } = props.cardData;
  return (
    <a
      href={link}
      className="flex w-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="flex hover:scale-[102%] duration-300 px-4 py-2 w-full h-[500px] flex-col bg-cover justify-start items-lefts border-2 rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition:
            position > 0 ? `${position}% ${100 - position}%` : "0% 100%",
          color: text === 1 ? "white" : "black",
        }}
      >
        <p>{source}</p>
        <p className="headline__small font-semibold">{title}</p>
      </div>
    </a>
  );
};

export default Carousel;

// itle:
//           "Nejlepší mladí inovátoři se utkali ve finále programu Solve for Tomorrow",
//         source: "samsung.com",

//         link: "https://news.samsung.com/cz/nejlepsi-mladi-inovatori-se-utkali-ve-finale-programu-solve-for-tomorrow",
//         image: "samsung.jpg",
//         position: 100,
//         text: 1
