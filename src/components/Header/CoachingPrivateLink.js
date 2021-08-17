import React from "react";
import { Link } from "react-router-dom";

const CoachingPrivateLink = () => {
  return (
    <li>
      <Link
        to="/coaching/front-end-development/batch1/overview"
        className="Nav-items Pointer"
      >
        <span>05-</span> Coaching
      </Link>
    </li>
  );
};

export default CoachingPrivateLink;
