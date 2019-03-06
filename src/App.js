import React, { Fragment } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Speakers from "./components/Speakers";
import Tickets from "./components/Tickets";

function App() {
  return (
    <Fragment>
      <Header />
      <Info />
      <br />
      <br />
      <Speakers />
      <br />
      <br />
      <Fragment>
        <div className="container">
          <h1 className="text-center">Tickets</h1>
          <br />
          <br />
          <br />
          <div className="card-deck mb-3 text-center">
            {[1, 2, 4].map(i => (
              <Tickets key={i} />
            ))}
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
}

export default App;
