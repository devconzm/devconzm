const path = require("path");

// https://webpack.js.org/loaders/css-loader/#modules
const cssModuleOpts = {
  modules: {
    mode: "local",
    localIdentName: "[name]__[local]--[hash:base64:5]",
    context: path.resolve(__dirname, "src"),
    hashPrefix: "osf"
  },
  importLoaders: 1,
  import: true
};

module.exports = ({ config }) => {
  // https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
  // https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"];

  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve("babel-loader");

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env")
  ];

  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve("@babel/plugin-proposal-class-properties"),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve("babel-plugin-remove-graphql-queries")
  ];

  config.module.rules[2].use[1].options = cssModuleOpts;

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"];

  //Generate a decorator call in every story (storybook addon-storysource)
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: {
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
          prettierConfig: {
            printWidth: 100,
            singleQuote: false
          }
        }
      }
    ],
    enforce: "pre"
  });

  /* PostCSS Support */
  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: "postcss-loader",
        options: {
          /* 
            Enable Source Maps
           */
          sourceMap: true,
          /*
            Set postcss.config.js config path && ctx 
           */
          config: {
            path: "./.storybook/"
          }
        }
      }
    ],

    include: path.resolve(__dirname, "../")
  });

  // Understand MDX story files and annotate TS/JS story files with source code (storybook addon-docs)
  const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

  module.exports = async ({ config }) => {
    config.module.rules.push({
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: "babel-loader",
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"]
          }
        },
        {
          loader: "@mdx-js/loader",
          options: {
            compilers: [createCompiler({})]
          }
        }
      ]
    });
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve("@storybook/source-loader"),
      exclude: [/node_modules/],
      enforce: "pre"
    });
    return config;
  };

  return config;
};
