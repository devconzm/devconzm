const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/malgamves/Documents/GitHub/devconzm/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/malgamves/Documents/GitHub/devconzm/src/pages/404.js"))),
  "component---src-pages-coc-js": hot(preferDefault(require("/home/malgamves/Documents/GitHub/devconzm/src/pages/coc.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/malgamves/Documents/GitHub/devconzm/src/pages/index.js"))),
  "component---src-pages-register-js": hot(preferDefault(require("/home/malgamves/Documents/GitHub/devconzm/src/pages/register.js")))
}

