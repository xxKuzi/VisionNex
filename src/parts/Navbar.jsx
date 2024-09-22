import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "./Memory";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const { windowSize } = useData();

  return (
    <div>
      {/* {windowSize === 0 && (
        <div className="bg-black justify-center px-4 py-2 flex h-12 items-center w-full">
          <div className="w-full flex justify-end">
            <Link to="/" className="flex items-center gap-[5px] mr-16">
              <img src="logo eye nobg.png" className="h-6" />
              <p className="text-white text-">VisionNex</p>
            </Link>
          </div>
          <div className=" justify-center  flex gap-10 items-center">
            <Link to="/">
              <p className="text-gray-300 duration-500 hover:text-white">
                Home
              </p>
            </Link>
            <Link to="/product">
              <p className="text-gray-300 duration-500 hover:text-white">
                Product
              </p>
            </Link>
            <Link to="/references">
              <p className="text-gray-300 duration-500 hover:text-white">
                References
              </p>
            </Link>
            <Link to="/team">
              <p className="text-gray-300 duration-500 hover:text-white">
                Team
              </p>
            </Link>
          </div>
          <div className="w-full flex flex-row-reverse"></div>
        </div>
      )} */}

      {windowSize !== 2 && (
        <div className="bg-black justify-between px-4 py-2 flex h-12 items-center w-full">
          <div className="w-2/12 flex justify-start">
            <Link to="/" className="flex items-center gap-[5px] mr-16">
              <img src="logo eye nobg.png" className="h-6" />
              <p className="text-white text-">VisionNex</p>
            </Link>
          </div>
          <div className=" justify-center  flex gap-10 items-center">
            <Link to="/">
              <p className="text-gray-300 duration-500 hover:text-white">
                Home
              </p>
            </Link>
            <Link to="/product">
              <p className="text-gray-300 duration-500 hover:text-white">
                Product
              </p>
            </Link>
            <Link to="/references">
              <p className="text-gray-300 duration-500 hover:text-white">
                References
              </p>
            </Link>
            <Link to="/team">
              <p className="text-gray-300 duration-500 hover:text-white">
                Team
              </p>
            </Link>
          </div>
          <div className="w-2/12 flex flex-row-reverse"></div>
        </div>
      )}

      {windowSize === 2 && (
        <div className="bg-black justify-between px-4 py-2 flex h-12 items-center w-full">
          <div>
            <Link to="/" className="items-center flex gap-2">
              <img className="h-6" src="logo eye nobg.png" />
              <p className="text-white">VisionNex</p>
            </Link>
          </div>

          <div className="flex flex-row">
            <button
              className="button__extraSmall px-4 bg-brand-darker text-white"
              onClick={() => setDropDown((prev) => !prev)}
            >
              Menu
            </button>
          </div>
        </div>
      )}
      {dropDown && (
        <div className="flex flex-col-reverse absolute left-0 duration-300 top-0 rounded-md p-8 text-xl w-full h-[50%] z-20 bg-white">
          <ul className="flex flex-col ml-[5vw] font-semibold gap-4 mb-[5vw] text-2xl">
            <button onClick={() => setDropDown((prev) => !prev)}>
              <Link to="/">
                <li className="text-left">Home</li>
              </Link>
            </button>
            <button onClick={() => setDropDown((prev) => !prev)}>
              <Link to="/product">
                <li className="text-left">Product</li>
              </Link>
            </button>
            <button onClick={() => setDropDown((prev) => !prev)}>
              <Link to="/references">
                <li className="text-left">References</li>
              </Link>
            </button>
            <button onClick={() => setDropDown((prev) => !prev)}>
              <Link to="/team">
                <li className="text-left">Team</li>
              </Link>
            </button>
          </ul>
          <button onClick={() => setDropDown((prev) => !prev)}>
            <ImCross className="absolute top-4 right-4 h-8" />
          </button>
          <img src="logo nobg.png" className="absolute left-4 top-4 h-16" />
        </div>
      )}
    </div>
  );
}
