import React from "react";
import About from "../Components/About/About";
import Expertise from "../Components/Expertise/Expertise";
import Footer from "../Components/Footer/Footer";
import GetinTouch from "../Components/GetinTouch/GetinTouch";
import Header from "../Components/Header/Header";
import IcanCreate from "../Components/IcanCreate/IcanCreate";
import RecentWork from "../Components/RecentWork/RecentWork";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <Expertise />
      <RecentWork />
      <IcanCreate />
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Homepage;
