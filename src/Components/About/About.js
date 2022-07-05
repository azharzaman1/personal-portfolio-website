import { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TypeWriterEffect from "react-typewriter-effect";
import "./About.css";
import SectionLayout from "../Layout/SectionLayout";
import myImage from "../../myPic.jpg";
import { SectionHeading } from "../Generic/Theme";
import Button from "../Generic/Theme/Button";

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    marginTop: "10rem",
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
    marginBottom: "0.75rem",
  },

  buttonContainer: {
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  left: {
    paddingTop: 10,
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingTop: 35,
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const [typeWriterRef, setTypeWriterRef] = useState();

  useEffect(() => {
    setTypeWriterRef(document.querySelector("#typeWritterRef"));
  }, []);

  return (
    <>
      <span id="about-section-scroll-anchor" className="bg-backgroundV1">
        .
      </span>
      <SectionLayout className={`aboutSection ${classes.aboutSection}`}>
        <Container maxWidth="lg" className={classes.root}>
          <SectionHeading
            type="2"
            aosDelay="800"
            className="aboutTagline opacity-0 -translate-y-9 ml-1"
          >
            Hi, its
          </SectionHeading>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid
              item
              container
              xs={12}
              sm={6}
              justifyContent="center"
              className={classes.left}
            >
              <Grid item xs={12}>
                <Typography
                  className="aboutName opacity-0 -translate-y-9 text-textBright mt-2.5 anim2"
                  variant="h3"
                >
                  Azhar Zaman
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                className={classes.typeWritterContainer}
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
                    "JavaScript developer",
                    "ReactJs developer",
                    "MERN Stack developer",
                    "Love to create things for web!",
                  ]}
                />
              </Grid>

              <Grid item xs={12}>
                <p className="aboutDesc opacity-0 -translate-y-9 leading-6 max-w-lg text-sm md:text-[15px] font-normal font-sans anim5">
                  I am frontend and MERN stack developer, specializing in some
                  of the powerful and trending web technologies like JavaScript,
                  ReactJs, NextJs, NodeJs, MongoDB etclasses. I build and design
                  exceptional websites on every niche, web applications, custom
                  themes & interfaces, eCommerce stores with custom
                  functionalities.
                </p>
              </Grid>
              <Grid item container className={classes.buttonContainer} xs={12}>
                <Grid item className="opacity-0 -translate-y-9 anim6">
                  <a
                    href="https://api.whatsapp.com/send?phone=+923170460466"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>Get in touch</Button>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              className={classes.right}
              item
              container
              xs={12}
              sm={6}
              justifyContent="flex-end"
            >
              <Grid item>
                <img
                  className="aboutPic w-[300px] sm:w-[250px] lg:w-[275px] rounded-2xl rounded-bl-none opacity-0 saturate-0 hover:saturate-100 p-0.5 border-2 border-gray-500 animate-scaleIn transition-all duration-300"
                  src={myImage}
                  alt="My Pic"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </SectionLayout>
    </>
  );
};

export default About;
