import {
  Button,
  Grow,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import React, { FunctionComponent, useState } from "react";

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
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px black inset",
      WebkitTextFillColor: "#fff",
    },
  },
  button: {
    margin: theme.spacing(1),
    color: "tomato",
    backgroundColor: "tan",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#d2b48ce0",
    },
  },
  snackbarContent: {
    backgroundColor: "tomato",
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
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      const { name, email, message } = values;
      emailjs
        .send(
          "service_gqhbs1o",
          "template_qpddivo",
          { name, email, message },
          "user_9xEHSJZZdXqF9r0GofLdO"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSnackbarMessage(
              "Email was successfully sent! I will answer you ASAP."
            );
            setOpen(true);
          },
          (err) => {
            console.log("FAILED...", err);
            setSnackbarMessage(
              "Sorry! There was an error while sending an email. Please, try it again later."
            );
            setOpen(true);
          }
        );
    },
  });

  return (
    <section className={classes.section}>
      <Typography variant="h3" className={classes.sectionHeader}>
        Contact or hire me
      </Typography>
      <form
        className={classes.form}
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit(event);
        }}
      >
        <InputField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          inputProps={{ className: classes.input }}
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <InputField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          inputProps={{ className: classes.input }}
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <InputField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          inputProps={{ className: classes.input }}
          fullWidth
          multiline
          rows={6}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          fullWidth
          className={classes.button}
          variant="contained"
        >
          Send
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={snackbarMessage}
          ContentProps={{
            classes: {
              root: classes.snackbarContent,
            },
          }}
          TransitionComponent={Grow}
        />
      </form>
    </section>
  );
};
