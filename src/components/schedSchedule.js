import React from "react";
import useScript from "../hooks/useScript";

function SchedSchedule() {
  return (
    <section className="lg:flex-row px-4 lg:px-40 pt-32 pb-24">
      <div>
        <a id="sched-embed" href="https://oscafest.sched.com/">
          View the Open Source Festival 2020 schedule &amp; directory.
        </a>
        {useScript("https://oscafest.sched.com/js/embed.js")}
      </div>
    </section>
  );
}

export default SchedSchedule;
