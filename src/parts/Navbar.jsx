import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useData } from "./Memory";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const { windowSize } = useData();
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!dropDown) return;
    const currentTrigger = triggerRef.current;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setDropDown(false);
        return;
      }

      if (e.key === "Tab") {
        if (!menuRef.current) return;
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    const focusTimeout = setTimeout(() => {
      if (menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll('a[href], button');
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    }, 50);

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimeout);
      if (currentTrigger) {
        currentTrigger.focus();
      }
    };
  }, [dropDown]);

  return (
    <header className="w-full bg-black">
      {windowSize !== 2 && (
        <div className="justify-between px-4 py-2 flex h-12 items-center w-full">
          <div className="w-2/12 flex justify-start">
            <Link to="/" className="flex items-center gap-[5px] mr-16" aria-label="VisionNex Home">
              <img src="logo eye nobg.png" className="h-6" alt="" aria-hidden="true" />
              <span className="text-white">VisionNex</span>
            </Link>
          </div>
          <nav aria-label="Main Navigation" className="justify-center flex gap-10 items-center">
            <Link to="/" className="text-gray-300 duration-500 hover:text-white">
              Home
            </Link>
            <Link to="/product" className="text-gray-300 duration-500 hover:text-white">
              Product
            </Link>
            <Link to="/references" className="text-gray-300 duration-500 hover:text-white">
              References
            </Link>
            <Link to="/team" className="text-gray-300 duration-500 hover:text-white">
              Team
            </Link>
          </nav>
          <div className="w-2/12 flex flex-row-reverse"></div>
        </div>
      )}

      {windowSize === 2 && (
        <div className="justify-between px-4 py-2 flex h-12 items-center w-full">
          <div>
            <Link to="/" className="items-center flex gap-2" aria-label="VisionNex Home">
              <img className="h-6" src="logo eye nobg.png" alt="" aria-hidden="true" />
              <span className="text-white">VisionNex</span>
            </Link>
          </div>

          <div className="flex flex-row">
            <button
              ref={triggerRef}
              className="button__extraSmall px-4 bg-brand-darker text-white"
              onClick={() => setDropDown((prev) => !prev)}
              aria-haspopup="menu"
              aria-expanded={dropDown}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
            >
              Menu
            </button>
          </div>
        </div>
      )}
      
      {dropDown && (
        <div 
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="flex flex-col-reverse absolute left-0 duration-300 top-0 rounded-md p-8 text-xl w-full h-[50%] z-20 bg-white min-h-[350px]"
        >
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col ml-[5vw] font-semibold gap-4 mb-[5vw] text-2xl">
              <li>
                <Link to="/" onClick={() => setDropDown(false)} className="text-left block py-2 text-black hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => setDropDown(false)} className="text-left block py-2 text-black hover:text-blue-500">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/references" onClick={() => setDropDown(false)} className="text-left block py-2 text-black hover:text-blue-500">
                  References
                </Link>
              </li>
              <li>
                <Link to="/team" onClick={() => setDropDown(false)} className="text-left block py-2 text-black hover:text-blue-500">
                  Team
                </Link>
              </li>
            </ul>
          </nav>
          <button 
            onClick={() => setDropDown(false)}
            aria-label="Close navigation menu"
            className="absolute top-4 right-4 p-2 focus-visible:outline focus-visible:outline-blue-500 rounded-full"
          >
            <ImCross className="h-6 w-6 text-black" />
          </button>
          <img src="logo nobg.png" className="absolute left-4 top-4 h-16" alt="VisionNex logo" />
        </div>
      )}
    </header>
  );
}
