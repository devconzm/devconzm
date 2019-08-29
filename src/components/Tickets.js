import React from "react";

function Tickets() {
  return (
    <section className="pricing py-5">
        <h1 className="text-center section-titlet">Tickets</h1>
      <div className="container">
    <div className="row">
  
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Early Bird Ticket</h5>
            <h6 className="card-price text-center">ZK150<span className="period"></span></h6>
            <hr></hr>
            <ul className="fa-ul">
              Runs from 29th July to 1st September 2019
            </ul>
            
            <a href="https://www.quicket.co.zm/events/80301-developer-conference-zambia-19/" className="btn btn-block btn-primary text-uppercase">Get Tickets</a>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Regular Ticket</h5>
            <h6 className="card-price text-center">ZK250<span className="period"></span></h6>
            <hr></hr>
            <ul className="fa-ul">
            Runs from 1st September to 20th September 2019
           </ul>
           
            <a href="https://www.quicket.co.zm/events/80301-developer-conference-zambia-19/" className="btn btn-block btn-primary text-uppercase">Get Tickets</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Donation</h5>
            <h6 className="card-price text-center">ZK---<span className="period"></span></h6>
            <hr></hr>
            <ul className="fa-ul">
              Your Donation will be highly Apreciated
            </ul>
            
            <a href="https://www.quicket.co.zm/events/80301-developer-conference-zambia-19/" className="btn btn-block btn-primary text-uppercase">Donate</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
  );
}

export default Tickets;
