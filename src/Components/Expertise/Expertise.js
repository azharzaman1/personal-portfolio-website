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

const Expertise = () => {
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
        <ExpertiseGroup title="MERN" data={mernExpertise} />
        <ExpertiseGroup title="Front End" data={frontEndExpertise} />
        <ExpertiseGroup title="Tools and Libraries" data={toolsAndLibraries} />
      </LayoutContainer>
    </SectionLayout>
  );
};

const ExpertiseGroup = ({ title, data }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className="expertiesGroup"
    >
      <Grid item>
        <Heading3 className="expertiesGroup__heading">{title}</Heading3>
      </Grid>
      <Grid item container justifyContent="space-evenly">
        {data.map((item, i) => (
          <Grid key={i} item container justifyContent="center">
            {item.map((item) => (
              <ExpertiseItem
                key={item.order}
                item={item}
                data-aos="fade-up"
                aos-data-delay={350}
              />
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const ExpertiseItem = ({ item, ...rest }) => {
  return (
    <Grid item container xs={6} sm={4} md={3} justifyContent="center" {...rest}>
      <Grid item>
        <div className="expertiesItem">
          <div className="exprtyItem__imageShadow">
            <div
              className={`expertiesItem__logoShape ${item.logoImg && "img"}`}
            >
              {item.logo && <item.logo />}
              {item.logoImg && (
                <img src={item.logoImg} alt={item?.logoAlt || "Logo"} />
              )}
            </div>
          </div>

          <div className="mt-3">
            <Heading2 dim small>
              {item.title}
            </Heading2>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Expertise;
