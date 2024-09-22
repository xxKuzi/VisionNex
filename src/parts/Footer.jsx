import React, { useEffect } from "react";
import { useData } from "./Memory";

export default function Footer() {
  const { windowSize } = useData();

  return (
    <div className="mt-32">
      {windowSize !== 2 && (
        <div className="w-full bg-gray-200 flex justify-between text-gray-500 px-4 py-2">
          <div className="w-3/12">
            <a href="/">
              <img className="h-8" src="logo eye nobg.png" />
            </a>
          </div>
          <div className="flex items-center justify-center text-sm gap-10">
            <a href="/">
              <p className="hover:text-blue-400 duration-300">Home</p>
            </a>
            <a className="hover:text-blue-400 duration-300" href="/product">
              <p>Product</p>
            </a>
            <a className="hover:text-blue-400 duration-300" href="/references">
              <p>References</p>
            </a>
            <a className="hover:text-blue-400 duration-300" href="/team">
              <p>Team</p>
            </a>
          </div>
          <div className="flex w-3/12 justify-end items-center lg:text-base text-sm">
            <p>
              Developed by <span className="font-semibold">VisionNex</span>
            </p>
          </div>
        </div>
      )}
      {windowSize === 2 && (
        <div className="w-full bg-gray-200 flex justify-between items-center text-gray-500 px-2 py-2 flex-wrap">
          <div className="flex-shrink-0">
            <a href="/">
              <img src="logo eye nobg.png" className="h-8" />
            </a>
          </div>
          <div className="flex justify-end items-center flex-shrink-0">
            <p>
              Developed by <span className="font-semibold">VisionNex</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
