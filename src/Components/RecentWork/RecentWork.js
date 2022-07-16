import React from "react";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  makeStyles,
} from "@material-ui/core";
import { ViewCarouselOutlined, GitHub } from "@material-ui/icons";
import { ReactComponent as Jotaro } from "../_files/assets/extlink.svg";
import { ReactComponent as WooLogo } from "../_files/assets/woo.svg";
import { ReactComponent as WPLogo } from "../_files/assets/wp.svg";
import { projects } from "../_files/__projects";
import LayoutContainer from "../Layout/LayoutContainer";
import SectionLayout from "../Layout/SectionLayout";
import Spacer from "../Generic/Spacer";
import Heading from "../Generic/Theme/Heading";
import "./RecentWork.css";
import Text from "../Generic/Theme/Text";

const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();
  return (
    <SectionLayout className={`portfolioSection`}>
      <LayoutContainer maxWidth="lg" className={classes.root}>
        <div className="mb-5">
          <div id="portfolio-section-scroll-anchor" />
          <Heading index="03" type="section">
            What I have built!
          </Heading>
        </div>

        <Grid container spacing={3} justifyContent="center" className="mt-6">
          {projects.map((project) => (
            <PortfolioProject
              project={project}
              key={project.key}
              data-aos="fade-up"
              data-aos-delay={400}
            />
          ))}
        </Grid>
      </LayoutContainer>
    </SectionLayout>
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
        <Card
          className={`recentWork__Card flex flex-col justify-start min-h-[350px] pt-4 px-4 ${className}`}
        >
          {!disabledHeader && (
            <Grid
              container
              className="pt-2 pb-0 px-4 max-h-[52px] flex items-center justify-between"
              justifyContent="space-between"
            >
              <Grid item>
                {project.logo === "wp" ? (
                  // wp project logo
                  <div className="flex space-x-1 items-center">
                    <WPLogo width="130px" className="h-[40px]" />
                    {project.wooLogo && <WooLogo />}
                  </div>
                ) : (
                  // coding-project
                  <img
                    src={project.logo}
                    alt={project.logoAlt}
                    className={project.logoClasses}
                  />
                )}
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
                          className="text-[#e2e2e29d] text-opacity-90"
                          fontSize="small"
                        />
                      </IconButton>
                    </a>
                  )}

                  {enableGallery && (
                    <IconButton>
                      <ViewCarouselOutlined
                        className="text-[#e2e2e29d] text-opacity-90"
                        fontSize="medium"
                      />
                    </IconButton>
                  )}

                  {project.src && (
                    <a href={project.src} target="_blank" rel="noreferrer">
                      <IconButton>
                        <Jotaro width="17px" />
                      </IconButton>
                    </a>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}

          <CardContent className="px-3 mt-2 border-t border-t-[#1456ad]">
            <Heading type="secondary">{project.title}</Heading>
            <Text className="mt-4">{project.desc}</Text>
          </CardContent>
          {project.techsLogos ? (
            <Grid
              container
              justifyContent="flex-start"
              alignItems="center"
              className="px-4 pb-3 mt-auto font-code border-t border-t-[#1456ad] space-x-2.5"
            >
              {project.techsLogos.map((tech, i) => (
                <Grid item key={Math.random() * i}>
                  <div className="h-5 flex items-center justify-center mt-3 cursor-pointer">
                    <Tooltip title={tech?.title} placement="top" arrow>
                      {tech.isImage ? (
                        <img src={tech.Logo} alt="." className="w-6" />
                      ) : (
                        tech.Logo
                      )}
                    </Tooltip>
                  </div>
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

/* 
  <Divider marginTop="45px" marginBottom="29px" width="33%" />
  <Grid container spacing={3} justifyContent="center" className="mt-3">
    {projectsWPDev.map((project) => (
      <PortfolioProject
        project={project}
        key={project.key}
        data-aos="fade-up"
        data-aos-delay={400}
        className="min-h-[280px]"
      />
    ))}
  </Grid> 
*/

export default RecentWork;
