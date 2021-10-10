import {
  Card,
  Container,
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { Heading2, MuiDivider, SectionHeading } from "../../Mui/MuiComponents";
import ExpertProgress from "./ProgressBar";
import "./Expertise.css";
import getExpertise, { wpDevExpertise } from "../_files/__expertise";

const useStyles = makeStyles((theme) => ({
  expertiseSection: {
    marginTop: "5rem",
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
      padding: "0 24px",
    },
  },

  expertise: {
    padding: "0 1rem 1rem 1rem",
  },
}));

const Expertise = () => {
  const c = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const dynamicDelay = (d, t, m) => {
    if (!isTablet && !isMobile) {
      if (d) {
        return d;
      } else {
        return "300";
      }
    } else if (isTablet && !isMobile) {
      if (t) {
        return t;
      } else {
        return "300";
      }
    } else {
      if (m) {
        return m;
      } else {
        return "300";
      }
    }
  };

  const expertise = getExpertise(dynamicDelay);

  return (
    <div className={`expertiseSection ${c.expertiseSection}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="02">
          Tech stack and expertise
        </SectionHeading>
        <Grid container spacing={2} className="expertiseContent__container">
          {expertise.map((item) => (
            <ExpertiseItem
              title={item.title}
              progress={item.progress}
              data-aos={item.dataAOS}
              data-aos-delay={item?.dataAOS_delay}
              desc1={item.desc1}
              desc2={item.desc2}
            />
          ))}
        </Grid>

        <MuiDivider marginTop="38px" marginBottom="29px" width="50%" />

        <Grid container spacing={2} className="expertiseContent__container">
          {wpDevExpertise.map((item) => (
            <ExpertiseItem
              title={item.title}
              progress={item.progress}
              data-aos="fade-up"
              desc1={item.desc1}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const ExpertiseItem = ({ title, progress, desc1, desc2, ...rest }) => {
  const c = useStyles();
  const [showProgress, setShowProgress] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4} {...rest}>
      <Card
        className={`expertyCard ${c.expertise}`}
        elevation={1}
        onMouseEnter={() => {
          setInterval(() => {
            setShowProgress(true);
          }, 250);
        }}
      >
        <Heading2>{title}</Heading2>
        <div className="progressBar__wrapper">
          {showProgress && (
            <>{progress && <ExpertProgress progress={progress} />}</>
          )}
        </div>
        <ul>
          {desc1 && <li>{desc1}</li>}
          {desc2 && <li>{desc2}</li>}
        </ul>
      </Card>
    </Grid>
  );
};

export default Expertise;
