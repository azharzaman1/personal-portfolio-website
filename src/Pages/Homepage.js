import React from "react";
import About from "../Components/About/About";
import Expertise from "../Components/Expertise/Expertise";
import Header from "../Components/Header/Header";
import IcanCreate from "../Components/IcanCreate/IcanCreate";
import RecentWork from "../Components/RecentWork/RecentWork";
import { RSAnchor } from "../Mui/MuiComponents";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <RSAnchor target="expertise-section-scroll-anchor" />
      <Expertise />
      <IcanCreate />
      <RSAnchor target="portfolio-section-scroll-anchor" />
      <RecentWork />
    </div>
  );
};

export default Homepage;
