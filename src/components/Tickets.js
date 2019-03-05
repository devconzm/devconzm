import React from "react";

function Tickets() {
  return (
    <div className="card mb-4 box-shadow">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Early Bird Access</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          k50
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Priority t</li>
          <li>Enjoyable</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">
          Grab your ticket
        </button>
      </div>
    </div>
  );
}

export default Tickets;
