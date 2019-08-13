import React from "react";

function Tickets() {
  return (
    <section class="pricing py-5">
        <h1 className="text-center section-titlet">Tickets</h1>
      <div class="container">
    <div class="row">
  
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Early Bird Ticket</h5>
            <h6 class="card-price text-center">ZK150<span class="period"></span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Runs from 29th July to 19th August 2019</li>

              
            
            </ul>
            
            <a href="https://www.quicket.co.zm/events/80301-developer-conference-zambia-19/" class="btn btn-block btn-primary text-uppercase">Get Tickets</a>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Regular Ticket</h5>
            <h6 class="card-price text-center">ZK250<span class="period">/</span></h6>
            <hr></hr>
            <ul class="fa-ul">
            Runs from 20th August to 20th September 2019
             
             
            </ul>
           
            <a href="https://www.quicket.co.zm/events/80301-developer-conference-zambia-19/" class="btn btn-block btn-primary text-uppercase">Get Tickets</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Donation</h5>
            <h6 class="card-price text-center">ZK---<span class="period"></span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Your Donation will be highly Apreciated</li>
              
             
            </ul>
            
            <a href="https://www.quicket.co.zm/events/80301-developer-conference-zambia-19/" class="btn btn-block btn-primary text-uppercase">Donate</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
  );
}

export default Tickets;
