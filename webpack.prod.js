const path = require('path');
const { merge } = require('webpack-merge');
const ZipPlugin = require('zip-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    // minimize: false
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
        },
      }),
    ],
  },
  plugins: [
    new ZipPlugin({
      path: '',
      filename: 'web.zip',
      pathPrefix: `./portals/${path.basename(process.cwd())}`,
      include: [/static\//, /\.css/, /\.js(\.map)?/],
    }),
  ],
  output: {
    publicPath: `/portals/${path.basename(process.cwd())}/`,
  },
});
