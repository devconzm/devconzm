import React from 'react';
import theGrandHotelLogo from "../assets/dev4.png";

function Venue() {
    return (
        <section id="venue">
            <div className="container">
                <div className="text-center">
                    <img className="img-fluid" src={theGrandHotelLogo} alt="devcon logo" title="devcon logo" />
                    <br />
                    <br />
                    <h3>Venue</h3>
                    <p>Confucious Center - University of Zambia </p>
                    <p>08am - 5pm</p>
                    {/* <p><a href="#header" className="btn btn-outline-primary devcon">REGISTER NOW</a></p> */}
                </div>
            </div>
        </section>
    )
}
export default Venue;