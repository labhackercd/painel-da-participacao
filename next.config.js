const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  basePath: '/participacao',
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config) {
    return config;
  },
});
