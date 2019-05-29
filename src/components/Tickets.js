import React from "react";

function Tickets() {
  return (
    <section id='tickets'>
      <div className='container'>
        <h1 className='text-center'>Tickets</h1>
        <div className='tickets row text-center'>
          <div className="ticket ticket-1 col-sm box-shadow">
            <h4 className="ticket-header">EARLY-BIRD PASS</h4>
            <p className="ticket-price">K 50</p>
            <p className="ticket-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="ticket ticket-2 col-sm box-shadow">
            <h4 className="ticket-header">STUDENT PASS</h4>
            <p className="ticket-price">K 80</p>
            <p className="ticket-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id mauris ex.</p>
          </div>
          <div className="ticket ticket-3 col-sm box-shadow">
            <h4 className="ticket-header">REGULAR PASS</h4>
            <p className="ticket-price">K 100</p>
            <p className="ticket-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id mauris ex.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tickets;
