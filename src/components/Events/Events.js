import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "../homeComponents/Introduction";
import Footer from "../sharedComponents/Footer";
import { Grid, Typography, Container, Paper, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const Events = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
        classHeader="homeHeader"
      />
      <Introduction />
      <Footer className={"homeFooter"} />
    </React.Fragment>
  );
};

export default Events;
