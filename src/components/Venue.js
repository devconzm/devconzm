import React from 'react';
import theGrandHotelLogo from '../assets/dev4.webp';

function Venue() {
  return (
    <section id="venue">
      <div className="container">
        <div className="text-center">
          {/* buy tickets buttn */}
          <div className="p-5 text-center">
            <button
              onClick={() =>
                window.open(
                  'https://www.quicket.co.zm/events/80301-developer-conference-zambia-19/'
                )
              }
              type="button"
              className="btn btn-info devcon"
            >
              Buy tickets
            </button>
          </div>
          {/*  */}
          {/* Social Media */}
          <img
            className="img-fluid"
            src={theGrandHotelLogo}
            alt="devcon logo"
            title="devcon logo"
          />
          <br />
          <br />
          {/* <h3>It's happening at </h3>
                    <p>Modoreen Conference Centre</p>
                    <p>Lusaka, Zambia</p>
                    <a href="https://maps.app.goo.gl/a8QJzb1S6qLK2Es58"> <button type="button" class="btn btn-outline-primary">Directions</button> </a>
                    <br></br> */}
          <br></br>
          <p className="small lead">Dates: 19th - 20th Sept 2020 </p>
          <p className="small lead"> Time: 9 - 5 o'clock each day </p>

          {/* <p><a href="#header" className="btn btn-outline-primary devcon">REGISTER NOW</a></p> */}
        </div>
      </div>
    </section>
  );
}
export default Venue;
