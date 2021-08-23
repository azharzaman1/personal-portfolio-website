import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Heading2, MuiChip } from "../../Mui/MuiComponents";
import { Facebook, GitHub, Twitter } from "@material-ui/icons";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    marginTop: "8rem",
    padding: "1rem",
  },
}));

const Footer = () => {
  const c = useStyles();
  return (
    <div className={`footerSection ${c.footerSection}`}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Heading2 className="footerSection__heading">
            Design and developed by Azhar Zaman
          </Heading2>
        </Grid>
        <Grid item container justifyContent="center">
          <MuiChip
            link="https://github.com/DrAzharZaman"
            title="Github"
            icon={<GitHub fontSize="small" />}
          />
          <MuiChip
            link="https://web.facebook.com/DrAzharZaman1/"
            title="Facebook"
            icon={<Facebook fontSize="small" />}
          />
          <MuiChip
            link="https://twitter.com/DrAzharZaman"
            title="Twitter"
            icon={<Twitter fontSize="small" />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
