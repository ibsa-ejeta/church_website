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
   
        <Grid container  className="donations">
          {/* <Grid item sm={12}>
            <img src="images/church_address.png" className="google_map" />
          </Grid> */}
          <Grid item sm={12}>
            <Typography variant="h6">If you want to support OECT's vision and mission, kindly donate through any of the following two options </Typography>
            <br/>
            <Typography variant="body1" component="">1. Cheque payable to: </Typography>
            <Typography>Oromo Evangelical Church of Toronto</Typography> 
            <Typography variant="body1" component="">330 Bellamy Road North</Typography>
            <Typography variant="body1" component="">Scarborough, ON</Typography>
            <Typography variant="body1" component="">M1H 1E8, Canada</Typography>
            <br/>
            <Typography variant="body1" component="">2. Electronic transfer to:</Typography>
            <Typography> tocct2012@gmail.com</Typography>
            <br/>
            <Typography variant="body1" component="">Thank you for your generous support. </Typography>
            <Typography variant="body1" component="">We issue receipts for income tax returns.</Typography>
          </Grid> 
        </Grid>
    
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Locations;
