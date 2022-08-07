import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const Live_Stream = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
      <Box id="Home" component="div" className="homeIntroduction">
      <Grid container>
        <Grid item sm={12} md={3}>
          <Typography variant="h4">Oromo Evangelical Church of Toronto</Typography>
          <Typography variant="body1" component="">
            Our Live Stream begins at 10:30 am every Sunday.
            If the video does not play please refresh your page.
            We look forward to having you join us!
          </Typography>
        </Grid>
        <Grid item sm={12} md={9}>
          <iframe 
            src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2FOromoCCToronto%2Fvideos%2F366017864090488%2F&show_text=false&width=560&t=0" 
            width="760" 
            height="416" 
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; encrypted-media;" 
            allowFullScreen
            />
          
        </Grid>
      </Grid>
    </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Live_Stream;
