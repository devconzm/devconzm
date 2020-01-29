import React from "react";

import { patterns } from "./cloudImages";
import Mailchimp from "../components/mailchimp";

function Newsletter() {
  return (
    <section id="gallery" className="bg-white lg:flex-row px-4 lg:px-40 pt-12 lg:pt-24">
      <div className="absolute left-0 fixed"></div>
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-century">Subscribe for Updates</h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 pl-12 mt-10 text-white">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <Mailchimp
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true
          },

          {
            name: "FNAME",
            placeholder: "Firstname",
            type: "text",
            required: true
          },
          {
            name: "LNAME",
            placeholder: "Lastname",
            type: "text",
            required: true
          }
        ]}
        action={""}
      />
    </section>
  );
}

export default Newsletter;
