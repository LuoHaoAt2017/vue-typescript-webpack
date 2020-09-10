const path = require("path");
const webpack = require("webpack");
const WebpackMerge = require("webpack-merge");
const config = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(src) {
  return path.resolve(__dirname, src);
}

module.exports = WebpackMerge(config, {
  mode: "production",
  entry: resolve("src/main.ts"),
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("public/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify("/api-prod"),
      "process.env.NODE_ENV": JSON.stringify("prod"),
    }),
  ],
});
