import React from "react";
import ThemeWrapper from "./Mui/ThemeWrapper";
import Homepage from "./Pages/Homepage";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ThemeWrapper>
      <div className="App">
        <Homepage thanksSectionVisible />
      </div>
      <CssBaseline />
    </ThemeWrapper>
  );
}

export default App;
