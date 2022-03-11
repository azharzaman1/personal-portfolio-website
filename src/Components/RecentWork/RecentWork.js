import React from "react";
import {
  Container,
  Grid,
  Card,
  makeStyles,
  CardContent,
  IconButton,
} from "@material-ui/core";
import { ViewCarouselOutlined, GitHub } from "@material-ui/icons";
import {
  Heading2,
  MuiDivider,
  SectionHeading,
  Spacer,
} from "../../Mui/MuiComponents";
import { ReactComponent as Jotaro } from "./assets/extlink.svg";
import { ReactComponent as WooLogo } from "./assets/woo.svg";
import { ReactComponent as WPLogo } from "./assets/wp.svg";
import { projects, projectsWPDev } from "../_files/__projects";
import "./RecentWork.css";

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
              project={project}
              data-aos="fade-up"
              data-aos-delay={350}
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
              project={project}
              key={project.order}
              className="cms-dev-projects-card"
              data-aos="fade-up"
              data-aos-delay={350}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const PortfolioProject = ({
  project,
  enableGallery,
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
                {project.logo === "wp" ? (
                  <WPLogo
                    width={project.wooLogo ? "110px" : "150px"}
                    className="recentWork__cardWpLogo"
                  />
                ) : (
                  <img
                    src={project.logo}
                    alt={project.logoAlt}
                    height={project.logoHeight ? project.logoHeight : "30px"}
                    style={{ transform: `translateY(-${project.translateY})` }}
                  />
                )}

                {project.wooLogo && <WooLogo />}
              </Grid>
              <Grid
                item
                xs
                container
                justifyContent="flex-end"
                style={{ transform: "translateY(-8px)" }}
              >
                <Grid item>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
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

                  {project.src && (
                    <a href={project.src} target="_blank" rel="noreferrer">
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
            <Heading2 className="recentWork__cardTitle">
              {project.title}
            </Heading2>
            <p>{project.desc}</p>
          </CardContent>
          {project.techs ? (
            <Grid
              container
              justifyContent="space-evenly"
              className="recentWork__cardTechs"
            >
              {project.techs.map((tech, i) => (
                <Grid item key={i}>
                  <p>{tech}</p>
                </Grid>
              ))}
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
