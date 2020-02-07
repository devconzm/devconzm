import React from "react";

import { gallery, patterns } from "./cloudImages";
import Mailchimp from "../components/mailchimp";

function Newsletter() {
  return (
    <section id="gallery" className="bg-white lg:flex-row px-4 lg:px-40 pt-12 lg:pt-14">
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
