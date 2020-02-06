import React from "react";

function Cta() {
  return (
    <section className="z-10 font-century bg-dark-blue-500">
      <div className="flex flex-wrap max-w-4xl mx-auto p-12 text-center">
        {[
          {
            value: "200+",
            title: "Attendees"
          },
          {
            value: "2",
            title: "Days"
          },
          {
            value: "20+",
            title: "Talks"
          },
          {
            value: "5+",
            title: "Workshops"
          }
        ].map(data => (
          <div key={data.title} className="w-1/2 lg:w-1/4 p-6">
            <span className="text-4xl font-bold text-white uppercase">{data.value}</span>
            <p className="text-lg font-bold text-gray-200 uppercase">{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cta;
