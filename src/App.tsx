import { CssBaseline } from "@material-ui/core";
import React from "react";
import "./App.css";
import { ContactSection } from "./components/ContactSection";
import { IntroductionSection } from "./components/IntroductionSection";
import { WorkingExperienceSection } from "./components/WorkingExperienceSection";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <IntroductionSection />
      <WorkingExperienceSection />
      <ContactSection />
    </React.Fragment>
  );
}

export default App;
