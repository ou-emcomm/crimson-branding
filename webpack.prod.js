const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ZipPlugin = require("zip-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false
        }
      })
    ]
  },
  plugins: [
    new ZipPlugin({
      path: "",
      filename: "web.zip",
      pathPrefix: "./shared/build/",
      include: [/static\//, /\.css/, /\.js(\.map)?/]
    })
  ],
  output: {
    publicPath: "/shared/build/",
    filename: "bundle.js"
  }
});
