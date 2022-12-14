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
     <Box component="div" className="events">
      <Grid>
        <Grid item sm={12}>
          <Typography variant="h5">Upcoming Events </Typography>
          <br/>
          {/* <Typography variant="body2" component="">
            Welcome to the Oromo Evangelical Church of Toronto website. We encourage you to browse this website and find out who we are, our vision, our faith, services we offer at our church and ministerial offices available to all members of our congregation. Moreover, we encourage you to benefit from our online Oromo gospel songs and other Christian resources.
          </Typography> */}
        </Grid>
        <Grid item sm={12}>
          <img src="images/recent_event.jpg" className="events_image" />
        </Grid>
      </Grid>
    </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Events;
