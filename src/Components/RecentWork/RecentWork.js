import React from "react";
import {
  Container,
  Grid,
  Card,
  makeStyles,
  CardContent,
  IconButton,
} from "@material-ui/core";
import {
  Heading2,
  MuiDivider,
  SectionHeading,
  Spacer,
} from "../../Mui/MuiComponents";
import "./RecentWork.css";
import { assets } from "./assets/assets";
import { ReactComponent as Jotaro } from "./assets/extlink.svg";
import { ViewCarouselOutlined, GitHub } from "@material-ui/icons";
import { ReactComponent as WooLogo } from "./assets/woo.svg";
import { ReactComponent as WPLogo } from "./assets/wp.svg";

const useStyles = makeStyles((theme) => ({
  portfolioSection: {
    marginTop: "5rem",
    marginBottom: "7rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7rem",
    },
  },

  root: {
    padding: "0 125px",
    [theme.breakpoints.down("lg")]: {
      padding: "0 75px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 24px",
    },
  },
}));

const RecentWork = () => {
  const c = useStyles();

  return (
    <div className={`portfolioSection ${c.portfolioSection}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="03">
          What I have built!
        </SectionHeading>
        <Grid container spacing={3} className="recentWork__contentSection">
          <PortfolioProject
            data-aos="fade-up"
            data-aos-delay="500"
            logo={assets.TrackerLogo}
            logoAlt="Tracker Logo"
            logoHeight="50px"
            translateY="12px"
            github="https://github.com/TheAzharZaman/Covid-tacker-portfolio"
            src="https://azhar-covidtracker.ga/"
            title="Covid-19 Tracker"
            desc="Built a fully functional COVID-19 Tracker with React using latest web  technologies like Material UI, React leaflet, ChartJs as main UI components. This specific Covid tracker finds its realtime database from 'disease.sh' using Live API calls. Also it uses Firebase as a database and Authentication functionalities."
            tech1="reactjs"
            tech2="react-chartjs"
            tech3="firebase"
          />
          <PortfolioProject
            data-aos="fade-up"
            data-aos-delay="500"
            logo={assets.AmazonLogo}
            logoAlt="Amazon Logo"
            github="https://github.com/TheAzharZaman/Full-Stack-Amazon-Clone.git"
            src="https://azhar-amazonclone.ga/"
            title="Full-featured Amazon clone"
            desc="I have recently completed Amazon Demo Clone build with React, with full eCommerce functionalities like add & remove to Cart, add address, Checkout Payment via Stripe, add products, add categories and much more. This Amazon clone is using Firebase firestore as realtime Database to store user details, addresses, order stats etc."
            tech1="reactjs"
            tech2="redux"
            tech3="firebase"
          />
          <PortfolioProject
            data-aos="fade-up"
            data-aos-delay="500"
            logo={assets.MyLogo}
            logoAlt="My Logo"
            github="https://github.com/TheAzharZaman/personal-portfolio-website.git"
            src="https://azharzaman.com"
            logoHeight="37px"
            translateY="8px"
            title="Personal Portfolio Site"
            desc="This website is built with React with its descent UI. I have used CSS(SASS) for styling purposes. Making this website simple but expressive was my first priority. And I guess it meets all the requirements of elegant design website. There is always room for improvement. Your contribution would be a great favour."
            tech1="reactjs"
            tech2="material-ui"
            tech3="aos"
          />
          <PortfolioProject
            data-aos="fade-up"
            logo={assets.GoogleLogo}
            logoAlt="Google Logo"
            logoHeight="35px"
            github="https://github.com/TheAzharZaman/Google-portfolio-clone.git"
            src="https://azhar-googleclone.ga/"
            title="Functional Google clone"
            desc="Built a fully functional Google Clone with React finding its real-time database from the original Google server. This clone is full of functinalites including React Router, React Hooks and React Context API. Material UI is serving as a design library. This clone is super responsive fit for every device size."
            tech1="reactjs"
            tech2="material-ui"
            tech3="firebase"
          />

          <PortfolioProject
            data-aos="fade-up"
            logo={assets.NetflixLogo}
            logoAlt="Netflix Logo"
            logoHeight="35px"
            translateY="3.5px"
            github="https://github.com/TheAzharZaman/Netflix-Portfolio-Clone.git"
            src="https://azhar-netflixclone.ga/"
            title="Basic Netflix Clone"
            desc="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and more on thousands of internet-connected devices. I decided to build it with react and used tmdb as realtime movie database. It fetch movies from tmdb and trailers when clicked from youtube with a special 'youtube-trailer' functionality."
            tech1="reactjs"
            tech2="tmdb-api"
            tech3="yt-trailers"
          />

          <PortfolioProject
            data-aos="fade-up"
            logo={assets.CVALogo}
            logoAlt="Company Virtual Assitant Logo"
            logoHeight="35px"
            translateY="5.5px"
            github="https://github.com/TheAzharZaman/Comany-Virtual-Assistant.git"
            src="https://virtual-assistant-application.netlify.app/"
            title="Company virtual assistant (In progress)"
            desc="Aiming to build complete virtual assitant application with React using latest web  technologies like Material UI, React leaflet, ChartJs as main UI components. It uses Google Firebase as a realtime database and Authentication setup functionalities. The build is still in progress, but you can have a look at by clicking external icon above. "
            tech1="reactjs"
            tech2="material-ui"
            tech3="firebase"
          />
        </Grid>

        <MuiDivider marginTop="45px" marginBottom="29px" width="37%" />
        <Grid container spacing={3} className="recentWork__contentSection">
          <PortfolioProject
            data-aos="fade-up"
            logo="wp"
            wooLogo
            src="https://peeeko.com"
            title="Multi-vendor Marketplace | Peeeko"
            desc="Peeeko.com is the First Pakistani Online Multi-Vendor Marketplace, specially designed for Females in all aspects. This marketplace forms a One Window Solution to serve all Needs of Females of All Ages. With a 90% Women Employment Policy, this platform gather Vendors, Manufacturers and Importers of various Products and Services."
          />

          <PortfolioProject
            data-aos="fade-up"
            logo="wp"
            src="https://plannative.com"
            title="Agency Bussiness Site | PlanNative"
            desc="Plan Native is a Multinational Business Process Outsourcing Company of Professional Accountants, CPAs, HR Specialists, IT Experts, Business Consultants and Growth Strategists, who have been providing One Window Business Solutions and Advisory Services to clients around the globe since many years."
          />

          <PortfolioProject
            data-aos="fade-up"
            logo="wp"
            src="http://ausglobalgroup.com/"
            title="Construction Company Site | AusGlobal"
            desc="AUSGLOBAL GROUP is an international company with head offices in Perth – Australia, and other branches in Tianjin – China and Hong Kong. Experts in commercial and residential construction and and in creating opportunities for real estate investment for local and foreign investors."
          />
        </Grid>
      </Container>
    </div>
  );
};

const PortfolioProject = ({
  logo,
  wooLogo,
  logoHeight,
  translateY,
  logoAlt,
  github,
  src,
  enableGallery,
  title,
  desc,
  tech1,
  tech2,
  tech3,
  disabledHeader,
  ...rest
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} {...rest}>
        <Card className="recentWork__card">
          {!disabledHeader && (
            <Grid
              container
              className="recentWork__cardHeader"
              justifyContent="space-between"
            >
              <Grid item>
                {logo === "wp" ? (
                  <WPLogo
                    width={wooLogo ? "110px" : "150px"}
                    className="recentWork__cardWpLogo"
                  />
                ) : (
                  <img
                    src={logo}
                    alt={logoAlt}
                    height={logoHeight ? logoHeight : "30px"}
                    style={{ transform: `translateY(-${translateY})` }}
                  />
                )}

                {wooLogo && <WooLogo />}
              </Grid>
              <Grid
                item
                xs
                container
                justifyContent="flex-end"
                style={{ transform: "translateY(-8px)" }}
              >
                <Grid item>
                  {github && (
                    <a href={github} target="_blank" rel="noreferrer">
                      <IconButton>
                        <GitHub
                          className="recentWork__cardIcons"
                          fontSize="small"
                        />
                      </IconButton>
                    </a>
                  )}

                  {enableGallery && (
                    <IconButton>
                      <ViewCarouselOutlined
                        className="recentWork__cardIcons"
                        fontSize="medium"
                      />
                    </IconButton>
                  )}

                  {src && (
                    <a href={src} target="_blank" rel="noreferrer">
                      <IconButton>
                        <Jotaro
                          className="recentWork__cardIcons"
                          width="17px"
                        />
                      </IconButton>
                    </a>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}

          <CardContent className="recentWork__cardBody">
            <Heading2 className="recentWork__cardTitle">{title}</Heading2>
            <p>{desc}</p>
          </CardContent>
          {tech1 ? (
            <Grid
              container
              justifyContent="space-evenly"
              className="recentWork__cardTechs"
            >
              <Grid item>
                <p>{tech1}</p>
              </Grid>
              <Grid item>
                <p>{tech2}</p>
              </Grid>
              <Grid item>
                <p>{tech3}</p>
              </Grid>
            </Grid>
          ) : (
            <Spacer height="8px" />
          )}
        </Card>
      </Grid>
    </>
  );
};

export default RecentWork;
