import React from "react";
import ThemeWrapper from "./Mui/ThemeWrapper";
import Homepage from "./Pages/Homepage";
import "./App.css";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <ThemeWrapper>
      <div className="App">
        <Homepage />
      </div>
      <CssBaseline />
    </ThemeWrapper>
  );
}

export default App;
