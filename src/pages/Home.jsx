import React from "react";
// import Introduction from "../components/Home_Introduction";
// import Card from "../components/Home_Card";
import Reason from "../components/Home_Reason";

import Introduction from "../components/Home_Introduction";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-w-20">
      <Introduction />
      <Reason />
    </div>
  );
}
