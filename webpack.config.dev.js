var path = require('path');
var webpack = require('webpack');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './app.jsx',
    'webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
