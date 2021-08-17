import React, { useEffect, useState } from "react";
import Aos from "aos";
import Project from "./SmallCardProjectTemplate";
import BigCardProjectTemplate from "./BigCardProjectTemplate";
import PendingProject from "./PendingProject";
import GoogleLogo from "./images/googleLogo.png";
import AmazonLogo from "./images/amazon.png";
import NetflixLogo from "./images/netflix.png";
import MyLogo from "./images/logo.png";
import TrackerLogo from "./images/tracker_logo.png";
import CVALogo from "./images/cva.png";
import MuiPopup from "./MuiPopup";

let ProjectsSection = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [popupAlt, setPopupAlt] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const closePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="projectsSection__mainContainer">
      <MuiPopup
        open={openPopup}
        closePopup={closePopup}
        img={popupImage}
        alt={popupAlt}
      />
      <div className="projectsSection__headingCont">
        <p id="scrollTo__projectsSection">h</p>
        <h3
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-easing="ease-out"
          className="projectsSection__heading"
        >
          <span className="number">03-</span> Some Noteworthy Work
        </h3>
        <div
          data-aos="fade"
          data-aos-duration="900"
          data-aos-delay="1100"
          className="projectsSection__frontLine"
        ></div>
      </div>
      <div className="react__projectsContainer">
        <h2
          className="projectsTagline reactProjects__tagline"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="700"
          data-aos-easing="ease-out"
        >
          Front-End-Development (React)
        </h2>

        <div className="reactProjects__secondRow">
          <PendingProject
            tagline="Virtual Assistant Application"
            logoSrc={CVALogo}
            pendingProjectLogoClass="pendingProject__vaLogo"
            githubLink="https://github.com/TheAzharZaman/Comany-Virtual-Assistant.git"
            liveLink="https://virtual-assistant-application.netlify.app/"
            taglineSepcificClass="cvaTagline"
          />
        </div>

        <div className="reactProjects__firstRow">
          <BigCardProjectTemplate
            reactProjectSpecialClass="covid__projectContainer"
            reactProjectLogoSrc={TrackerLogo}
            reactProjectLogoClass="covidLogo"
            project__githubLink="https://github.com/TheAzharZaman/Covid-tacker-portfolio"
            projectLink="https://azhar-covidtracker.ga/"
            projectDescription="Built a fully functional COVID-19 Tracker with React using latest web  technologies like Material UI, React leaflet, ChartJs as main UI components. This specific Covid tracker finds its realtime database from 'disease.sh' using Live API calls. Also it uses Firebase as a database and Authentication functionalities."
            tech1="ReactJs"
            tech2="Material UI"
            tech3="Leaflet"
            tech4="ChartJs"
            needExternalLink
            gitHubIconSpecialClass="covidProject__github"
          />

          <BigCardProjectTemplate
            reactProjectSpecialClass="covid__projectContainer"
            reactProjectLogoSrc={AmazonLogo}
            reactProjectLogoClass="amazonLogo"
            project__githubLink="https://github.com/TheAzharZaman/Full-Stack-Amazon-Clone.git"
            projectLink="https://azhar-amazonclone.ga/"
            projectDescription="I have recently completed Amazon Demo Clone build with React, with full eCommerce functionalities like add & remove to Cart, add address, Checkout Payment via Stripe, add products, add categories and much more. This Amazon clone is using Firebase firestore as realtime Database to store user details, addresses, order stats etc."
            tech1="ReactJs"
            tech2="Stripe"
            tech3="Material UI"
            tech4="Firebase"
            needExternalLink
            needCloneText
            logoRightText="Clone"
          />
        </div>

        <div className="reactProjects__secondRow">
          <BigCardProjectTemplate
            reactProjectSpecialClass="googleClone__projectContainer"
            reactProjectLogoSrc={GoogleLogo}
            reactProjectLogoClass="googleLogo"
            logoRightText="Clone"
            project__githubLink="https://github.com/TheAzharZaman/Google-portfolio-clone.git"
            projectLink="https://azhar-googleclone.ga/"
            projectDescription="Built a fully functional Google Clone with React finding its real-time database from the original Google server. This clone is full of functinalites including React Router, React Hooks and React Context API. Material UI is serving as a design library. This clone is super responsive fit for every device size."
            tech1="ReactJs"
            tech2="Material UI"
            tech3="JavaScript"
            tech4="SASS"
            needCloneText
            needExternalLink
          />
          <BigCardProjectTemplate
            reactProjectSpecialClass="netflixClone__projectContainer"
            reactProjectLogoSrc={NetflixLogo}
            reactProjectLogoClass="netflixLogo"
            logoRightText="Clone"
            project__githubLink="https://github.com/TheAzharZaman/Netflix-Portfolio-Clone.git"
            projectLink="https://azhar-netflixclone.ga/"
            cloneText__specific="netflixText"
            projectDescription="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and more on thousands of internet-connected devices. I decided to build it with react and used tmdb as realtime movie database. It fetch movies from tmdb and trailers when clicked from youtube with a special 'youtube-trailer' functionality. "
            tech1="ReactJs"
            tech2="Material UI"
            tech3="JavaScript"
            tech4="SASS"
            needCloneText
            needExternalLink
          />
        </div>
        <div className="reactProjects__secondRow">
          <BigCardProjectTemplate
            reactProjectSpecialClass="persoanl__projectContainer"
            reactProjectLogoSrc={MyLogo}
            reactProjectLogoClass="myLogo"
            project__githubLink="https://github.com/drcraze/Personal-Website-V1.git"
            projectDescription="This website is built with React with its descent UI. I have used CSS(SASS) for styling purposes. Making this website simple but expressive was my first priority. There is always room for improvement. Your contribution would be a great favour, if you want to. Link to Github Repo is attached."
            tech1="ReactJs"
            tech2="CSS(SASS)"
            tech3="JavaScript"
            tech4="AOS"
          />
        </div>
      </div>
      <div className="cmsDevelopment__projectsContainer">
        <h2
          className="projectsTagline wpProjects__tagline"
          className="projectsTagline reactProjects__tagline"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          Wordpress Development
        </h2>
        <div className="cmsDevelopment__firstRow">
          <Project
            project_link="https://plannative.com/"
            project_heading="HBO Services Company"
            project_description="Plan Native is a Multinational Business Process Outsourcing Company of Professional Accountants, CPAs, HR Specialists, IT Experts etc."
            tech_1="Wordpress"
            tech_link_1="https://wordpress.org/"
            tech_2="Elementor Pro"
            tech_link_2="https://elementor.com/pro/"
            tech_3="RS6"
            tech_link_3="https://www.sliderrevolution.com/"
            have_Two_Seprators
            popupOpener={() => {
              setPopupImage(
                "https://i.ibb.co/dBRZ5Zg/Plan-Native-Landing-Page-New.png"
              );
              setPopupAlt("Plan Native Landing Page");
              setOpenPopup(true);
            }}
          />

          <Project
            project_link="http://mashriqtv.pk/"
            project_heading="Mashriq T.V."
            project_description="Mashriq T.V Peshawer is daily news reporting website built on Wordpress. 
            This particular website is extensive application of Wordpress."
            tech_1="WordPress"
            tech_link_1="https://wordpress.org/"
            tech_2="Elementor Pro"
            tech_link_2="https://elementor.com/pro/"
            tech_3="Urdu Paper"
            tech_link_3="https://stylothemes.com/shop/product/urdupress-premium-urdu-theme-for-wordpress/"
            have_Two_Seprators
            popupOpener={() => {
              setPopupImage(
                "https://i.ibb.co/r0Vr0W2/Mashriq-TV-Landing-Page-New.png"
              );
              setPopupAlt("AUSGlobal-Landing-Page-Combined-Image");
              setOpenPopup(true);
            }}
          />

          <Project
            project_link="https://virrgotech.com/"
            project_heading="Digital Agency"
            project_description="Built a dynamic All-in-one website for Digital Marketing Agency based in Lahore (Pakistan). Website has eye-striking look; sufficient for leads."
            tech_1="Wordpress"
            tech_link_1="https://wordpress.org/"
            tech_2="Elementor Pro"
            tech_link_2="https://elementor.com/pro/"
            tech_3="2020"
            tech_link_3="https://wordpress.org/themes/twentytwenty/"
            have_Two_Seprators
            popupOpener={() => {
              setPopupImage(
                "https://i.ibb.co/Cz7jY7t/Virrgo-Tech-Landing-Page-New.png"
              );
              setPopupAlt("VirrgoTech Landing Page ");
              setOpenPopup(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
