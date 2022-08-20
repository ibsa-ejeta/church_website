import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Container,
  Avatar,
  IconButton,
  Drawer,
  Box,
  Grid,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventIcon from '@material-ui/icons/Event';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles(() => ({
  headerLink: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 300,
    fontSize: "15px",
    marginRight: "3rem",
    marginTop: "0.6rem",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "grey",
      textDecoration: "none",
    },
  },
  menuDownButton: {
    display: "block",
    color: "black",
    textDecoration: "none",
    fontSize: "20px",
    marginBottom: "1.5rem",
  },
  firstItem: {
    backgroundColor: "red"
  },
  drawerContainer: {
    opacity:"1",
    width: "80vw",
    margin: "0rem",
    height: "100vh",
    backgroundColor:"#A6D1E6",
    alignContent: "center",
    opacity:"1",
    display: "grid",

  },
  drawerMain: {
    backgroundColor:"transparent",
    opacity:"1",


  }
 
}));

const Header = (props) => {
  const {
    homeHeader,
    header,
    headerLink,
    menuDownButton,
    toolbar,
    drawerContainer,
    drawerMain
  } = useStyles();
  const {
    classHeader="homeHeader",
    pageLogo=" OECT",
    first="Oromo Evangelical Church of Toronto",
    second="Services",
    third="Location",
    fourth= "Ministries",
    fifth= "Events",
    sixth="Donations",
    seventh= "Gallery",
    // icon1=<HomeIcon fontSize="small" />,
    icon2=<AddAlertIcon fontSize="small" />,
    icon4=<MenuBookIcon fontSize="small" />,
    icon3=<LocationCityIcon fontSize="small" />,
    icon5=<EventIcon fontSize="small" />,
    icon6=<AttachMoneyIcon fontSize="small" />,
    icon7=<PhotoCameraIcon fontSize="small" />,
    path1="/",
    path2="/Services",
    path3="/Locations",
    path4="/Ministries",
    path5="/Events",
    path6="/Donations",
    path7="/Galleries",
    imgAlt="Cross",
    imgSrc="/images/Oromo Evangelical Church of Toronto Logo.png"
  } = props;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={`${props.classHeader}`}>
        {/* <Grid container> */}
          <Grid item container sm={1} alignContent="right" component="div" className="homeLogo">
            <Avatar alt={imgAlt} src={imgSrc}/>
            {/* <Typography variant="body3" align="center">
              Oromo Evangelical Church of Toronto
            </Typography> */}
          </Grid>
          <Grid             
            // container
            // justifyContent="center"
            // alignContent="center"
            // xl={12} 
            className="troubleGrid"
          >
            {getMenuButtons()}
          </Grid >
        {/* </Grid> */}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={`${props.classHeader}`}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon/>
        </IconButton>
 
        {/* <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose
          
          }}
        > */}
          {/* <Container className={drawerContainer}>{getDrawerChoices()}</Container>
        </Drawer>  */}
        <Drawer 
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          className={drawerMain}
          >
          <Container className={drawerContainer}>{getDrawerChoices()}</Container>
        </Drawer>

        <div className="headerlogo">{headerLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <React.Fragment>
 
        <Button className={menuDownButton}><Link to={path1}>
          OECT Home
        </Link></Button>
        <Button className={menuDownButton}><Link to={path2}>
          {second}
        </Link></Button>
        <Button className={menuDownButton}><Link to={path3}>
          {third}
        </Link></Button>
        <Button className={menuDownButton}><Link to={path4}>
          {fourth}
        </Link></Button>
        <Button className={menuDownButton}><Link to={path5}>
          {fifth}
        </Link></Button>
        <Button className={menuDownButton}><Link to={path6}>
          {sixth}
        </Link></Button>
        <Button className={menuDownButton}><Link to={path7}>
          {seventh}
        </Link></Button>
   
      </React.Fragment>
    );
  };

  const headerLogo = (
    <Typography variant="h6" component="h6" className="headerlogo">
      {pageLogo}
    </Typography>
  );

  const getMenuButtons = () => {
    return (
      <React.Fragment>
        <Link to={path1} className={headerLink}>
        &nbsp;&nbsp;{first}
        </Link>
        <Link to={path2} className={headerLink}>
          {icon2}&nbsp;&nbsp;
          {second}
        </Link>
        <Link to={path3} className={headerLink}>
          {icon3}&nbsp;&nbsp;
          {third}
        </Link>
        <Link to={path4} className={headerLink}>
          {icon4}&nbsp;&nbsp;
          {fourth}
        </Link>
        <Link to={path5} className={headerLink}>
          {icon5}&nbsp;&nbsp;
          {fifth}
        </Link>
        <Link to={path6} className={headerLink}>
          {icon6}&nbsp;&nbsp;
          {sixth}
        </Link>
        <Link to={path7} className={headerLink}>
          {icon7}&nbsp;&nbsp;
          {seventh}
        </Link>
      </React.Fragment>
    );
  };

  return (
    <Box component="div">
      <AppBar elevation={0} position="fixed" className="new">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </Box>
  );
};

export default Header;
