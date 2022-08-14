import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Contactinfo from "./Contactinfo";
import Footer from "../sharedComponents/Footer";
import { Grid, Container, Paper, Box, makeStyles } from "@material-ui/core";
const details = require("./details.json");
const useStyles = makeStyles(() => ({}));

const Home = () => {
  // let details_obj = JSON.parse(details);
  const classes = useStyles();
  
  // for (let i = 0; i < details.length; i++) {
  //    let item = details[i].projectDescription;
  //    if (item.includes("newline")) {
  //       console.log("yes");
  //       item = item.replaceAll('newline', '\n');
  //       console.log(item)
  //    }
        
  //   }
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
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
            ></Projects>)
          )}
        </Container>
        <Contactinfo />
      </Box>
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Home;
