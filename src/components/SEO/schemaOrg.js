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
          name: "Open Source Festival",
          url: "https://festival.oscafrica.org/",
          logo: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374354/osf/Logo/PNG/orange.png",
          description: `
          Open Source Festival is a high profile event that would attract student delegates, developers, designers and corporate organizations on a large scale with series of talks, workshops, and awareness of open-sourced developer tools.
          `
        })}
      </script>
    </Helmet>
  );
}

export default SchemaOrg;
