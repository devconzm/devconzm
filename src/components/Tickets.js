import React from "react";

function Tickets() {
  return (
    <section id="tickets">
      <div className="container">
        <h1 className="text-center">Tickets</h1>
        <div className="tickets row text-center">
          <div className="ticket ticket-1 col-sm box-shadow">
            <h4 className="ticket-header">EARLY-BIRD PASS</h4>
            <p className="ticket-price">K 150</p>
            <p className="ticket-content">
              Get from 29th July to 31st August 2019
            </p>
            <a href="https://qkt.io/I3SHAd">
              <p className="btn btn-info btn-sm">Click here to Purchase.</p>
            </a>
          </div>
          <div className="ticket ticket-2 col-sm box-shadow">
            <h4 className="ticket-header">REGULAR PASS</h4>
            <p className="ticket-price">K 250</p>
            <p className="ticket-content">
              From 20th August to 20th September 2019
            </p>
            {/* <a href="https://qkt.io/I3SHAd">
              <p className="btn btn-info btn-sm">Click here to Purchase.</p>
            </a> */}
          </div>
          {/* <div className="ticket ticket-2 col-sm box-shadow">
            <h4 className="ticket-header">REGULAR PASS</h4>
            <p className="ticket-price">K 250</p>
            <p className="ticket-content">
              Get from 20th August to 20th September 2019
            </p>
            <a href="https://qkt.io/I3SHAd">
              <p className="btn btn-info btn-sm">Click here to Purchase.</p>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Tickets;
