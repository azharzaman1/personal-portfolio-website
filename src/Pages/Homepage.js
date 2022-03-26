import React from "react";
import About from "../Components/About/About";
import Expertise from "../Components/Expertise/Expertise";
import Footer from "../Components/Footer/Footer";
import { RSAnchor } from "../Components/Generic/Theme";
import GetinTouch from "../Components/GetinTouch/GetinTouch";
import Header from "../Components/Header/Header";
import IcanCreate from "../Components/IcanCreate/IcanCreate";
import RecentWork from "../Components/RecentWork/RecentWork";

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
      <RSAnchor target="getintouch-section-scroll-anchor" />
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Homepage;
