import React from "react";

import { restaurants, patterns } from "../components/cloudImages";

function Restaurants() {
  return (
    <section className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-12 lg:pt-24">
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-ubuntu">Restaurants</h1>
          <p className="text-base">Hungry? Stop by whenever you can and get something tasty</p>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 pl-12 mt-10 text-white">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <div className="flex flex-wrap text-white my-8">
        {[
          {
            name: "Eko Hotel and Suites",
            image: restaurants.dummy,
            link: "#"
          },
          {
            name: "Oriental Hotel",
            image: restaurants.dummy,
            link: "#"
          },
          {
            name: "Balmoral Palace",
            image: restaurants.dummy,
            link: "#"
          },
          {
            name: "Eko Hotel and Suites",
            image: restaurants.dummy,
            link: "#"
          },
          {
            name: "Oriental Hotel",
            image: restaurants.dummy,
            link: "#"
          },
          {
            name: "Balmoral Palace",
            image: restaurants.dummy,
            link: "#"
          },
          {
            name: "Eko Hotel and Suites",
            image: restaurants.dummy,
            link: "#"
          },
          {
            name: "Oriental Hotel",
            image: restaurants.dummy,
            link: "#"
          },
          {
            name: "Balmoral Palace",
            image: restaurants.dummy,
            link: "#"
          }
        ].map(restaurant => (
          <a
            href={restaurant.link}
            key={restaurant.name}
            className="relative w-full h-full lg:w-1/3 max-w-sm rounded px-2 mt-4"
          >
            <figure className="cursor-pointer w-full">
              <img
                className="w-auto mx-auto"
                src={restaurant.image}
                alt={`An amazing photograph of ${restaurant.name}.`}
              />
              <div className="z-0 -mt-20 pt-4 px-6 w-auto h-20 bg-black opacity-50 text-white">
                <h3 className="font-bold text-base">{restaurant.name}</h3>
              </div>
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Restaurants;
