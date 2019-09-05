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
                    <h3>It's happening at </h3>
                    <p>Confucious Center - University of Zambia</p>
                    <p>Lusaka, Zambia</p>
                    <h3> 19th to 20th Sept. from  </h3>
                    <p>9 to 5 o'clock</p>
                    {/* <p><a href="#header" className="btn btn-outline-primary devcon">REGISTER NOW</a></p> */}
                </div>
            </div>
        </section>
    )
}
export default Venue;
