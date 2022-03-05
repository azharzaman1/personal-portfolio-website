import { Container as MuiContainer, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
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
}));

const LayoutContainer = ({ children, className, ...rest }) => {
  const c = useStyles();
  return (
    <MuiContainer className={`${className} ${c.root}`} maxWidth="lg" {...rest}>
      {children}
    </MuiContainer>
  );
};

export default LayoutContainer;
