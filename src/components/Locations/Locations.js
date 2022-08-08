import React from "react";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const Locations = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
   
        <Grid container  className="address">
          <Grid item sm={12}>
            <img src="images/church_address.png" className="google_map" />
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h6">Address </Typography>
            <Typography variant="body1" component="">
              OECT is located at: </Typography>
              <Typography variant="body1" component="">330 Bellamy Road North</Typography>
              <Typography variant="body1" component="">Scarborough, ON </Typography>
              <Typography variant="body1" component="">M1H 1E8, Canada</Typography>
              <Typography variant="body1" component="">If you want to attend an Evangelical church in Scarborough, come and visit us!
            </Typography>
          </Grid> 
        </Grid>
    
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Locations;
