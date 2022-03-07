import { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import TypeWriterEffect from "react-typewriter-effect";
import LayoutContainer from "../Layout/LayoutContainer";
import SectionLayout from "../Layout/SectionLayout";
import { MuiButton, SectionHeading } from "../../Mui/MuiComponents";
import myImage from "../../myPic.jpg";
// import "./About.css";

const About = () => {
  const [typeWriterRef, setTypeWriterRef] = useState();

  useEffect(() => {
    setTypeWriterRef(document.querySelector("#typeWritterRef"));
  }, []);

  return (
    <>
      <span id="about-section-scroll-anchor" className="bg-backgroundV1">
        .
      </span>
      <SectionLayout className={`aboutSection`}>
        <LayoutContainer maxWidth="lg">
          <SectionHeading type="2" aosDelay={800}>
            Hi, its
          </SectionHeading>
          <Grid container justifyContent="space-around" alignItems="center">
            {/* right */}
            <Grid item container xs={12} sm={6} justifyContent="center">
              <Grid item xs={12}>
                <Typography
                  className="opacity-0 text-textBright select-none mb-8"
                  variant="h3"
                  data-aos="fade-up"
                  data-aos-duration="750"
                  data-aos-delay="1250"
                >
                  Azhar Zaman
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                id="typeWritterRef"
                className="mt-6"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="1500"
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
                    "Intermediate level JavaScript developer",
                    "Proficient ReactJs developer",
                    "Advance Wordpress expert",
                    "eCommerce development expert",
                  ]}
                />
              </Grid>

              <Grid item xs={12} className="mt-5">
                <p
                  data-aos="fade-up"
                  data-aos-duration="750"
                  data-aos-delay="1750"
                  className="font-sans font-normal text-base max-w-lg mt-3 mb-5"
                >
                  I'm working as full time Developer since early 2019,
                  specializing in some of the powerful and trending web
                  technologies like React(Hooks - Redux), NextJs(SSR - SSG -
                  ISG) JavaScript(ES6+), Material UI, HTML/CSS etc. I can build
                  and design exceptional websites on every niche, web
                  applications, custom themes & interfaces, eCommerce stores
                  with custom functionalaities.
                </p>
              </Grid>
              <Grid
                item
                container
                xs={12}
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="2000"
              >
                <Grid item>
                  <MuiButton link="https://api.whatsapp.com/send?phone=+923170460466">
                    Get in touch
                  </MuiButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={6}
              className="justify-center md:justify-end pt-16 md:mt-0"
            >
              <Grid item>
                <div className="aboutPicBorder">
                  <img
                    className="rounded-2xl p-0.5 rounded-bl-none border-2 border-gray-500  saturate-0 hover:saturate-100 transition-all duration-200 opacity-0 scale-80 animate-scaleIn"
                    src={myImage}
                    width="275px"
                    alt="My Pic"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </LayoutContainer>
      </SectionLayout>
    </>
  );
};

export default About;
