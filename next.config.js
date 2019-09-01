// const withPlugins = require('next-compose-plugins');

// const withPWA = require('next-pwa');
const withSass = require('@zeit/next-sass');

// const withImages = require('next-images');
// const withConfig = require("next-config");

module.exports = withSass({
  /* config options here */
  sassLoaderOptions: {
    includePaths: ["absolute/path/a", "absolute/path/b"]
  }
});
// module.exports = withPlugins([
//   [withSass],

// ], {})