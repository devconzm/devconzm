import React from "react";
import Header from "./Info";
import { speakers } from "../data/speakers";

function Speakers() {
  return (
    <>
      <Header />
      <section id="speakers">
        <div className="container">
          <h1 className="text-center">Speakers</h1>
          <div className="row">
            {speakers.map(speaker => (
              <div className="col-sm-6 col-lg-4 p-0" key={speaker.id}>
                <img
                  className="rounded-circle mx-auto d-block img-fluid"
                  src={speaker.image}
                  alt={speaker.name}
                  width="180"
                  height="180"
                />
                <br />
                <div className="speaker-text-div">
                  <h4 className="text-center">{speaker.name}</h4>
                  <h6 className="text-center">{speaker.company}</h6>
                  <p className="text-center">{speaker.talk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Speakers;
