import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./components/Info";
import Partners from "./components/Partners";
import Speakers from "./components/Speakers";
import Tickets from "./components/Tickets";
import CodeOfConduct from "./components/CodeOfConduct";
import About from "./components/About";
import Venue from "./components/Venue";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/coc" component={CodeOfConduct} />
      </Switch>
    </Router>
  );
}
function Home() {
  return (
    <Fragment>
      <Info />
      <About />
      <Venue /> 
      <Tickets />
      <Partners />
      <Tickets />
      <Team />
      <Footer />
    </Fragment>
  );
}

export default App;
