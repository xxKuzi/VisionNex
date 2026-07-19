import React from "react";

export default function Product_Cards({ data }) {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {data.map((item, index) => (
        <Card key={index} cardData={item} />
      ))}
    </div>
  );
}

const Card = (props) => {
  const { category, title, image, text, position } = props.cardData;
  return (
    <div
      className="flex hover:scale-[102%] duration-300 px-4 py-2 min-w-[300px] w-[300px] h-[500px] flex-col justify-start items-left border-2 rounded-xl relative overflow-hidden"
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
      <p className="z-10">{category}</p>
      <p className="headline__small font-semibold z-10">{title}</p>
    </div>
  );
};
