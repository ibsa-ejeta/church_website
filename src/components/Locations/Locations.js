import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";


const useStyles = makeStyles(() => ({}));

const Locations = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
        pageLogo=" TOCCT"
        first="Home"
        second="Services"
        third="Locations"
        fourth= "Ministries"
        fifth= "Events"
        sixth= "Live Stream"
        seventh= "Galleries"
        icon1={<HomeIcon fontSize="small" />}
        icon2={<AccountTreeIcon fontSize="small" />}
        icon3={<ContactMailIcon fontSize="small" />}
        path1="/"
        path2="/Services"
        path3="/Locations"
        path4="/Ministries"
        path5="/Events"
        path6="Live_Steam"
        path7="Galleries"
        imgAlt="Cross"
        imgSrc="/images/cross_image.jpeg"
      />
   
        <Grid container  className="address">
          <Grid item sm={12}>
            <img src="images/church_address.png" className="homeClipArt" />
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h6">Address </Typography>
            <Typography variant="body1" component="">
              TOCCT is located at 330 Bellamy Rd N, Scarborough, ON M1H 1E8. If you want to attend a baptist church in Scarborough, come and visit us!
            </Typography>
          </Grid> 
        </Grid>
    
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Locations;
