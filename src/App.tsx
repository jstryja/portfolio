import { CssBaseline } from "@material-ui/core";
import React from "react";
import "./App.css";
import { ParticlesComponent } from "./components/Particles";
import { Profile } from "./components/Profile";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <ParticlesComponent />
      <Profile />
    </React.Fragment>
  );
}

export default App;
