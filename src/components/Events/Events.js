import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";


const useStyles = makeStyles(() => ({}));

const Events = () => {
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
      <Introduction />
      <Typography>Events</Typography>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Events;
