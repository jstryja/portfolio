import { CssBaseline } from "@material-ui/core";
import React from "react";
import { Introduction } from "./components/Introduction";
import { WorkingExperienceSection } from "./components/WorkingExperienceSection";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Introduction />
      <WorkingExperienceSection />
    </React.Fragment>
  );
}

export default App;
