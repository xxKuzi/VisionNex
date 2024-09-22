import React from "react";
import { useData } from "../parts/Memory";

export default function Home_Card() {
  const { windowSize } = useData();
  return (
    <div>
      {windowSize === 0 && (
        <div className="border-2 mt-64 rounded-xl w-[50vw] flex px-6 py-4 flex-col justify-center items-center">
          <img src="glasses.png" className="w-[30vw]" />
          <p className="mt-4 text-7xl">Vision Nexes</p>
          <p className="mt-4">Our latest product</p>
          <a href="/product">
            <button className=" text-[15px] text-lg button__small mt-4 button__positive">
              Learn more
            </button>
          </a>
        </div>
      )}

      {windowSize !== 0 && (
        <div className="border-2 rounded-xl w-[85vw] flex px-6 py-4 flex-col justify-center items-center">
          <img src="glasses.png" className="w-[60vw]" />
          <p className="mt-4 text-4xl md:text-7xl">Vision Nexes</p>
          <p className="mt-4 md:text-xl">Our latest product</p>
          <a href="/product">
            <button className="button__extraSmall md:button__small md:text-xl text-[15px] mt-4 button__positive">
              Learn more
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
