import React from "react";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  services: {
    marginBottom: "3rem"

  }
  
}));

const Services = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
      
      <Box id="Home" component="div" className="homeIntroduction">
      
        <Grid item sm={12} className={classes.services}>
          <Typography variant="h6">Worship Service </Typography>
          <Typography variant="body1" component="">
            Every Sunday from 3:00PM to 6:00PM
          </Typography>
          <Typography variant="h6">Sunday School </Typography>
          <Typography variant="body1" component="">
            Every Sunday from 3:00PM to 6:00PM
          </Typography>
        </Grid>
        <Grid item sm={12}>
        
        <iframe
          width="720" 
          height="400"
          src="https://www.youtube.com/embed/07idXBG5TU0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
    
        </Grid>
      
    </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Services;
