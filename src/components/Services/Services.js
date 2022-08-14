import React from "react";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper,Card, Box, makeStyles } from "@material-ui/core";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
        <Container className="worship_text">
          
          <Typography variant="h6">Sunday </Typography>
          <Typography variant="body1" component="">
            Regular Service from 2:00PM to 6:00PM EST
          </Typography>
          <Typography variant="body2" component="">
            <ChevronRightIcon fontSize="small"/>Prayer 
          </Typography>
          <Typography variant="body2" component="">
            <ChevronRightIcon fontSize="small"/>Worship
          </Typography>
          <Typography variant="body2" component="">
           <ChevronRightIcon fontSize="small"/>Word of God
          </Typography>
          <Typography variant="body2" component="">
            <ChevronRightIcon fontSize="small"/>Sunday School
          </Typography>
          <Typography>Virtual Service from 11:00AM to 1:00PM EST</Typography>
          </Container>
        <Container className="worship_text">
          <Typography variant="h6">Tuesday </Typography>
            <Typography>
              Virtual Services from 8:00PM to 9:00PM EST
            </Typography></Container>
            <Container className="worship_text">
            <Typography variant="h6">Thursday </Typography>
            <Typography>
              Virtual Services from 8:00PM to 9:00PM EST
            </Typography>
            </Container>
          
        
        {/* <Grid item>
        
        <iframe
          src="https://www.youtube.com/embed/07idXBG5TU0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          className="youtube_video"
        />
    
        </Grid> */}
        </Grid>
      
    </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Services;
