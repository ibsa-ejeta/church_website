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
  ListItem
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homePaper: {
    paddingTop: "2rem",
    marginTop: "3rem",
    marginBottom: "5rem",
    backgroundColor: "#A6D1E6",
  },
  homePaper_mobile: {
    paddingTop: "1rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    backgroundColor: "#A6D1E6",
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
    backgroundColor: "#A6D1E6",
    boxShadow: "none",
  },
  projectCard_small: {
    margin: "1rem",
    textAlign: "center",
    alignItems: "center",
    borderStyle: "none",
    backgroundColor: "#A6D1E6",
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
  let items = [];
  let new_item = []
  let txt = true
  if (projectDescription.includes("newline")) {
    new_item =projectDescription.split("newline");
    txt = false
  } 
  let one = <Typography>{projectDescription}</Typography>
  let two = []
  for (let i = 0; i < new_item.length; i++) {
    two.push(<Typography>{new_item[i]}</Typography>)
       }
      
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
    <Grid item xs={12} md={7}>
      <Card className={classes.projectCard}>
        <Typography component="h5" variant="h5" gutterBottom>
          {titles}
        </Typography>
        {txt ? one: two}       
      </Card>
    </Grid>
  );
  const textGrid_small = (
    <Grid item xs={12} md={7}>
      <Card className={classes.projectCard_small}>
        <Typography component="h5" variant="h5" gutterBottom>
          {titles}
        </Typography>
        {txt ? one: two}       
      </Card>
    </Grid>
  );
  const imageGrid = (
    <Grid
      item
      xs={12}
      md={5}
      spacing={2}
      className={classes.img_grid}
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
      <Paper justify="center" className={classes.homePaper_mobile} elevation={6}>
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
          {textGrid_small} {imageGrid}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Projects;

//<ImageListItem className={classes.cover}>
//<img src={images} alt={alts} />
//</ImageListItem>
