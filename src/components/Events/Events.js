import React from "react";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const Events = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
     <Box id="Home" component="div" className="homeIntroduction">
      <Grid container>
        <Grid item sm={12} md={4}>
          <Typography variant="h5">Oromo Evangelical Church of Toronto </Typography>
          <Typography variant="body2" component="">
            Welcome to the Oromo Evangelical Church of Toronto website. We encourage you to browse this website and find out who we are, our vision, our faith, services we offer at our church and ministerial offices available to all members of our congregation. Moreover, we encourage you to benefit from our online Oromo gospel songs and other Christian resources.
          </Typography>
        </Grid>
        <Grid item sm={12} md={8}>
          <img src="images/social_events.png" className="homeClipArt" />
        </Grid>
      </Grid>
    </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Events;
