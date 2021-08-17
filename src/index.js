import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

let rootDirectory = document.getElementById("Root");

ReactDOM.render(<App />, rootDirectory);

serviceWorker.unregister();
