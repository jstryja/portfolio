import {
  Avatar,
  Box,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { FunctionComponent } from "react";
import avatar from "../resources/images/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    zIndex: 1,
  },
}));

export const Profile: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.typedContainer}>
      <Box>
        <Box justifyContent="center" display="flex">
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Jakub Stryja"
          ></Avatar>
        </Box>

        <Typography className={classes.title} variant="h2">
          Jakub Stryja
        </Typography>
        <Typography className={classes.subtitle} variant="h4">
          Frontend developer
        </Typography>
      </Box>
    </Container>
  );
};
