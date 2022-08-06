import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  
}));

const Services = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
      
      <Box id="Home" component="div" className="homeIntroduction">
      <Grid container>
        <Grid item sm={12} md={3}>
          <Typography variant="h4">Worship Service </Typography>
          <Typography variant="body1" component="">
            First Service: 9:15AM – 10:15 AM
            Second Service: 11:15AM – 12:30 PM
          </Typography>
          <Typography variant="h4">Sunday School </Typography>
          <Typography variant="body1" component="">
            First Service: 9:15AM – 10:15 AM
            Second Service:11:15AM – 12:30 PM
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

export default Services;
