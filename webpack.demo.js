var path = require('path');

var browserConfig = {
  entry: './React/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js)$/, loader: 'babel-loader' }],
  },
  mode: 'production',
};

module.exports = browserConfig;
