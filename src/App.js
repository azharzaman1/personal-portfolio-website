import React from "react";
import ThemeWrapper from "./Mui/ThemeWrapper";
import Homepage from "./Pages/Homepage";
import { CssBaseline } from "@material-ui/core";
import aos from "aos";
import "./App.css";

function App() {
  React.useEffect(() => {
    aos.init();
  });
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
