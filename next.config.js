const withSass = require("@zeit/next-sass");


const path = require('path');

module.exports = withSass({
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    return config
  }
});

// module.exports = withSass({
//   /* config options here */
//   sassLoaderOptions: {
//     includePaths: ["absolute/path/a", "absolute/path/b"]
//   }
// });