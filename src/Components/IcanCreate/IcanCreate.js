import React, { useState } from "react";
import { Card, Container, Grid, makeStyles } from "@material-ui/core";
import { Heading2, SectionHeading } from "../../Mui/MuiComponents";
import amazon from "./Amazon.PNG";
import ebay from "./eBay.PNG";
import "./IcanCreate.css";
import ImageComparison from "./ImageComparison";

// `

const useStyles = makeStyles((theme) => ({
  iCanCreateSection: {
    marginTop: "12rem",
    marginBottom: "12rem",
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

  iCanCreateCard: {
    paddingBottom: "1rem",
  },
}));

const IcanCreate = () => {
  const c = useStyles();

  return (
    <div className={`iCanCreateSection ${c.iCanCreateSection}`}>
      <Container className={c.root} maxWidth="lg">
        <SectionHeading type="2" number="03">
          I can build for you!
        </SectionHeading>
        <Grid container spacing={2} className="expertiseContent__container">
          <ICanCreateCard
            title="Multi-vendor Marketplace like Amazon | eBay"
            imgUrl1={amazon}
            imgUrl2={ebay}
          />
          <ICanCreateCard
            title="Fully-functional eCommerce Store"
            imgUrl1={amazon}
            imgUrl2={ebay}
          />
        </Grid>
      </Container>
    </div>
  );
};

const ICanCreateCard = ({ title, imgUrl1, imgUrl2, imgAlt1, imgAlt2 }) => {
  const c = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card elevation={1} className={`iCanCreateCard ${c.iCanCreateCard}`}>
        <ImageComparison
          imgUrl1={imgUrl1}
          imgUrl2={imgUrl2}
          imgAlt1={imgAlt1}
          imgAlt2={imgAlt2}
        />
        <Heading2>{title}</Heading2>
      </Card>
    </Grid>
  );
};

export default IcanCreate;
