import React from 'react';
import theGrandHotelLogo from "../assets/dev4.png";

function Venue() {
    return (
        <section id="venue">
            <div className="container">
                <div className="text-center">
                    <img className="img-fluid" src={theGrandHotelLogo} alt="THE GRAND HOTEL MAIN HALL" title="THE GRAND HOTEL MAIN HALL" />
                    <p>THE GRAND HOTEL</p>
                    <p>MAIN HALL</p>
                    <p>08am - 5pm</p>
                    <p><a href="#header" className="btn btn-light btn-lg email">ENTER EMAIL</a></p>
                    <p><a href="#header" className="btn btn-outline-primary devcon">REGISTER NOW</a></p>
                </div>
            </div>
        </section>
    )
}
export default Venue;