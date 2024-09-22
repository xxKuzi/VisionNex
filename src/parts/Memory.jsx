import React, { useState, useEffect, createContext, useContext } from "react";

const DataContext = createContext();

export function Memory({ children }) {
  const [windowSize, setWindowSize] = useState(5);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setWindowSize(0);
    } else if (window.innerWidth >= 768) {
      setWindowSize(1);
    } else {
      setWindowSize(2);
    }
  };

  useEffect(() => {
    console.log(windowSize);
  }, [windowSize]);

  const data = {
    product: [
      //cards in Product
      {
        title: "One Charge, Hours of Use",
        category: "Energy",
        image: "battery.jpg",
        text: 1,
      },
      {
        title: "Listen through anything you want",
        category: "Connectivity",
        image: "connectivity.jpg",
        position: 30,
        text: 0,
      },
      {
        title: "Smooth experience",
        category: "Performance",
        image: "performance.jpg",
        text: 1,
      },
      {
        title: "Charge with USB-C",
        category: "Charging",
        image: "usb-c.jpg",
        text: 0,
      },
    ],

    articles: [
      {
        title:
          "Nejlepší mladí inovátoři se utkali ve finále programu Solve for Tomorrow",
        source: "samsung.com",

        link: "https://news.samsung.com/cz/nejlepsi-mladi-inovatori-se-utkali-ve-finale-programu-solve-for-tomorrow",
        image: "samsung.jpg",
        position: 100,
        text: 1,
      },
      {
        title:
          "Školáci ze Žďáru vymysleli chytré brýle pro nevidomé, svět mění ve zvuk",
        source: "Žďárský deník",

        link: "https://zdarsky.denik.cz/zpravy_region/skolaci-ze-zdaru-vymysleli-chytre-bryle-pro-nevidome-svet-meni-ve-zvuk-20240507.html",
        image: "zdarskydenik.jpg",
        position: 1,
        text: 0,
      },

      {
        title: 'Projekt: „chytré“ brýle pro nevidomé "VisionNex"',
        source: "solvefortomorrow.cz",

        link: "https://www.solvefortomorrow.cz/rocniky/2023/",
        image: "sft.jpg",
        text: 1,
      },

      {
        title: "„Hlasové“ brýle pro nevidomé",
        source: "ceskaocnioptika.cz",

        link: "https://www.ceskaocnioptika.cz/2024/05/20/hlasove-bryle-pro-nevidome/",
        image: "zdarskydenik.jpg",
        position: 90,
        text: 1,
      },

      {
        title: "AI v rukách teenagerů",
        source: "3pol.cz",

        link: "https://www.3pol.cz/cz/rubriky/studenti/3119-ai-v-rukach-teenageru",
        image: "3pol.jpeg",

        text: 1,
      },
    ],
    journey: [
      {
        year: "September 2023",
        event: "Creating of an idea",
        text: "at this time we wasn't sure what we want",
        image: "thinking.jpg",
        position: { x: 10, y: 10 },
      },
      {
        year: "February 2024",
        event: "Working model",
        text: "at this time we wasn't sure what we want",
        image: "zdarskydenik.jpg",
      },
      { year: "April 2024", event: "Winning in SFT", image: "sft.jpg" },
      {
        year: "June 2024",
        event: "JA Award Cerenomy",
        text: "at this time we wasn't sure what we want",
        image: "ja.jpg",
      },
      {
        year: "September 2024",
        event: "Testing in Paris with Heejin",
        image: "paris.jpg",
      },
    ],
    timeline: [
      { year: "September 2023", event: "Creation of an idea" },
      { year: "October 2023", event: "Start of development" },
      { year: "February 2024", event: "Working Prototype" },
      { year: "April 2024", event: "Winning in SFT" },
      { year: "Future", event: "Production?" },
    ],
  };

  const contextData = { data, windowSize };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};
