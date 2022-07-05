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
import Heading from "../Generic/Theme/Heading";
import Text from "../Generic/Theme/Text";

const Expertise = () => {
  return (
    <SectionLayout className="expertiseSection">
      <LayoutContainer maxWidth="lg">
        <div id="expertise-section-scroll-anchor" />
        <Heading type="section" index="02">
          Tech stack and expertise
        </Heading>
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
        <Heading className="mb-8" data-aos="fade-up" aos-data-delay={350}>
          {title}
        </Heading>
      </Grid>
      <Grid item container justifyContent="space-evenly" spacing={1}>
        {data.map((item, i) => (
          <Grid key={i} item container justifyContent="center">
            {/* passing index as key coz, data is not going to be changed - safe */}
            {item.map((item, ind) => (
              <ExpertiseItem
                key={ind}
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
            <Text type="heading" center>
              {item.title}
            </Text>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Expertise;
