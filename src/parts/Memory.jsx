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
        image: "battery.webp",
        text: 1,
      },
      {
        title: "Listen through anything you want",
        category: "Connectivity",
        image: "connectivity.webp",
        position: 30,
        text: 0,
      },
      {
        title: "Smooth experience",
        category: "Performance",
        image: "performance.webp",
        text: 1,
      },
      {
        title: "Charge with USB-C",
        category: "Charging",
        image: "usb-c.webp",
        text: 0,
      },
    ],

    articles: [
      {
        title:
          "Nejlepší mladí inovátoři se utkali ve finále programu Solve for Tomorrow",
        source: "samsung.com",

        link: "https://news.samsung.com/cz/nejlepsi-mladi-inovatori-se-utkali-ve-finale-programu-solve-for-tomorrow",
        image: "samsung.webp",
        position: 100,
        text: 0,
      },

      {
        title:
          "Chytré brýle VisionNex: studentský projekt, který přináší zrak tam, kde chybí",
        source: "samsung.com",

        link: "https://news.samsung.com/cz/chytre-bryle-visionnex-studentsky-projekt-ktery-prinasi-zrak-tam-kde-chybi",
        image:
          "https://img.global.news.samsung.com/cz/wp-content/uploads/2024/09/3.jpg",
        position: 0,
        text: 1,
      },
      {
        title:
          "Studenti vymysleli chytré brýle pro nevidomé",
        source: "ct24.cz",

        link: "https://ct24.ceskatelevize.cz/video/studenti-vymysleli-chytre-bryle-pro-nevidome-225707",
        image: "ct24.webp",
        position: 50,
        text: 0,
      },
      {
        title:
          "Umělá inteligence v rukou středoškoláků. Svými projekty pomáhají seniorům, autistům i nevidomým",
        source: "refresher.cz",

        link: "https://news.refresher.cz/158627-Umela-inteligence-v-rukou-stredoskolaku-Svymi-projekty-pomahaji-seniorum-autistum-i-nevidomym",
        image: "zdarskydenik.webp",
        position: 50,
        text: 0,
      },
      {
        title: "Naši studenti se vydali do Paříže",
        source: "spszr.cz",

        link: "https://www.spszr.cz/aktivity-skoly/nasi-studenti-se-vydali-do-parize",
        image:
          "https://www.spszr.cz/image.php?nid=21276&oid=11512880&width=1500",
        position: 50,
        text: 1,
      },
      {
        title:
          "Unikátny nápad stredoškolákov: vymysleli okuliare pre nevidomých, predstavili ich priamo v Paríži počas paralympiády",
        source: "aktuality.sk",

        link: "https://www.aktuality.sk/clanok/Zm33DHL/unikatny-napad-stredoskolakov-vymysleli-okuliare-pre-nevidomych-predstavili-ich-priamo-v-parizi-pocas-paralympiady/",
        image: "aktuality.webp",
        position: 50,
        text: 0,
      },
      {
        title: 'Samsung představuje vítěze prvního evropského kola soutěže Solve for Tomorrow. Vyhráli i Češi.',
        source: "news.samsung.com",

        link: "https://news.samsung.com/cz/samsung-predstavuje-viteze-prvniho-evropskeho-kola-souteze-solve-for-tomorrow-vyhrali-i-cesi",
        image: "europe_2.webp",
        text: 0,
        position: 50,
      },

      

      {
        title: "Tým tří studentů ze Žďáru nad Sázavou zvítězil 🥇",
        source: "linkedin.com",

        link: "https://www.linkedin.com/posts/samsung-electronics-czech-republic-slovakia_solve-for-tomorrow-v%C3%ADt%C4%9Bzn%C3%BD-t%C3%BDm-visionnex-activity-7241798986695589888-QPPU/?originalSubdomain=cz",
        image: "linkedin.webp",
        position: 50,
        text: 1,
      },
      {
        title: 'Samsung zná finalisty prvního celoevropského kola soutěže Solve for Tomorrow. Jsou mezi nimi Češi.',
        source: "news.samsung.com",

        link: "https://news.samsung.com/cz/samsung-zna-finalisty-prvniho-celoevropskeho-kola-souteze-solve-for-tomorrow-jsou-mezi-nimi-cesi",
        image: "europe.webp",
        text: 0,
      },

      {
        title:
          "Školáci ze Žďáru vymysleli chytré brýle pro nevidomé, svět mění ve zvuk",
        source: "Žďárský deník",

        link: "https://zdarsky.denik.cz/zpravy_region/skolaci-ze-zdaru-vymysleli-chytre-bryle-pro-nevidome-svet-meni-ve-zvuk-20240507.html",
        image: "zdarskydenik.webp",
        position: 1,
        text: 0,
      },

      {
        title: 'Projekt: „chytré“ brýle pro nevidomé "VisionNex"',
        source: "solvefortomorrow.cz",

        link: "https://www.solvefortomorrow.cz/rocniky/2023/",
        image: "sft.webp",
        text: 1,
      },

      {
        title: "„Hlasové“ brýle pro nevidomé",
        source: "ceskaocnioptika.cz",

        link: "https://www.ceskaocnioptika.cz/2024/05/20/hlasove-bryle-pro-nevidome/",
        image: "zdarskydenik.webp",
        position: 90,
        text: 0,
      },

      {
        title: "AI v rukách teenagerů",
        source: "3pol.cz",

        link: "https://www.3pol.cz/cz/rubriky/studenti/3119-ai-v-rukach-teenageru",
        image: "3pol.webp",

        text: 1,
      },
    ],
    journey: [
      {
        year: "September 2023",
        event: "Creating of an idea",
        text: "at this time we wasn't sure what we want",
        image: "thinking.webp",
        position: { x: 10, y: 10 },
      },
      {
        year: "February 2024",
        event: "Working model",
        text: "at this time we wasn't sure what we want",
        image: "zdarskydenik.webp",
      },
      { year: "April 2024", event: "Winning Czech National SFT", image: "sft.webp" },
      {
        year: "June 2024",
        event: "JA Award Ceremony",
        text: "at this time we wasn't sure what we want",
        image: "ja.webp",
      },
      {
        year: "September 2024",
        event: "Testing in Paris with Heejin",
        image: "paris.webp",
      },
      {
        year: "October 2025",
        event: "Winning European Samsung SFT ",
        image: "europe_2.webp",
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
