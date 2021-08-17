import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

import AboutSection from "../components/About/About";
import HeaderSection from "../components/Header/Header";
import ExperienceSection from "../components/Experience/Experience";
import ProjectsSection from "../components/Projects/Projects";
import ContactSection from "../components/Contact/Contact";
import FooterSection from "../components/Footer/Footer";
import Loading from "../components/Loading/loading";

function App() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const loadingStuff = document.getElementById("loading__stuff");
      if (loadingStuff) loadingStuff.classList.add("disappear__animation");
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }, 3000);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 750) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  let AttachedmailBox = document.getElementById("mail-box");
  let Mail = document.getElementById("gmail");
  if (Mail) {
    Mail.addEventListener("mouseenter", () => {
      Mail.classList.add("moveup");
    });
  }

  if (AttachedmailBox) {
    AttachedmailBox.addEventListener("mouseenter", () => {
      Mail.classList.add("moveup");
    });
  }

  if (AttachedmailBox) {
    AttachedmailBox.addEventListener("mouseout", () => {
      Mail.classList.remove("moveup");
    });
  }

  return (
    <div className={`Main_app_ui_container ${loading && "hide__scrollbar"}`}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="Slider-space" id="Slider-space"></div>
          <div className="Root-wrapper">
            <div className="Attached-mail">
              <div id="mail-box">
                <a
                  className="mail"
                  id="gmail"
                  href="mailto:azharzaman.001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>azharzaman.001@gmail.com</span>
                </a>
              </div>
              <div className="Line-btw"></div>
            </div>
            <div className="Scroll__to__top__wrapper">
              <Link
                to="Scroll__to__top__dest"
                smooth={true}
                duration={1500}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <FontAwesomeIcon
                  className={`Scroll__to__top__icon ${
                    show && "Visible__scroll__to__top__icon"
                  }`}
                  icon={faArrowAltCircleUp}
                />
              </Link>
            </div>
            <HeaderSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
            <FooterSection />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
