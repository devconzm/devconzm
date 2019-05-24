import React from "react";

function Speakers() {
  const details = [
    { i: 1, text: 'Heading' },
    { i: 2, text: 'Speakers' },
    { i: 3, text: 'Voters' },
    { i: 4, text: 'Me ' },
    { i: 5, text: 'Olivier' },
    { i: 6, text: 'Heading' }

  ]
  return (
    <section id="speakers">
      <div className="container">
        <h1 className='text-center'>Speakers</h1>
        <div className="row">
          {details.map(speaker => (
            <div className="col-sm-6 col-lg-4 p-0" key={speaker.i}>
              <img
                className="rounded-circle mx-auto d-block img-fluid"
                src="https://via.placeholder.com/600/771796"
                alt="Generic placeholder"
                width="180"
                height="180"
              />
              <h2 className='text-center'>{speaker.text}</h2>
              <p className='text-center'>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod.
            </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
