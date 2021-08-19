import React from "react";
import About from "../Components/About/About";
import Expertise from "../Components/Expertise/Expertise";
import Header from "../Components/Header/Header";
import IcanCreate from "../Components/IcanCreate/IcanCreate";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <Expertise />
      <IcanCreate />
    </div>
  );
};

export default Homepage;
