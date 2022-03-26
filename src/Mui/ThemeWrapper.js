import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";

const ThemeWrapper = ({ children, theme }) => {
  const colorTheme = createTheme({
    palette: {
      primary: {
        dark: "#03045E",
        main: "#023E8A",
        light: "#0077B6",
      },
      secondary: {
        main: "#ec4884",
        light: "#f06196",
        dark: "#e23173",
      },

      background: {
        default: "#03045E",
        paper: "#023E8A",
      },
    },
    shape: {
      borderRadius: "3px",
    },
    overrides: {
      MuiAppBar: {
        root: {
          boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.1)",
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: "rgba(255,255,255,0.3)",
          marginBottom: "0",
        },
      },
      MuiButton: {
        root: {
          textTransform: "inherit",
        },
      },
      MuiFilledInput: {
        root: {
          backgroundColor: "rgba(250, 250, 250, 0.2)",
          "&:hover": {
            backgroundColor: "rgba(250, 250, 250, 0.1)",
          },
          "&:active": {
            backgroundColor: "#023e8a",
          },
        },
      },
      MuiFormLabel: {
        root: {
          color: "rgba(255,255,255,0.8)",
        },
      },
      MuiTooltip: {
        tooltip: {
          backgroundColor: "#fff",
          color: "#333333",
          fontSize: 12,
          boxShadow: "0px 0 15px 0px rgba(255,255,255,0.8)",
        },
        popperArrow: {
          fill: "#fff",
        },
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={colorTheme}>{children}</ThemeProvider>
    </>
  );
};

export default ThemeWrapper;
