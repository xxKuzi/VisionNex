import React, { useEffect } from "react";
import { useData } from "../parts/Memory";
export default function Team() {
  const { windowSize } = useData();

  useEffect(() => {
    console.log(windowSize);
  });
  const data = [
    {
      name: "Jakub Aldorf",
      area: "Vývoj | Software | Hardware",
      image: "aldy.webp",
      ig: "jakubaldorf",
    },
    {
      name: "Patrik Švoma",
      area: "Hardware | Modelování | 3D Tisk",
      image: "patas.webp",
      ig: "patriksvoma",
    },
    {
      name: "Jakub Kužel",
      area: "Design | Software | Marketing",
      image: "kuzi.webp",
      ig: "kuba.kuzi",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      {windowSize !== 2 && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="mt-6 text-center headline__big font-semibold">
            Our Team
          </h1>
          <div className="mt-6 mx-auto p-8 flex justify-center border-2 rounded-xl gap-6 flex-wrap">
            {data.map((item, i) => (
              <Card
                key={i}
                name={item.name}
                area={item.area}
                image={item.image}
                ig={item.ig}
              />
            ))}
          </div>
          <p className="md:text-3xl lg:text-5xl mt-[20vh]">
            ...Day one or one day?
          </p>
        </div>
      )}

      {windowSize === 2 && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-6 text-center text-4xl font-semibold">Our Team</h1>
          <div className="mt-6 mx-auto p-8 flex justify-center border-2 rounded-xl gap-6 flex-wrap">
            {data.map((item, i) => (
              <Card
                key={i}
                name={item.name}
                area={item.area}
                image={item.image}
                ig={item.ig}
              />
            ))}
          </div>
          <p className="text-2xl mt-8">...Day one or one day?</p>
        </div>
      )}
    </div>
  );
}

const Card = (props) => {
  const { name, area, image, ig } = props;

  return (
    <div className="border-2 rounded-xl border-blue-400 p-4 flex flex-col items-center justify-center">
      <img className="h-64 rounded-lg" src={image} alt={`Portrait of ${name}`} />
      <p className="mt-6 headline">{name}</p>
      <p className="mt-2">{area}</p>
      <div className="flex items-center mt-2">
        <a 
          href={"https://instagram.com/" + ig} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline hover:text-blue-600 focus-visible:outline focus-visible:outline-blue-500 rounded px-1"
          aria-label={`${name}'s Instagram @${ig}`}
        >
          @{ig}
        </a>
      </div>
    </div>
  );
};
