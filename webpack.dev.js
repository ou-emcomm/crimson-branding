const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    openPage: ['index.html', 'preferences.html'],
    contentBase: './dist',
    host: '0.0.0.0',
    // writeToDisk: true,
  },
});
