import React from "react";

function Speakers() {
    const details = [
        {i: 1, text: 'Heading'},
        {i: 2, text: 'Speakers'},
        {i: 3, text: 'Voters'},
        {i: 4, text: 'Me '},
        {i: 5, text: 'Olivier'},
        {i: 6, text: 'Heading'}

    ]
  return (
    <div className="container">
        <h1 className='text-center'>Speakers</h1>
        <br />
        <br />
        <br />
        <br />
      <div className="row">
        {details.map(speaker => (
          <div className="col-lg-4" key={speaker.i}>
            <img
              className="rounded-circle"
              src="https://via.placeholder.com/600/771796"
              alt="Generic placeholder"
              width="180"
              height="180"
            />
            <h2>{speaker.text}</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
