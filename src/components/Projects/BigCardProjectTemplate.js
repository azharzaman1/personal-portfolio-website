import React, { useEffect } from "react";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const BigCardProjectTemplate = ({
  reactProjectSpecialClass,
  needCloneText,
  logoRightText,
  reactProjectLogoClass,
  reactProjectLogoSrc,
  reactProjectLogoAlt,
  project__githubLink,
  projectLink,
  projectDescription,
  cloneText__specific,
  tech1,
  tech2,
  tech3,
  tech4,
  projectOriginal__srcLink,
  needExternalLink,
  gitHubIconSpecialClass,
}) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay="700"
      data-aos-easing="ease-out"
      className={`bigProject__wrapper ${reactProjectSpecialClass}`}
    >
      <div className="bigProject__cardHeader">
        <a>
          <img
            className={reactProjectLogoClass}
            src={reactProjectLogoSrc}
            alt={reactProjectLogoAlt}
          />
        </a>
        {needCloneText && (
          <h2 className={`cloneText ${cloneText__specific}`}>
            {logoRightText}
          </h2>
        )}

        <a href={project__githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className={`gitHub__icon ${gitHubIconSpecialClass}`}
            icon={faGithub}
          />
        </a>
        {needExternalLink && (
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        )}
      </div>
      <div className="bigProject__cardBody">
        <p className="bigProjects__desc"> {projectDescription} </p>
      </div>
      <div className="bigProject__cardFooter">
        <p className="projects__tech">
          <span> {tech1} </span> |<span> {tech2} </span> |<span> {tech3} </span>{" "}
          |<span> {tech4} </span>
        </p>
      </div>
    </div>
  );
};

export default BigCardProjectTemplate;
