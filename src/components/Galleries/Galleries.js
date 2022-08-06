import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
import Footer from "../sharedComponents/Footer";
import { Grid, Container, Paper, Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const Galleries = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
      
      <Box id="Home" component="div" className="homeIntroduction">
      <Grid container>
        <Grid item sm={12} md={3}>
          <Typography variant="h4">Oromo Evangelical Church of Toronto </Typography>
          <Typography variant="body1" component="">
          Here are some of the things that OECT has done over the course of a couple of events. We hope to capture many more memories!
          </Typography>
        </Grid>
        <Grid item sm={12} md={9}>
          <img src="images/facebook_profile_2.png" className="homeClipArt" />
        </Grid>
      </Grid>
    </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Galleries;
