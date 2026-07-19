import React from "react";
import Reason from "../components/Home_Reason";
import Introduction from "../components/Home_Introduction";
import InterestingFact from "../components/InterestingFact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-w-20 relative w-full">
      <InterestingFact />
      <Introduction />
      <Reason />
    </div>
  );
}
