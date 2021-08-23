import React from "react";
import { Button, Chip, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./MuiComponents.css";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: "0 5px",
    padding: "0 5px",
  },
}));

export const SectionHeading = ({
  children,
  number,
  type,
  className,
  aosDelay,
}) => {
  return (
    <Typography
      variant="h3"
      className={`MuiHeading ${className} ${!type && "type1"} ${
        type === "2" && "type2"
      }`}
      data-aos="fade-up"
      data-aos-delay={aosDelay ? aosDelay : "0"}
      data-aos-duration="900"
    >
      {number && <span>{number}-</span>} {children}
    </Typography>
  );
};

export const Heading2 = ({ children, className }) => {
  return <h4 className={`MuiHeading2 ${className}`}>{children}</h4>;
};

export const MuiButton = ({
  children,
  variant,
  size,
  color,
  fontSize,
  link,
  className,
  icon,
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Button
        className={`MuiButton ${className} ${fontSize === "small" && "fs"}`}
        color={!color ? "secondary" : color}
        variant={!variant ? "outlined" : variant}
        size={!size ? "large" : size}
        startIcon={icon}
      >
        {children}
      </Button>
    </a>
  );
};

export const RSAnchor = ({ target }) => {
  return (
    <span id={target} style={{ marginTop: "4rem" }}>
      .
    </span>
  );
};

export const MuiDivider = ({
  marginTop,
  marginBottom,
  width,
  color,
  orientation,
}) => {
  return (
    <Divider
      data-aos="fade"
      data-aos-delay="1000"
      data-aos-duration="100"
      orientation={orientation}
      style={{
        margin: "0 auto",
        backgroundColor: color ? color : "rgba(255,255,255,0.25)",
        width: width ? width : "50%",
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    />
  );
};

export const Spacer = ({ height }) => {
  return (
    <div
      className="spacer"
      style={{
        height: height ? height : "10px",
      }}
    />
  );
};

export const MuiChip = ({
  title,
  icon,
  size,
  unclickable,
  color,
  variant,
  link,
}) => {
  const c = useStyles();
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Chip
        label={title}
        icon={icon}
        size={size ? size : "medium"}
        clickable={unclickable ? false : true}
        color={color ? color : "secondary"}
        variant={variant ? variant : "outlined"}
        className={`${c.chip}`}
      />
    </a>
  );
};

// const MuiPopup = ({ open, closePopup, children }) => {
//   return (
//     <Dialog
//       open={open
//       className="projectsImage__popup"
//       maxWidth="lg"
//       scroll="paper"
//     >
//       <Close
//         className="projectsImage__popupClose"
//         id="projectsImage__popupClose"
//         onClick={closePopup}
//       />
//       {children}
//     </Dialog>
//   );
// };
