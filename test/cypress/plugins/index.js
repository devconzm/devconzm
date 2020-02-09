require("dotenv").config();

module.exports = (on, config) => {
  on("task", require("@cypress/code-coverage/task"));
  on("file:preprocessor", require("@cypress/code-coverage/use-browserify-istanbul"));

  config.baseUrl = process.env.WEBSITE_URL || "http://localhost:8000";
  config.env = config.env || {};
  return config;
};
