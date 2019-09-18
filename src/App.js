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
import Schedule from "./components/Schedule";

library.add(fab);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/speakers" component={Speakers} />
        <Route exact path="/coc" component={CodeOfConduct} />
        <Route exact path="/schedule" component={Schedule} />
        <Route component={() => <h4>Not Found</h4>} />
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
      {/*<Team />*/}
      <Footer />
    </Fragment>
  );
}

export default App;
