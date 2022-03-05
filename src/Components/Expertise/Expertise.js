import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Heading2, Heading3, SectionHeading } from "../../Mui/MuiComponents";
import "./Expertise.css";
import {
  frontEndExpertise,
  mernExpertise,
  toolsAndLibraries,
} from "../_files/__expertise";
import SectionLayout from "../Layout/SectionLayout";
import LayoutContainer from "../Layout/LayoutContainer";

const useStyles = makeStyles({
  group: {
    marginTop: "3rem",
  },
});

const Expertise = () => {
  const classes = useStyles();
  const formatExpertise = (expertise) => {
    // breaking stuff
    let tempExpertise = [...expertise];
    const result = [];
    for (var i = 1; i < tempExpertise.length; i++) {
      let temporary = tempExpertise.slice(0, i);
      tempExpertise = tempExpertise.slice(temporary.length);

      result.push(temporary);

      if (i < tempExpertise.length) {
      } else {
        result.push(tempExpertise);
      }
    }

    return result;
  };

  console.log(toolsAndLibraries);
  console.log("h,", formatExpertise(toolsAndLibraries));

  return (
    <SectionLayout className="expertiseSection">
      <LayoutContainer maxWidth="lg">
        <SectionHeading type="2" number="02">
          Tech stack and expertise
        </SectionHeading>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.group}
        >
          <Grid item>
            <Heading3>MERN Stack</Heading3>
          </Grid>
          <Grid item container spacing={2} justifyContent="space-evenly">
            {formatExpertise(mernExpertise).map((item, i) => (
              <Grid key={i} item container justifyContent="center">
                {item.map((item) => (
                  <ExpertiseItem key={item.order} item={item} />
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* <MuiDivider marginTop="50px" marginBottom="25px" width="30%" /> */}

        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.group}
        >
          <Grid item>
            <Heading3>Front End Development</Heading3>
          </Grid>
          <Grid item container spacing={2} justifyContent="space-evenly">
            {formatExpertise(frontEndExpertise).map((item, i) => (
              <Grid key={i} item container justifyContent="center">
                {item.map((item) => (
                  <ExpertiseItem key={item.order} item={item} />
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* <MuiDivider marginTop="50px" marginBottom="25px" width="30%" /> */}

        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.group}
        >
          <Grid item>
            <Heading3>Tools and Libraries</Heading3>
          </Grid>
          <Grid item container spacing={2} justifyContent="space-evenly">
            {formatExpertise(toolsAndLibraries).map((item, i) => (
              <Grid key={i} item container justifyContent="center">
                {item.map((item) => (
                  <ExpertiseItem key={item.order} item={item} />
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </LayoutContainer>
    </SectionLayout>
  );
};

const ExpertiseItem = ({ item, ...rest }) => {
  return (
    <Grid item container xs={6} sm={4} md={3} justifyContent="center">
      <Grid item>
        <div className="expertiesItem">
          <div className="exprtyItem__imageShadow">
            <div className="expertiesItem__logoShape">
              <item.logo />
            </div>
          </div>

          <div className="mt-3">
            <Heading2>{item.title}</Heading2>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Expertise;
