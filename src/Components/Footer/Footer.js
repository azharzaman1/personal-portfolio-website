import { Grid } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div className="footerSection">
      <Grid container direction="column">
        <Grid>Top</Grid>
        <Grid>Bottom</Grid>
      </Grid>
    </div>
  );
};

export default Footer;
