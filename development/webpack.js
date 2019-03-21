var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    "site": "./webpack/index.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: "../hosts/static/js/[name].js",
    path: path.resolve(__dirname, '.')
  }
};
