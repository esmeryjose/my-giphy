import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const MyApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));
registerServiceWorker();
