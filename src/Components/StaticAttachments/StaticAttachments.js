import React from "react";
import Divider from "../Generic/Theme/Divider";
import "./StaticAttachments.css";

const StaticAttachments = () => {
  return (
    <div className="StaticAttachments__section">
      <div
        className="bodyRightSide__emailAttachment attachment1 rotated90deg"
        onMouseEnter={() => {
          document
            .getElementById("attachment1")
            .classList.add("rise--animation");
        }}
        onMouseOut={() => {
          document
            .getElementById("attachment1")
            .classList.remove("rise--animation");
        }}
      >
        <a
          href="mailto:azhar.works1@gmail.com"
          target="_blank"
          rel="noreferrer"
          id="attachment1"
        >
          azhar.works1@gmail.com
        </a>
        <Divider width="20%" color="#f06196" />
      </div>
    </div>
  );
};

export default StaticAttachments;
