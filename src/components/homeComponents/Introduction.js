import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Paper,
  Grid,
} from "@material-ui/core";

const Introduction = () => {
  return (
    <Box id="Home" component="div" className="homeIntroduction">
      <Grid container>
        <Grid item sm={12} md={3}>
          <Typography variant="h4">The Oromo Christian Church of Toronto </Typography>
          <Typography variant="body1" component="">
            Welcome to The Oromo Christian Church of Toronto website. We encourage you to browse this website and find out who we are, our vision, our faith, services we offer at our church and ministerial offices available to all members of our congregation. Moreover, we encourage you to benefit from our online Oromo gospel songs and other Christian resources.
          </Typography>
        </Grid>
        <Grid item sm={12} md={9}>
          <img src="images/facebook_profile_2.png" className="homeClipArt" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
