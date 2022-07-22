import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { projects } from "../_files/__projects";
import LayoutContainer from "../Layout/LayoutContainer";
import SectionLayout from "../Layout/SectionLayout";
import Heading from "../Generic/Theme/Heading";
import ProjectCard from "./ProjectCard";
import "./RecentWork.css";

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
            <ProjectCard
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
