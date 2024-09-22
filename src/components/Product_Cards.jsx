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
      className="flex hover:scale-[102%] duration-300 px-4 py-2 min-w-[300px] w-[300px] h-[500px] flex-col bg-cover justify-start items-lefts border-2 rounded-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition:
          position > 0 ? `${position}% ${100 - position}%` : "0% 100%",
        color: text === 1 ? "white" : "black",
      }}
    >
      <p>{category}</p>
      <p className="headline__small font-semibold">{title}</p>
    </div>
  );
};
