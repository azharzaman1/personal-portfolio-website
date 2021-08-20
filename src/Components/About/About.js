import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MuiButton, SectionHeading } from "../../Mui/MuiComponents";
import myImage from "../../myPic3.png";
import "./About.css";

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    marginTop: "9.25rem",
    marginBottom: "7rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7rem",
    },
  },

  root: {
    padding: "0 14px",
    [theme.breakpoints.up("xs")]: {
      padding: "0 24px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0 150px",
    },
  },

  buttonContainer: {
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  right: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingTop: "35px",
    },
  },
}));

const About = () => {
  const c = useStyles();

  return (
    <>
      <span id="about-section-scroll-anchor">Hy</span>
      <div className={`aboutSection ${c.aboutSection}`}>
        <Container maxWidth="lg" className={c.root}>
          <SectionHeading type="2" className="aboutTagline anim1">
            Hi, my name is
          </SectionHeading>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid
              item
              container
              xs={12}
              sm={6}
              justifyContent="center"
              className={c.left}
            >
              <Grid item xs={12}>
                <Typography className="aboutName anim2" variant="h3">
                  Azhar Zaman
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <h4 className="aboutSkill anim3">
                  Front-end-developer(React - Js)
                </h4>
              </Grid>
              <Grid item xs={12}>
                <h4 className="aboutSkill anim4">Advance Wordpress Expert</h4>
              </Grid>
              <Grid item xs={12}>
                <p className="aboutDesc anim5 ">
                  I'm working as full time Developer since March 2019,
                  specializing in some of the powerful and trending Web
                  Technologies like React(Redux), JavaScript(ES6+), Material UI,
                  HTML/CSS etc. I can build and design exceptional websites on
                  every niche, web applications, custom themes & interfaces,
                  eCommerce stores with custom functionalaities.
                </p>
              </Grid>
              <Grid item container className={c.buttonContainer} xs={12}>
                <Grid item className="aboutButton anim6">
                  <MuiButton>Get in touch</MuiButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              className={c.right}
              item
              container
              xs={12}
              sm={6}
              justifyContent="flex-end"
            >
              <Grid item>
                <img className="aboutPic" src={myImage} width="275px" />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default About;
