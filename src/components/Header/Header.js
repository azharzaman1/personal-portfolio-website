import React, { useEffect, useState } from "react";
import Logo from "./logo.png";
import { Link } from "react-scroll";
import CoachingPrivateLink from "./CoachingPrivateLink";

function HeaderSection() {
  return (
    <div className={`Header-wrapper`}>
      <div className="Logo-section">
        <a href="https://azharzaman.com">
          <img className="Logo" id="Logo" src={Logo} alt="logo"></img>
        </a>
      </div>
      <div className="Nav-section">
        <ul className="Ul hello" id="header__UL">
          <li>
            <Link
              className="Nav-items Pointer"
              to="about-dest"
              smooth={true}
              duration={1000}
            >
              <span>01-</span>
              About
            </Link>
          </li>
          <li>
            <Link
              className="Nav-items Pointer"
              to="Experience-dest"
              smooth={true}
              duration={1150}
            >
              <span>02-</span> Experience
            </Link>
          </li>
          <li>
            <Link
              className="Nav-items Pointer"
              to="scrollTo__projectsSection"
              smooth={true}
              duration={1700}
            >
              <span>03-</span> Work
            </Link>
          </li>
          <li>
            <Link
              className="Nav-items pointer desktopContact"
              to="Contact-dest"
              smooth={true}
              duration={2100}
            >
              <span>04-</span> Get in Touch
            </Link>
            <Link
              className="Nav-items pointer mobileContact"
              to="Contact-dest"
              smooth={true}
              duration={2100}
            >
              <span>04-</span> Contact
            </Link>
          </li>
          <CoachingPrivateLink />
        </ul>
      </div>
      <div className="Nav-button-section">
        <button className="Nav-button" id="navBtn">
          <a
            href="https://drive.google.com/drive/folders/1cgp8E20b4k92YG5TFFZpp8LjpmrS2470?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default HeaderSection;
