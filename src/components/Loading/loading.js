import React from "react";
import logo from "../Header/logo.png";
import "./loading.css";

const loading = () => {
  return (
    <div className="loading__stuff" id="loading__stuff">
      <div className="loading__circle"></div>
      <img className="anim__logo" src={logo} alt="" />
    </div>
  );
};

export default loading;
