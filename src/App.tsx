import { CssBaseline } from "@material-ui/core";
import React from "react";
import "./App.css";
import { ParticlesComponent } from "./components/Particles";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <ParticlesComponent />
    </React.Fragment>
  );
}

export default App;
