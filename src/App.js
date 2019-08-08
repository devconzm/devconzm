import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Info from "./components/Info";
import Partners from "./components/Partners";
import Speakers from "./components/Speakers";
import CodeOfConduct from "./components/Tickets";
import About from "./components/About";
import Venue from "./components/Venue";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <Router>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/coc" component={CodeOfConduct} />
      </>
    </Router>
  );
}
function Home() {
  return (
    <Fragment>
      <Info />
      <About />
      <Venue />
      <Partners />
      <Footer />
    </Fragment>
  );
}

export default App;
