import React from "react";
import { MuiDivider } from "../Generic/Theme";
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
          href="mailto:azharzaman.001@gmail.com"
          target="_blank"
          rel="noreferrer"
          id="attachment1"
        >
          azharzaman.001@gmail.com
        </a>
        <MuiDivider width="20%" color="#f06196" />
      </div>
    </div>
  );
};

export default StaticAttachments;
