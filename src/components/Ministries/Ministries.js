import React from "react";
import Header from "../sharedComponents/Header";
import Projects from "../homeComponents/Projects";
import Footer from "../sharedComponents/Footer";
import { Grid, Container,Typography, Paper, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));
const details = require("./ministries_list.json");
const Ministries = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
       <Box component="div" className="ministries_page">
        <Container>
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
      </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Ministries;
