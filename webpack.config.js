var webpack = require('webpack');
var path = require('path');
var TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./assets/js/index.js",
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "assets/dist/js"),
      filename: "bundle.min.js"
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
  };