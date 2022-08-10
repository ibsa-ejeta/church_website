import React from "react";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper,Card, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const Services = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
      
      <Box component="div"  className="services_page">
      <Grid
        component="div"
        raised
        container
        alignItems="center"
        alignContent="center"
        direction="column"
        xl={12}
        >
        <Grid className="worship_text">
          <Typography variant="h6">Worship Service </Typography>
          <Typography variant="body1" component="">
            Every Sunday from 3:00PM to 6:00PM
          </Typography>
          <Typography variant="h6">Sunday School </Typography>
          <Typography variant="body1" component="">
            Every Sunday from 3:00PM to 6:00PM
          </Typography>
        </Grid>
        <Grid item>
        
        <iframe
          src="https://www.youtube.com/embed/07idXBG5TU0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          className="youtube_video"
        />
    
        </Grid>
        </Grid>
      
    </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Services;
