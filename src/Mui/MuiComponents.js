import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import React from "react";
import "./MuiComponents.css";

const useStyles = makeStyles((theme) => ({
  // MuiButton: {
  //   border: `2px solid ${theme.palette.secondary.main}`,
  // },
}));

export const SectionHeading = ({ children, number, type, className }) => {
  return (
    <Typography
      variant="h3"
      className={`MuiHeading ${className} ${!type && "type1"} ${
        type === "2" && "type2"
      }`}
    >
      {number && <span>{number}-</span>} {children}
    </Typography>
  );
};

export const Heading2 = ({ children, className }) => {
  return <h4 className={`MuiHeading2 ${className}`}>{children}</h4>;
};

export const MuiButton = ({ children, variant, size, color, fontSize }) => {
  const c = useStyles();
  return (
    <Button
      className={`MuiButton ${fontSize === "small" && "fs"}`}
      color={!color ? "secondary" : color}
      variant={!variant ? "outlined" : variant}
      size={!size ? "large" : size}
    >
      {children}
    </Button>
  );
};

export const RSAnchor = ({ target }) => {
  return (
    <span id={target} style={{ marginTop: "4rem" }}>
      .
    </span>
  );
};
