import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Contactinfo from "./Contactinfo";
import Footer from "../sharedComponents/Footer";
import { Grid, Container, Paper, Box, makeStyles } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventIcon from '@material-ui/icons/Event';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AddAlertIcon from '@material-ui/icons/AddAlert';


const details = require("./details.json");
const useStyles = makeStyles(() => ({}));

const Home = () => {
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
        sixth="Live Stream"
        seventh= "Gallery"
        icon1={<HomeIcon fontSize="small" />}
        icon2={<AddAlertIcon fontSize="small" />}
        icon4={<MenuBookIcon fontSize="small" />}
        icon3={<LocationCityIcon fontSize="small" />}
        icon5={<EventIcon fontSize="small" />}
        icon6={<LiveTvIcon fontSize="small" />}
        icon7={<PhotoCameraIcon fontSize="small" />}
        
        path1="#"
        path2="/Services"
        path3="/Locations"
        path4="/Ministries"
        path5="/Events"
        path7="Galleries"
        imgAlt="Cross"
        imgSrc="/images/cross_image.jpeg"
      />
      <Box component="div" className="homePage">
        <Introduction />
        <Container id="projects">
          {details.map((detail) => (
            <Projects
              keys={detail.key}
              titles={detail.titles}
              projectDescription={detail.projectDescription}
              images={detail.images}
              alts={detail.alts}
            ></Projects>
          ))}
        </Container>
        <Contactinfo />
      </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Home;
