import React from "react";
import { Button, Chip, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./ThemeComponents.css";

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
  aosDelay,
  className,
}) => {
  return (
    <Typography
      variant="h3"
      className={`MuiHeading ${!type && "font-code font-normal"} ${
        type === "2" && "font-sans text-lg tracking-wide ml-1 font-normal"
      } ${className}`}
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-delay={aosDelay ? aosDelay : "0"}
    >
      {number && (
        <span className="text-inherit font-medium font-code">{number}-</span>
      )}{" "}
      {children}
    </Typography>
  );
};

export const Heading2 = ({
  children,
  dim,
  small,
  center,
  className,
  ...rest
}) => {
  return (
    <h4
      className={`text-textBright font-sans text-xs md:text-sm lg:text-base ${className} ${
        dim && "text-textDim"
      } ${small && "text-sm"} ${center && "text-center"}`}
      {...rest}
    >
      {children}
    </h4>
  );
};

export const Heading3 = ({ children, className, ...rest }) => {
  return (
    <h2 className={`text-textBright text-xl font-sans ${className}`} {...rest}>
      {children}
    </h2>
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
