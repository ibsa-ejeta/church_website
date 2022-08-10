import React from "react";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";
import { Grid, Card, Container, Paper, Box, makeStyles, Typography } from "@material-ui/core";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const useStyles = makeStyles(() => ({}));

const Galleries = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
        <Container className="gallery">
          <AliceCarousel 
          autoPlay 
          autoPlayInterval="3000"
          disableButtonsControls="true"
          infinite="true"
          
          >
            <img src="images/mothers_day.png" className="sliderimg"/>
            <img src="images/pastor_john.jpg" className="sliderimg"/>
            <img src="images/congregation.jpg" className="sliderimg"/>
            <img src="images/group_photo.jpg" className="sliderimg"/>
          </AliceCarousel>
          
          </Container>
      
    
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Galleries;
