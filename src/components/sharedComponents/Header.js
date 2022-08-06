import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Avatar,
  IconButton,
  Drawer,
  MenuItem,
  Box,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventIcon from '@material-ui/icons/Event';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AddAlertIcon from '@material-ui/icons/AddAlert';

const useStyles = makeStyles(() => ({
  headerLink: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 300,
    fontSize: "20px",
    marginLeft: "3rem",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "grey",
      textDecoration: "none",
    },
  },
  menuDownButton: {
    display: "block",
    color: "#000",
    textDecoration: "none",
    fontSize: "20px",
    marginBottom: "1.5rem",
  }
}));

const Header = (props) => {
  const {
    homeHeader,
    header,
    logo,
    headerLink,
    menuDownButton,
    toolbar,
    drawerContainer,
  } = useStyles();
  const {
    classHeader="homeHeader",
    pageLogo=" OECT",
    first="Home",
    second="Services",
    third="Locations",
    fourth= "Ministries",
    fifth= "Events",
    sixth="Live Stream",
    seventh= "Gallery",
    icon1=<HomeIcon fontSize="small" />,
    icon2=<AddAlertIcon fontSize="small" />,
    icon4=<MenuBookIcon fontSize="small" />,
    icon3=<LocationCityIcon fontSize="small" />,
    icon5=<EventIcon fontSize="small" />,
    icon6=<LiveTvIcon fontSize="small" />,
    icon7=<PhotoCameraIcon fontSize="small" />,
    path1="/",
    path2="/Services",
    path3="/Locations",
    path4="/Ministries",
    path5="/Events",
    path6="/Live_Stream",
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
        <Grid container>
          <Grid item container sm={2} justifyContent="center" component="div">
            <Avatar alt={imgAlt} src={imgSrc} />
            &nbsp;&nbsp;
            <Typography variant="h6" align="center">
              {pageLogo}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            sm={10}
            alignContent="center"
          >
            {getMenuButtons()}
          </Grid>
        </Grid>
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
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{headerLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <React.Fragment>
        <Link to={path1} className={menuDownButton}>
          {first}
        </Link>
        <Link to={path2} className={menuDownButton}>
          {second}
        </Link>
        <Link to={path3} className={menuDownButton}>
          {third}
        </Link>
        <Link to={path4} className={menuDownButton}>
          {fourth}
        </Link>
        <Link to={path5} className={menuDownButton}>
          {fifth}
        </Link>
        <Link to={path6} className={menuDownButton}>
          {sixth}
        </Link>
        <Link to={path7} className={menuDownButton}>
          {seventh}
        </Link>
      </React.Fragment>
    );
  };

  const headerLogo = (
    <Typography variant="h4" component="h4">
      {pageLogo}
    </Typography>
  );

  const getMenuButtons = () => {
    return (
      <React.Fragment>
        <Link to={path1} className={headerLink}>
          {icon1}&nbsp;&nbsp;
          {first}
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
