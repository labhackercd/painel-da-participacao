const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  basePath: process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL,
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config) {
    return config;
  },
});
