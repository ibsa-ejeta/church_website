import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";


const useStyles = makeStyles(() => ({
  
}));

const Services = () => {
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
        <Grid item sm={12} md={3}>
          <Typography variant="h4">Worship Service </Typography>
          <Typography variant="body1" component="">
            First Service: 9:15AM – 10:15 AM
            Second Service:11:15AM – 12:30 PM
          </Typography>
          <Typography variant="h4">Sunday School </Typography>
          <Typography variant="body1" component="">
            First Service: 9:15AM – 10:15 AM
            Second Service:11:15AM – 12:30 PM
          </Typography>
        </Grid>
        <Grid item sm={12} md={9}>
          <img src="images/facebook_profile_2.png" className="homeClipArt" />
        </Grid>
      </Grid>
    </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Services;
