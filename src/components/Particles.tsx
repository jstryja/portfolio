import { makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Particles from "react-tsparticles";

const useStyles = makeStyles(() => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.8",
  },
}));
export const ParticlesComponent: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Particles
      canvasClassName={classes.particlesCanvas}
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3,
            },
            grab: { distance: 400, links: { opacity: 1 } },
            push: { quantity: 4 },
            remove: { quantity: 2 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          move: {
            distance: 100,
            direction: "none",
            enable: true,
            outMode: "none",
            random: false,
            speed: 6,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 10 },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.5,
              speed: 1,
              sync: false,
            },
            random: false,
            value: 1,
          },
          shape: {
            type: "image",
            images: [
              {
                height: 130,
                replace_color: true,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
                width: 100,
              },
              {
                height: 100,
                replace_color: true,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
                width: 100,
              },
              {
                height: 100,
                replace_color: true,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
                width: 130,
              },
              {
                height: 120,
                replace_color: true,
                src: "https://material-ui.com/static/logo.png",
                width: 100,
              },
              {
                height: 100,
                replace_color: true,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
                width: 100,
              },
              {
                height: 100,
                replace_color: true,
                src: "https://cdn.worldvectorlogo.com/logos/eslint-1.svg",
                width: 100,
              },
              {
                height: 100,
                replace_color: true,
                src: "https://cdn.worldvectorlogo.com/logos/prettier-1.svg",
                width: 100,
              },
              {
                height: 100,
                replace_color: true,
                src:
                  "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
                width: 100,
              },
              {
                height: 100,
                replace_color: true,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
                width: 100,
              },
              {
                height: 100,
                replace_color: true,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
                width: 100,
              },
            ],
            stroke: { color: "#ffffff", width: 1 },
          },
          size: {
            animation: {
              enable: true,
              minimumValue: 10,
              speed: 5,
              sync: false,
            },
            random: false,
            value: 16,
          },
        },
        stroke: { color: "#ffffff", width: 1 },
        detectRetina: true,
      }}
    />
  );
};
