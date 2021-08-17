import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Aos from "aos";
import ExperienceTemp from "./ExpereinceTemp";

var x = window.matchMedia("(max-width: 400px)");

function ExperienceSection() {
  useEffect(() => {
    Aos.init({});

    let ExperienceOutputBox = document.getElementById("Experience-output-box");
    let MarcomBtn = document.getElementById("Experience-btn1");
    let HuaweiBtn = document.getElementById("Experience-btn3");

    HuaweiBtn.addEventListener("click", () => {
      MarcomBtn.classList.remove("Marcom-btn");
      MarcomBtn.classList.add("Marcom-btn-mod");
      HuaweiBtn.classList.remove("Huawei-btn");
      HuaweiBtn.classList.add("Huawei-btn-mod");
      ReactDOM.render(
        <ExperienceTemp
          post="HMS Inovation App Contest @"
          industory="HUAWEI"
          time_duration="Jan 2019"
          point_1="The Huawei HMS Inovation App Contest aims to inspire global developers belonging to different technologies, to leverage HMS core to create innovative apps and other Web products, bringing life services to Huawei device users in 170+ countries and nearby regions."
          no_Need_Point_2
        />,
        ExperienceOutputBox
      );
    });

    MarcomBtn.addEventListener("click", () => {
      MarcomBtn.classList.remove("Marcom-btn-mod");
      MarcomBtn.classList.add("Marcom-btn");
      HuaweiBtn.classList.remove("Huawei-btn-mod");
      HuaweiBtn.classList.add("Huawei-btn");
      ReactDOM.render(
        <ExperienceTemp
          post="Wordpress Developer @"
          industory="MARCOM"
          industory_link="https://www.marcom.works/"
          time_duration="May 2019 - Nov 2019"
          point_1="Integrated third party forms, data, back-end services and specialized content to personalize WordPress theme layout and arrangement."
          point_2="Reviewed project requirements to identify customer expectations and resources needed to meet goals; especially regarding E-Commerce."
          specific_experience_container_class="MARCOM-content-container"
          specific_experience_top_space_class="MARCOM-top-space"
          specific_experience_bottom_space_class="MARCOM-lower-space"
          specific_experience_point_1_class="Marcom-lower-point-1"
          specific_experience_point_2_class="Marcom-lower-point-2"
        />,
        ExperienceOutputBox
      );
    });
  }, []);

  return (
    <div className="Experience-section-container">
      <div className="Heading-cont">
        <p id="Experience-dest">h</p>
        <h3
          className="Section-title"
          data-aos={x.matches ? "fade" : "fade-up"}
          data-aos-duration={x.matches ? "500" : "900"}
          data-aos-delay={x.matches ? "50" : "250"}
          data-aos-easing="ease-out"
        >
          <span className="number">02-</span> Experties | Experience
        </h3>
        <div
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="1100"
          data-aos-easing="ease-out"
          id="hr-1"
        ></div>
      </div>
      <div
        className="expertiesContent__mainWrapper"
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-delay="900"
        data-aos-easing="ease-out"
      >
        <div className="expertiesContent__wrapper">
          <p className="expertiseText">
            I enjoy creating things that make my clients happy with their
            pixel-perfect performant experiences, whether that be websites,
            eCommerce stores or anything in between. I have been working with
            recently:
          </p>

          {/* Front End Development */}

          <h3 className="Tagline">Front-End-Development</h3>
          <div className="Line Line1">
            <span> ✦ </span> <p> HTML5, CSS3(SASS) </p>
            <span className="extra1"> ✦ </span> <p> JavaScript(ES6+) </p>
          </div>
          <div className="Line Line2">
            <span> ✦ </span> <p> ReactJs(Redux) </p>
            <span className="extra2"> ✦ </span>
            <p> GatsbyJs </p>
          </div>
          <div className="Line Line3">
            <span> ✦ </span> <p> Material UI </p>
            <span className="extra3"> ✦ </span> <p> Firebase </p>
          </div>

          {/* Wordpress */}

          <h3 className="Tagline">CMS Development</h3>
          <div className="Line Line1">
            <span> ✦ </span> <p> Wordpress Development </p>
            <span className="extra4"> ✦ </span> <p> Elementor Builder </p>
          </div>
          <div data-aos-easing="ease-out" className="Line Line2">
            <span> ✦ </span> <p> eCommerce Development </p>
            <span className="extra5"> ✦ </span> <p> SEO ... </p>
          </div>
        </div>
        <div className="Experience-mid-border-div">h</div>
        <div className="Output-experience-container">
          <div className="Experience-btns-container">
            <button className="Marcom-btn" id="Experience-btn1">
              MARCOM
            </button>
            <button className="Huawei-btn" id="Experience-btn3">
              Huawei
            </button>
          </div>
          <div className="Experience-output-box" id="Experience-output-box">
            <ExperienceTemp
              post="Wordpress Developer @"
              industory="MARCOM"
              industory_link="https://www.marcom.works/"
              time_duration="May 2019 - Nov 2019"
              point_1="Integrated third party forms, data, back-end services and specialized content to personalize WordPress theme layout and arrangement."
              point_2="Reviewed project requirements to identify customer expectations and resources needed to meet goals; especially regarding E-Commerce."
              specific_experience_container_class="MARCOM-content-container"
              specific_experience_top_space_class="MARCOM-top-space"
              specific_experience_bottom_space_class="MARCOM-lower-space"
              specific_experience_point_1_class="Marcom-lower-point-1"
              specific_experience_point_2_class="Marcom-lower-point-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
