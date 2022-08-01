import { Link, BrowserRouter } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Typography,
  CardMedia,
  CardActions,
  Paper,
  Box,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homePaper: {
    paddingTop: "3rem",
    marginTop: "3rem",
    marginBottom: "5rem",
    backgroundColor: "yellow",
  },

  img: {
    width: "25em",
    height: "30em",
    margin: 12,
    minHeight: "70vh",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 2,
  },
  projectCard: {
    margin: "3rem",
    textAlign: "center",
    alignItems: "center",
    borderStyle: "none",
    backgroundColor: "yellow",
    boxShadow: "none",
  },
  projectButton: {
    // justifyContent: "center",
    marginBottom: "2rem",
    marginRight: "2rem",
    backgroundColor: "lightgreen",
    color: "black",
    textTransform: "lowercase",
    fontWeight: "normal",
    "&:hover": {
      backgroundColor: "lightgreen",
      color: "grey",
    },
  },
}));

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Projects = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { titles, projectDescription, images, sites, urls, alts, keys } = props;
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const textGrid = (
    <Grid item xs={12} md={8}>
      <Card className={classes.projectCard}>
        <Typography component="h3" variant="h3" gutterBottom>
          {titles}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {projectDescription}
        </Typography>
      </Card>
    </Grid>
  );
  const imageGrid = (
    <Grid
      item
      xs={12}
      md={4}
      alignContent="center"
      justify="center"
      spacing={2}
    >
      <CardMedia className={classes.img} image={images} title={titles} />
    </Grid>
  );
  if (keys % 2 === 0 && windowDimensions.width > 960) {
    return (
      <Box component="div" className="homeProjects">
        <Paper justify="center" className={classes.homePaper} elevation={6}>
          <Grid
            component="div"
            raised
            container
            alignItems="center"
            alignContent="center"
            direction="row"
            md={12}
            spacing={3}
          >
            {imageGrid} {textGrid}
          </Grid>
        </Paper>
      </Box>
    );
  }

  return (
    <Box component="div" className="homeProjects">
      <Paper justify="center" className={classes.homePaper} elevation={6}>
        <Grid
          component="div"
          raised
          container
          alignItems="center"
          alignContent="center"
          direction="row"
          md={12}
          spacing={3}
        >
          {textGrid} {imageGrid}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Projects;

//<ImageListItem className={classes.cover}>
//<img src={images} alt={alts} />
//</ImageListItem>
