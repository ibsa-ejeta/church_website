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
      <Grid   className="intro_grid">
        <Grid item sm={12}>
          {/* <Typography variant="h5">Oromo Evangelical Church of Toronto </Typography> */}
          {/* <Typography variant="body2" component="">
            Welcome to the Oromo Evangelical Church of Toronto website. We encourage you to browse this website and find out who we are, our vision, our faith, services we offer at our church and ministerial offices available to all members of our congregation. Moreover, we encourage you to benefit from our online Oromo gospel songs and other Christian resources.
          </Typography> */}
        </Grid>
        <Grid item sm={12}>
          <img src="images/Oromo_Evangelical_Church_of_Toronto_Logo-removebg-preview.png" className="homeClipArt" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
