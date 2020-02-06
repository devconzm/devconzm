module.exports = {
  siteMetadata: {
    title: "",
    description: `
    DevCon Zambia is the annual developer event of Southern Africa attracting developers, designers and industry leaders with the aim of spurring growth through interactive sessions, workshops, and networking.    `,
    siteUrl: "https://devcon.co.zm",
    image:
      "https://res.cloudinary.com/devconzm/image/upload/q_auto,f_auto/v1580208211/DevCon/2020/Assets/devconzm-poster.png",
    twitter: "@devcon_zm"
  },
  plugins: [
    "gatsby-plugin-gtag",
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: "UA-77563678-3",
        head: false,
        anonymize: true
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DevCon Zambia",
        short_name: "DevCon ZM",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#C73656",
        display: "minimal-ui",
        icon: "src/images/devcon_logo.png"
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/tailwind-config-demo"]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/schedule/", "/travel/", "/register/", "/coc/", "/speakers/", "/scholarship/", "/about/"]
      }
    }
  ]
};
