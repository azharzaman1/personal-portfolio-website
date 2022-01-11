import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MuiButton, SectionHeading } from "../../Mui/MuiComponents";
import myImage from "../../myPic.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import "./About.css";
import { useRef } from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    marginTop: "9.25rem",
    marginBottom: "7rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7rem",
    },
  },

  root: {
    padding: "0 150px",
    [theme.breakpoints.down("lg")]: {
      padding: "0 125px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 16px",
    },
  },

  typeWritterContainer: {
    marginTop: "0.75rem",
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
  const [typeWriterRef, setTypeWriterRef] = useState();

  useEffect(() => {
    setTypeWriterRef(document.querySelector("#typeWritterRef"));
  }, []);

  return (
    <>
      <span id="about-section-scroll-anchor">Hy</span>
      <div className={`aboutSection ${c.aboutSection}`}>
        <Container maxWidth="lg" className={c.root}>
          <SectionHeading type="2" aosDelay="800" className="aboutTagline">
            Hi, its
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

              <Grid
                item
                xs={12}
                className={c.typeWritterContainer}
                id="typeWritterRef"
              >
                <TypeWriterEffect
                  cursorColor="#ec4884"
                  startDelay={2000}
                  multiTextDelay={1000}
                  typeSpeed={60}
                  scrollArea={typeWriterRef}
                  multiTextLoop
                  textStyle={{
                    fontFamily: "Roboto",
                    color: "#f06196",
                    fontWeight: 500,
                    fontSize: "1.5em",
                    textDecoration: "underline",
                  }}
                  multiText={[
                    "A mid level JavaScript developer",
                    "Proficient ReactJs developer",
                    "Advance Wordpress expert",
                    "eCommerce development expert",
                  ]}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <h4 className="aboutSkill anim3">
                  Front-end-developer(React - Js)
                </h4>
              </Grid>
              <Grid item xs={12}>
                <h4 className="aboutSkill anim4">
                  Wordpress Development Expert
                </h4>
              </Grid> */}

              <Grid item xs={12}>
                <p className="aboutDesc anim5">
                  I'm working as full time Developer since early 2019,
                  specializing in some of the powerful and trending web
                  technologies like React(Hooks - Redux), NextJs(SSR - SSG -
                  ISG) JavaScript(ES6+), Material UI, HTML/CSS etc. I can build
                  and design exceptional websites on every niche, web
                  applications, custom themes & interfaces, eCommerce stores
                  with custom functionalaities.
                </p>
              </Grid>
              <Grid item container className={c.buttonContainer} xs={12}>
                <Grid item className="aboutButton anim6">
                  <MuiButton link="https://api.whatsapp.com/send?phone=+923170460466">
                    Get in touch
                  </MuiButton>
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
                <img
                  className="aboutPic"
                  src={myImage}
                  width="275px"
                  alt="My Pic"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default About;
