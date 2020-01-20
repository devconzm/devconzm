import React from "react";

import { gallery, patterns } from "../components/cloudImages";

function Gallery() {
  return (
    <section id="gallery" className="bg-white lg:flex-row px-4 lg:px-40 pt-12 lg:pt-24">
      <div className="absolute left-0 fixed">
        <img className="-mt-8 lg:-mt-12 -pl-4" src={patterns.headerRec} alt="" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-ubuntu">Gallery</h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 pl-12 mt-10 text-white">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <div className="flex flex-wrap text-white my-20">
        {[
          {
            day: "Day 1",
            tag: "Sustain Africa + Workshop",
            image: gallery.one,
            href: "#"
          },
          {
            day: "Day 2",
            tag: "Conference Day 1",
            image: gallery.two,
            href: "#"
          },
          {
            day: "Day 3",
            tag: "Conference Day 2",
            image: gallery.three,
            href: "#"
          }
        ].map(gallery => (
          <a href={gallery.href} key={gallery.day} className="relative lg:w-1/3 max-w-sm rounded px-1 py-2">
            <figure className="cursor-pointer">
              <img className="w-auto mx-auto" src={gallery.image} alt={`An amazing photograph from ${gallery.tag}.`} />
              <div className="z-0 -mt-20 pt-4 px-6 w-auto h-20 bg-black opacity-50 text-white">
                <p className="text-sm lg:text-xs">{gallery.day}</p>
                <h3 className="font-bold text-base">{gallery.tag}</h3>
              </div>
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
