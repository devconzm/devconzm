var plugins = [{
      plugin: require('/home/malgamves/Documents/GitHub/devconzm/node_modules/gatsby-plugin-gtag/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/malgamves/Documents/GitHub/devconzm/node_modules/gatsby-plugin-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-77563678-3","head":false,"anonymize":true},
    },{
      plugin: require('/home/malgamves/Documents/GitHub/devconzm/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/malgamves/Documents/GitHub/devconzm/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"DevCon Zambia","short_name":"DevCon ZM","start_url":"/","background_color":"#ffffff","theme_color":"#C73656","display":"minimal-ui","icon":"src/images/devcon_logo.png"},
    },{
      plugin: require('/home/malgamves/Documents/GitHub/devconzm/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/malgamves/Documents/GitHub/devconzm/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"exclude":["/tailwind-config-demo"]},
    },{
      plugin: require('/home/malgamves/Documents/GitHub/devconzm/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/malgamves/Documents/GitHub/devconzm/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"precachePages":["/register/","/coc/","/404/"]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
