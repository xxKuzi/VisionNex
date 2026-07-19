import React, { useEffect } from "react";

export default function References_Articles({ data }) {
  return (
    <div className="flex-wrap flex justify-center px-16 gap-6 mt-8">
      {data.map((item, index) => (
        <Article key={index} cardData={item} />
      ))}
    </div>
  );
}

const Article = (props) => {
  const { source, title, image, link, text, position } = props.cardData;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="flex hover:scale-[102%] duration-300 px-4 py-2 min-w-[320px] w-[320px] h-[500px] flex-col justify-start border-2 rounded-xl relative overflow-hidden"
        style={{
          color: text === 1 ? "white" : "black",
        }}
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
          style={{
            objectPosition:
              position > 0 ? `${position}% ${100 - position}%` : "0% 100%",
          }}
          loading="lazy"
        />
        <p className="md:text-base text-xs z-10">{source}</p>
        <p className="md:text-2xl text-xl font-semibold z-10">{title}</p>
      </div>
    </a>
  );
};
