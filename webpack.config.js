'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/client/main.jsx')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  historyApiFallback: {
    index: '/'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-2", "react-hmre"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
