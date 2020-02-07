import React from "react";

function Tickets() {
  return (
    <section>
      <div className="bg-dark-blue-primary w-full h-full z-20 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-10 sm:pb-6 lg:pt-32 lg:pt-32 xl:pb-24 2xl:pt-56 2xl:pb-48">
        <div className="text-white items-center py-32">
          <h1 className="font-century text-4xl lg:text-6xl leading-tight font-bold uppercase">
            We'll give you a signal
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mt-4">
            Tickets Sales will start in a few months, in the mean time, follow us on{" "}
            <strong>
              {" "}
              <a href="https://facebook.com/devconzm/" rel="noopener noreferrer" target="_blank">
                Facebook{" "}
              </a>{" "}
            </strong>
            and{" "}
            <strong>
              <a href="https://twitter.com/devcon_zm" rel="noopener noreferrer" target="_blank">
                Twitter
              </a>{" "}
            </strong>{" "}
            to stay upto date or...
          </p>
          <a
            href="/"
            className="w-1/2 block sm:inline-block sm:w-auto mt-8 px-12 py-3 bg-orange-primary text-black rounded-lg text-center uppercase"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to Our Newsletter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Tickets;
