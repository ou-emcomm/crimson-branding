const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  plugins: [
    new ZipPlugin({
      path: "",
      filename: "web.zip",
      pathPrefix: "./shared/build/",
      include: [/\.css/, /\.js(\.map)?/],
    }),
  ],
  output: {
    publicPath: "/shared/build/",
  },
});
