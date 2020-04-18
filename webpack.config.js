var path = require('path');

var browserConfig = {
  entry: './src/browser/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js)$/, loader: 'babel-loader' }],
  },
  mode: 'production',
};

var serverConfig = {
  entry: './src/server/express.js',
  target: 'node',
  output: {
    path: __dirname,
    filename: 'express.js',
  },
  mode: 'production',
  module: {
    rules: [{ test: /\.(js)$/, loader: 'babel-loader' }],
  },
};

module.exports = [browserConfig, serverConfig];
