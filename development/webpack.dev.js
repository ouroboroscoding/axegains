var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    "components": "./react/index.js"
  },
  mode: "development",
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
    filename: "../hosts/static/js/[name].dev.js",
    path: path.resolve(__dirname, '.'),
    libraryTarget: "var",
    library: "Components"
  },
  watch: true
};
