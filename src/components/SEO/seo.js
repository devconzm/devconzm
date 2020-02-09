import React, { Fragment } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Schema from "../SEO/schemaOrg";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          twitter
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang
        }}
        meta={[
          {
            /* General tags */
          },
          {
            name: "description",
            content: metaDescription
          },
          {
            name: "image",
            content: site.siteMetadata.image
          },
          {
            /* OpenGraph tags */
          },
          {
            name: "og:url",
            content: site.siteMetadata.siteUrl
          },
          {
            name: "og:title",
            content: `${title} | ${site.siteMetadata.title}`
          },
          {
            name: "description",
            content: metaDescription
          },
          {
            name: "og:image",
            content: site.siteMetadata.image
          },
          {
            /* Twitter Card tags */
          },
          {
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            name: "twitter:creator",
            content: site.siteMetadata.twitter
          },
          {
            name: "twitter:title",
            content: `${title} | ${site.siteMetadata.title}`
          },
          {
            name: "twitter:description",
            content: metaDescription
          },
          {
            name: "twitter:image",
            content: site.siteMetadata.image
          }
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: "keywords",
                  content: keywords.join(", ")
                }
              : []
          )
          .concat(meta)}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      />
      <Schema />
    </Fragment>
  );
}

SEO.defaultProps = {
  lang: "en",
  keywords: [],
  description: "",
  meta: []
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default SEO;
