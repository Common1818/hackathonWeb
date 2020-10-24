import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import store from "./store";

// bootstrap
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Layout/Navbar";
import Track from "./components/Track/Track";
import GetHelp from "./components/GetHelp/GetHelp";
import HelpOthers from "./components/Help/HelpOthers";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/track" component={Track} />
        <Route exact path="/getHelp" component={GetHelp} />
        <Route exact path="/helpOthers" component={HelpOthers} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
