const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": hot(
    preferDefault(
      require("/home/malgamves/Documents/GitHub/devconzm/.cache/dev-404-page.js")
    )
  ),
  "component---src-pages-404-js": hot(
    preferDefault(
      require("/home/malgamves/Documents/GitHub/devconzm/src/pages/404.js")
    )
  ),
  "component---src-pages-index-js": hot(
    preferDefault(
      require("/home/malgamves/Documents/GitHub/devconzm/src/pages/index.js")
    )
  ),
  "component---src-pages-schedule-js": hot(
    preferDefault(
      require("/home/malgamves/Documents/GitHub/devconzm/src/pages/schedule.js")
    )
  ),
  "component---src-pages-scholarship-js": hot(
    preferDefault(
      require("/home/malgamves/Documents/GitHub/devconzm/src/pages/scholarship.js")
    )
  ),
  "component---src-pages-speakers-js": hot(
    preferDefault(
      require("/home/malgamves/Documents/GitHub/devconzm/src/pages/speakers.js")
    )
  ),
  "component---src-pages-tailwind-config-demo-js": hot(
    preferDefault(
      require("/home/malgamves/Documents/GitHub/devconzm/src/pages/tailwind-config-demo.js")
    )
  ),
  "component---src-pages-travel-js": hot(
    preferDefault(
      require("/home/malgamves/Documents/GitHub/devconzm/src/pages/travel.js")
    )
  )
};