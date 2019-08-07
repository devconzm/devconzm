import React from "react";

function Tickets() {
  return (
    <section class="pricing py-5">
      <div class="container">
    <div class="row">
   
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">EARLY-BIRD PASS</h5>
            <h6 class="card-price text-center">K50<span class="period"></span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Have access To Morning Session</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>All Key Notes</li>
            
            </ul>
            
            <a href="#" class="btn btn-block btn-primary text-uppercase">Get Tickets</a>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">STUDENT PASS</h5>
            <h6 class="card-price text-center">K80<span class="period">/</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Have access to Lemited Sessions</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>All Key Notes</li>
             
            </ul>
           
            <a href="#" class="btn btn-block btn-primary text-uppercase">Get Tickets</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">REGULAR PASS</h5>
            <h6 class="card-price text-center">$100<span class="period"></span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>attend all sessions</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>All Key Notes</li>
             
            </ul>
            
            <a href="#" class="btn btn-block btn-primary text-uppercase">Get Tickets</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
  );
}

export default Tickets;
