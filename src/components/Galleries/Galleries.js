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
            <iframe
              src="https://www.youtube.com/embed/07idXBG5TU0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              className="youtube_video"
            />
        
            <iframe 
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FOromoCCToronto%2Fvideos%2F366017864090488%2F&show_text=false&t=0" 
              className="youtube_video"
              frameborder="0"
              allowfullscreen
              allow="autoplay; encrypted-media;" 
              title="facebook video"
            /> 
      
          </AliceCarousel>
          
          </Container>
      
    
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Galleries;
