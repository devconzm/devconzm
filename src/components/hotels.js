import React from "react";

import { hotels } from "../components/cloudImages";

function Hotels() {
  return (
    <section className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-2">
      <div className="flex flex-wrap">
        <div className="mb-4 w-full text-dark-blue-primary-600">
          <h1 className="text-spo font-bold font-ubuntu">ACCOMODATION</h1>
          <p className="text-base my-4">
            The organizers of OSCA FESTIVAL aim to promote a comfortable and flexible lodging experience for attendees.
            Nigeria provides a large number and wide range of hotels, which you can book on the usual online sites. Here
            are a few recommendations according to your budget. <br />
            <b>We encourage all attendees to make reservations early as prices may change</b>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap text-white my-8">
        {[
          {
            name: "Million Dollars Imperial Hotel",
            image: hotels.million,
            price: "Starts at 6500/night.",
            duration: "~ 32 minutes drive to the venue.",
            link:
              "https://www.google.com/travel/hotels/entity/CgoI_u3LitbF3PUKEAE/prices?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4274032%2C4285990%2C4291318%2C4301054%2C4305595%2C4308216%2C4311408%2C4313006%2C4314846%2C4315873%2C4317915%2C4324293%2C4326405%2C4326763%2C4328159%2C4329288%2C4330112%2C4336932%2C4270859%2C4284970%2C4291517%2C4292955%2C4307997&hl=en&gl=ng&un=1&rp=EP7ty4rWxdz1CjgCQABIAQ&ictx=1&ved=2ahUKEwi6xZ6FlvTmAhXiRhUIHVbjAEQQjLsCKAAwD3oECBwQAQ&hrf=IgNOR04qFgoHCOQPEAEYERIHCOQPEAEYEhgBIAKCASQweDEwM2I4ZDdhMzkyNGZmZjU6MHhhZWI3MjJkNjE1MmY2ZmWaASYaJDB4MTAzYjhkN2EzOTI0ZmZmNToweGFlYjcyMmQ2MTUyZjZmZQ"
          },
          {
            name: "Green Royal Suites Annex",
            image: hotels.green,
            price: "Starts at 10,500/night.",
            duration: "~ 11 minutes drive to the venue.",
            link:
              "https://www.google.com/travel/hotels/entity/CgsIosm_m5y-6drdARAB/prices?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4308216%2C4308984%2C4314846%2C4315873%2C4317915%2C4324293%2C4328159%2C4329288%2C4338119%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=ng&un=1&rp=EKLJv5ucvuna3QE4AkAASAE&ictx=1&ved=2ahUKEwjLs4y--4TnAhWhkFwKHb7LDXMQjLsCKAAwD3oECCAQAQ&hrf=IgNOR04qFgoHCOQPEAIYARIHCOQPEAIYAhgBKACCASUweDEwM2I4ZDk3NmNkYTM5MDc6MHhkZGI1YTVmMWMzNmZlNGEymgEnGiUweDEwM2I4ZDk3NmNkYTM5MDc6MHhkZGI1YTVmMWMzNmZlNGEy"
          },
          {
            name: "Hotel Newcastle",
            image: hotels.newcastle,
            price: "Starts at ₦12,050/night.",
            duration: "~ 2 minutes drive to the venue.",
            link:
              "https://www.google.com/travel/hotels/Hotel%20Newcastle/entity/CgsI5t_Pk_PqjaOlARAB/prices?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4308216%2C4308984%2C4314846%2C4315873%2C4317915%2C4324293%2C4328159%2C4329288%2C4338119%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=ng&un=1&q=Hotel%20Newcastle&rp=EObfz5Pz6o2jpQEQlYKkl-q8x7WcATgCQABIAg&ictx=1&ved=2ahUKEwjg5ZjC_YTnAhXKPsAKHTxhARAQvS4wAHoECAsQIg&hrf=CgYI8KsBEAAiA05HTioWCgcI5A8QAhgBEgcI5A8QAhgCGAEoAFgBkgECIAE"
          },
          {
            name: "H53 SUITES",
            image: hotels.h53,
            price: "Starts at ₦19000/night.",
            duration: "~ 17 minutes drive to the venue.",
            link:
              "https://www.google.com/travel/hotels/entity/CgoI6N6Gy_rDjfJIEAE/prices?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4308216%2C4308984%2C4314846%2C4315873%2C4317915%2C4324293%2C4328159%2C4329288%2C4338119%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=ng&un=1&rp=EOjehsv6w43ySDgCQABIAQ&ictx=1&ved=2ahUKEwjh5eTx_4TnAhXKgVwKHad8DU0QjLsCKAAwD3oECCUQAQ&hrf=IgNOR04qFgoHCOQPEAEYDxIHCOQPEAEYEBgBKACCASUweDEwM2I5M2JkYmU5NjI4NTk6MHg0OGU0MzYxZmE5NjFhZjY4mgEnGiUweDEwM2I5M2JkYmU5NjI4NTk6MHg0OGU0MzYxZmE5NjFhZjY4"
          },
          {
            name: "Banex Hotel & Suites",
            image: hotels.banex,
            price: "Starts at ₦20,000/night.",
            duration: "~ 6 minutes drive to the venue.",
            link:
              "https://www.google.com/travel/hotels/entity/CgoI6N6Gy_rDjfJIEAE/prices?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4308216%2C4308984%2C4314846%2C4315873%2C4317915%2C4324293%2C4328159%2C4329288%2C4338119%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=ng&un=1&rp=EOjehsv6w43ySDgCQABIAQ&ictx=1&ved=2ahUKEwjh5eTx_4TnAhXKgVwKHad8DU0QjLsCKAAwD3oECCUQAQ&hrf=IgNOR04qFgoHCOQPEAEYDxIHCOQPEAEYEBgBKACCASUweDEwM2I5M2JkYmU5NjI4NTk6MHg0OGU0MzYxZmE5NjFhZjY4mgEnGiUweDEwM2I5M2JkYmU5NjI4NTk6MHg0OGU0MzYxZmE5NjFhZjY4"
          },
          {
            name: "Lendour Luxury Hotel & Suites",
            image: hotels.lendour,
            price: "Starts at ₦25,550/night.",
            duration: "~ 8 minutes drive to the venue.",
            link:
              "https://www.google.com/travel/hotels/entity/CgoI6N6Gy_rDjfJIEAE/prices?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4308216%2C4308984%2C4314846%2C4315873%2C4317915%2C4324293%2C4328159%2C4329288%2C4338119%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=ng&un=1&rp=EOjehsv6w43ySDgCQABIAQ&ictx=1&ved=2ahUKEwjh5eTx_4TnAhXKgVwKHad8DU0QjLsCKAAwD3oECCUQAQ&hrf=IgNOR04qFgoHCOQPEAEYDxIHCOQPEAEYEBgBKACCASUweDEwM2I5M2JkYmU5NjI4NTk6MHg0OGU0MzYxZmE5NjFhZjY4mgEnGiUweDEwM2I5M2JkYmU5NjI4NTk6MHg0OGU0MzYxZmE5NjFhZjY4"
          },
          {
            name: "Airbnb",
            image: hotels.airbnb,
            price: "Starts $30/night.",
            duration: "See available spaces around the venue",
            link: "https://www.airbnb.com/s/Gbagada--Lagos"
          }
        ].map(hotel => (
          <a href={hotel.link} key={hotel.name} className="relative w-full h-full lg:w-1/3 max-w-sm rounded px-2 mt-4">
            <figure className="cursor-pointer w-full">
              <img className="w-auto mx-auto" src={hotel.image} alt={`An amazing photograph of ${hotel.name}.`} />
              <div className="z-0 -mt-20 pt-8 px-6 w-auto h-20 bg-black opacity-50 text-white">
                <h3 className="font-bold text-base">{hotel.name}</h3>
              </div>
            </figure>
            <div className="my-2">
              <p className="text-black">
                <span className="font-bold">₦</span>
                &nbsp;{hotel.price}
              </p>
              <p className="text-black">
                <span className="font-bold" role="img" aria-label="A car emoji">
                  🚗
                </span>
                &nbsp;{hotel.duration}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Hotels;
