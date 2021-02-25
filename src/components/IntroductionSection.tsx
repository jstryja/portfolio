import { makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { ParticlesComponent } from "./Particles";
import { Profile } from "./Profile";

const useStyles = makeStyles(() => ({
  section: {
    position: "relative",
    height: "100vh",
  },
}));

export const IntroductionSection: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <ParticlesComponent />
      <Profile />
    </section>
  );
};
