import {
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
    backgroundColor: "rgb(0,10,0)",
    padding: theme.spacing(5),
  },
  sectionHeader: {
    color: "tomato",
    justifyContent: "center",
    display: "flex",
  },
  form: {
    maxWidth: theme.spacing(80),
    margin: "auto",
  },
  input: {
    color: "#fff",
  },
  underline: {
    color: "#fff",
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px black inset",
      WebkitTextFillColor: "#fff",
    },
  },
}));

const InputField = withStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
}))(TextField);

export const ContactSection: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Typography variant="h3" className={classes.sectionHeader}>
        Contact or hire me
      </Typography>
      <form className={classes.form}>
        <InputField
          id="name"
          label="Name"
          variant="outlined"
          inputProps={{ className: classes.underline }}
          fullWidth
        />
        <InputField
          id="email"
          label="Email"
          variant="outlined"
          inputProps={{ className: classes.underline }}
          fullWidth
        />
        <InputField
          id="message"
          label="Message"
          variant="outlined"
          inputProps={{ className: classes.underline }}
          fullWidth
          multiline
          rows={6}
        />
      </form>
    </section>
  );
};
