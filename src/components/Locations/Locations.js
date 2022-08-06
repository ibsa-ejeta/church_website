import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
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
            <img src="images/church_address.png" className="homeClipArt" />
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h6">Address </Typography>
            <Typography variant="body1" component="">
              OECT is located at 330 Bellamy Rd N, Scarborough, ON M1H 1E8. If you want to attend a baptist church in Scarborough, come and visit us!
            </Typography>
          </Grid> 
        </Grid>
    
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Locations;
