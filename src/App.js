import React from "react";
import ThemeWrapper from "./Mui/ThemeWrapper";
import Homepage from "./Pages/Homepage";
import { CssBaseline } from "@material-ui/core";
import aos from "aos";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import StaticAttachments from "./Components/StaticAttachments/StaticAttachments";

function App() {
  React.useEffect(() => {
    aos.init({
      delay: 300, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: true,
    });
  });
  return (
    <ThemeWrapper>
      <Router>
        <div className="App">
          <Homepage />
          <StaticAttachments />
        </div>
      </Router>
      <CssBaseline />
    </ThemeWrapper>
  );
}

export default App;
