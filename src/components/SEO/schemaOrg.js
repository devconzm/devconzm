import React from "react";
import Helmet from "react-helmet";

function SchemaOrg() {
  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://www.schema.org",
          "@type": "Organization",
          name: "DevCon Zambia",
          url: "https://devcon.co.zm",
          logo:
            "https://res.cloudinary.com/devconzm/image/upload/q_auto,f_auto/v1580215992/DevCon/2020/Assets/devconzm-favicon-rec.png",
          description: `
          DevCon Zambia is the annual developer event of Southern Africa attracting developers, designers and industry leaders with the aim of spurring growth through interactive sessions, workshops, and networking.
          `
        })}
      </script>
    </Helmet>
  );
}

export default SchemaOrg;
