import React from "react";
import { FaUniversalAccess } from "react-icons/fa";

export default function InterestingFact() {
  return (
    <div className="accessibility-badge" role="note" aria-label="Accessibility Notice">
      <FaUniversalAccess className="accessibility-icon" aria-hidden="true" />
      <span>This website is optimized for users with visual impairments.</span>
    </div>
  );
}
