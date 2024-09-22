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
      image: "aldy.jpg",
      ig: "jakubaldorf",
    },
    {
      name: "Patrik Švoma",
      area: "Hardware | Modelování | 3D Tisk",
      image: "patas.jpg",
      ig: "patriksvoma",
    },
    {
      name: "Jakub Kužel",
      area: "Design | Software | Marketing",
      image: "kuzi.png",
      ig: "kuba.kuzi",
    },
  ];
  return (
    <div className="flex flex-col">
      {windowSize !== 2 && (
        <div className="flex flex-col h-screen">
          <p className="mt-6 text-center headline__big font-semibold">
            Our Team
          </p>
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
        </div>
      )}

      {windowSize === 2 && (
        <div className="flex flex-col">
          <p className="mt-6 text-center headline__big font-semibold">
            Our Team
          </p>
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
        </div>
      )}
    </div>
  );
}

const Card = (props) => {
  const { name, area, image, ig } = props;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="border-2 rounded-xl border-blue-400 p-4 flex flex-col items-center justify-center">
      <img className="h-64" src={image} />
      <p className="mt-6 headline">{name}</p>
      <p className="mt-2">{area}</p>
      <div className="flex items-center">
        <button onClick={() => openInNewTab("https://instagram.com/" + ig)}>
          <p>@{ig}</p>
        </button>
      </div>
    </div>
  );
};
