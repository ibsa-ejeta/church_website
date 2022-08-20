import React from "react";

import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  HashRouter,
} from "react-router-dom";
import Home from "./homeComponents/Home";
import Services from "./Services/Services";
import Locations from "./Locations/Locations";
import Ministries from "./Ministries/Ministries";
import Events from "./Events/Events";
import Live_Stream from "./Live_Stream/Live_Stream";
import Donations from "./Donations/Donations";
import Galleries from "./Galleries/Galleries";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    fontSize: 20,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Locations" exact component={Locations} />
        <Route path="/Ministries" exact component={Ministries} />
        <Route path="/Events" exact component={Events} />
        <Route path="/Live_Stream" component={Live_Stream} />
        <Route path="/Donations" exact component={Donations} />
        <Route path="/Galleries" exact component={Galleries} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
