const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
});
