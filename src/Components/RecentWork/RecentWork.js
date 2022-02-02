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
import { projects, projectsWPDev } from "../_files/__projects";

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
        <Grid
          container
          spacing={3}
          className="recentWork__contentSection"
          justifyContent="center"
        >
          {projects.map((project) => (
            <PortfolioProject
              key={project.order}
              data-aos={project.dataAOS}
              data-aos-delay={project?.dataAosDelay}
              logo={project.logo}
              logoAlt={project.logoAlt}
              logoHeight={project?.logoHeight}
              translateY={project?.translateY}
              github={project.github}
              src={project.src}
              title={project.title}
              desc={project.desc}
              tech1={project.tech1}
              tech2={project.tech2}
              tech3={project.tech3}
            />
          ))}
        </Grid>

        <MuiDivider marginTop="45px" marginBottom="29px" width="37%" />

        <Grid
          container
          spacing={3}
          justifyContent="center"
          className="recentWork__contentSection"
        >
          {projectsWPDev.map((project) => (
            <PortfolioProject
              key={project.order}
              data-aos={project.dataAOS}
              logo={project.logo}
              wooLogo={project.wooLogo}
              src={project.src}
              title={project.title}
              desc={project.desc}
              className="cms-dev-projects-card"
            />
          ))}
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
  className,
  ...rest
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} {...rest}>
        <Card className={`recentWork__card ${className}`}>
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
