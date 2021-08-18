import React from "react";
import ThemeWrapper from "./Mui/ThemeWrapper";
import Homepage from "./Pages/Homepage";
import "./App.css";

function App() {
  return (
    <ThemeWrapper>
      <div className="App">
        <Homepage />
      </div>
    </ThemeWrapper>
  );
}

export default App;
