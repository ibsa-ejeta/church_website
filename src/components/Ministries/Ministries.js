import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
import Footer from "../sharedComponents/Footer";
import { Grid, Container,Typography, Paper, Box, makeStyles } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";


const useStyles = makeStyles(() => ({}));

const Ministries = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
        pageLogo=" TOCCT"
        first="Home"
        second="Services"
        third="Location"
        fourth= "Ministries"
        fifth= "Events"
        sixth= "Live Stream"
        seventh= "Galleries"
        icon1={<HomeIcon fontSize="small" />}
        icon2={<AccountTreeIcon fontSize="small" />}
        icon3={<ContactMailIcon fontSize="small" />}
        path1="/"
        path2="/Services"
        path3="/Location"
        path4="/Ministries"
        path5="/Events"
        path6="Live_Steam"
        path7="Galleries"
        imgAlt="Cross"
        imgSrc="/images/cross_image.jpeg"
      />
      <Box id="Home" component="div" className="homeIntroduction">
        <Grid container>
          <Typography variant="h4">CHOIR</Typography>
          <Typography className="homeContent">
            The Choir Ministry has been faithfully serving TOCCT for the past decade! 
            If you are a choir member, and would like to access the resources, you must first sign up and register for a TOCCT membership. You can begin registration here! Once approved, you will have access to the Choir Material! This is to ensure that privacy, security, and integrity is maintained for all our internal resources. Thank you!
            If you are already a TOCCT Church member, and would like to access the choir material, click here. </Typography>
          <img src="images/facebook_profile_2.png" className="homeClipArt" />  
        </Grid>
      </Box>
      <Box id="Home" component="div" className="homeIntroduction">
        <Grid container>
          <Typography variant="h4">YOUTH</Typography>
          <Typography className="homeContent">
            Amplified For Christ is our youth program at TOCCT that longs to share the Gospel, encourage students to live out their faith, share their faith and be apart of the larger church community.
          </Typography>
          <img src="images/facebook_profile_2.png" className="homeClipArt" />  
        </Grid>
      </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Ministries;
