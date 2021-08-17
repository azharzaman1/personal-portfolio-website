import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PendingProject = ({
  logoSrc,
  githubLink,
  liveLink,
  tagline,
  pendingProjectLogoClass,
  taglineSepcificClass,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay="700"
      data-aos-easing="ease-out"
      className="pendingProject"
    >
      <a>
        <img className={pendingProjectLogoClass} src={logoSrc} />
      </a>
      <h2 className={taglineSepcificClass}>{tagline}</h2>
      <h3>Track Build Progress</h3>
      <div className="pendingProjects__linksIcons">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="pendingProject__githubIcon"
            icon={faGithub}
          />
        </a>

        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="pendingProject__externalIcon"
            icon={faExternalLinkAlt}
          />
        </a>
      </div>
    </div>
  );
};

export default PendingProject;
