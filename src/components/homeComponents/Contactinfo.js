import React from "react";
import {
  Card,
  Grid,
  Box,
  Container,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
const useStyles = makeStyles(() => ({
  projectContact: {
    paddingTop: "9rem",
    textAlign: "center",
  },
  homeContact: {
    marginLeft: "2rem",
    color: "red"
  }
}));

const Contactinfo = () => {
  const classes = useStyles();
  return (
    <Box component="div" id="contact" className="homeContact">
      <Typography variant="h3">Contact Us</Typography>
      <Typography variant="h5">
          If you have any questions, concerns, comments, prayer requests, struggles, general inquiries, or anything in general, please do not hesitate to contact us! This is open to all, and we encourage you to do so. We respect your privacy, and will provide responses as best as we can.
      </Typography>
      <a
        href="https://www.facebook.com/OromoCCToronto"
        target="_blank"
        rel="noreferrer"
      >
        <Typography variant="h4">
          <FacebookIcon fontSize="large" /> Facebook
        </Typography>
      </a>
      <a href="mailto:tocct2012@gmail.com" target="_blank" rel="noreferrer">
        <Typography variant="h4">
          <EmailIcon fontSize="large" /> Send an email
        </Typography>
      </a>
      <a href="tel:1-416-268-7751" target="_blank" rel="noreferrer">
        <Typography variant="h4">
          <PhoneIphoneIcon fontSize="large" /> Call 416-268-7751
        </Typography>
      </a>
    </Box>
  );
};

export default Contactinfo;
