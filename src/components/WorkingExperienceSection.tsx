import { makeStyles, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
    backgroundColor: "rgb(0,20,0)",
    padding: theme.spacing(5),
  },
  sectionHeader: {
    color: "tomato",
    justifyContent: "center",
    display: "flex",
  },
}));

export const WorkingExperienceSection: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Typography variant="h3" className={classes.sectionHeader}>
        Working experience
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
          icon={
            <img
              alt="Atreo"
              src="https://www.svgrepo.com/show/65453/avatar.svg"
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Frontend developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
          <p>React, MobX, NextJS, NodeJS, </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020 - 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          icon={
            <img
              alt="Atreo"
              src="https://www.atreo.cz/images/logo.svg"
              style={{
                height: "90%",
                width: "90%",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Frontend developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Atreo</h4>
          <p>React, MobX, NextJS, NodeJS, </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020 - 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          icon={
            <img
              alt="Tieto EVRY"
              src="https://startuprefugees.com/wp-content/uploads/2017/08/tietoevry-logo-social_media_neutral-rgb_M.png"
              style={{
                height: "60%",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">TietoEVRY</h4>
          <p>React, Redux, Material UI, Firebase, Bootstrap</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};
