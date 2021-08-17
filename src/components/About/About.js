import React, { useEffect } from "react";
import Aos from "aos";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faWordpressSimple,
//   faOpencart,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";

function AboutComponent() {
  useEffect(() => {
    Aos.init({});

    let MyImage = document.getElementById("My-image-cont-id");

    MyImage.addEventListener("mouseenter", () => {
      console.log("Working");
      MyImage.classList.add("HoverImage");
    });

    MyImage.addEventListener("mouseout", () => {
      console.log("Working");
      MyImage.classList.remove("HoverImage");
    });
  }, []);

  return (
    <div className="About-UI">
      <p id="Scroll__to__top__dest"></p>
      <div className="About-wrapper">
        <div className="About-content">
          <p id="about-dest">hello</p>
          <h3 className="text1 anim anim-1">Hi, my name</h3>
          <h1 className="name anim anim-2">Azhar Zaman</h1>

          {/* <h1 className="speciality anim anim-3 ecommerce-spe">
            <FontAwesomeIcon className="react" icon={faReact} />
            Front-end-developer(React)
          </h1> */}

          {/* <h1 className="speciality anim anim-3">
            <FontAwesomeIcon className="wordpress" icon={faWordpressSimple} />
            Wordpress Expert
          </h1> */}

          <p className="description anim anim-4 about-desk-desc">
            I'm working as full time Developer since March 2019, specializing in
            some of the powerful and trending Web Technologies like
            React(Redux), JavaScript(ES6+), Material UI, HTML/CSS etc. I can
            build and design exceptional websites on every niche, web
            applications, custom themes & interfaces, eCommerce stores with
            custom functionalaities.
          </p>

          <div className="Btn-container">
            <a
              className="About-btn anim anim-5"
              href="mailto:azharzaman.001@gmail. com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="My-image" id="Now">
          <div className="My-img-cont" id="My-image-cont-id"></div>
          <div className="Back-border1"></div>
          <div className="Back-border2"></div>
        </div>
        <div className="myImage__mobile"></div>
      </div>
    </div>
  );
}

export default AboutComponent;
