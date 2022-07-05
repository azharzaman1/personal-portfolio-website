import React from "react";
import { Grid } from "@material-ui/core";
import "./Expertise.css";
import {
  frontEndExpertise,
  mernExpertise,
  toolsAndLibraries,
} from "../_files/__expertise";
import SectionLayout from "../Layout/SectionLayout";
import LayoutContainer from "../Layout/LayoutContainer";
import { Heading2, Heading3, SectionHeading } from "../Generic/Theme";

const Expertise = () => {
  return (
    <SectionLayout className="expertiseSection">
      <LayoutContainer maxWidth="lg">
        <div id="expertise-section-scroll-anchor" />
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
        <Heading3
          className="expertiesGroup__heading"
          data-aos="fade-up"
          aos-data-delay={350}
        >
          {title}
        </Heading3>
      </Grid>
      <Grid item container justifyContent="space-evenly" spacing={1}>
        {data.map((item) => (
          <Grid key={item.order} item container justifyContent="center">
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
        <div className="expertiesItem mt-3 md:mt-2">
          <div className="exprtyItem__imageShadow">
            <div
              className={`expertiesItem__logoShape ${item.logoImg && "img"}`}
            >
              {item.logo && <item.logo className="h-16" />}
              {item.logoImg && (
                <img src={item.logoImg} alt={item?.logoAlt || "Logo"} />
              )}
            </div>
          </div>

          <div className="mt-3">
            <Heading2 dim small center>
              {item.title}
            </Heading2>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Expertise;
