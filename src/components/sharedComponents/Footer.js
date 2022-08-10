import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  footer: {
    bottom: 0,
    left: 0,
    right:0,
    width: "100vw",
    paddingTop: "0rem",
    backgroundColor: "yellow",
    position: "fixed"
  },
  footer_text: {
    fontSize: "0.9rem",
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  const date = new Date();
  const copyRight = ` © Oromo Evangelical Church of Toronto - OECT ${date.toString().slice(10, 15)}`;

  return (
    // <Box className={`${props.className}`}>
    <Box className={classes.footer}>
      <Typography variant="body2" align="center" gutterBottom className={classes.footer_text}>
        {copyRight}
      </Typography>
    </Box>
  );
};

export default Footer;
