const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMerge = require("webpack-merge");
const config = require("./webpack.config");

function resolve(src) {
  return path.resolve(__dirname, src);
}

module.exports = WebpackMerge(config, {
  mode: "development",
  entry: resolve("src/main.ts"),
  output: {
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 8090,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("public/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify("/api-test"),
      "process.env.NODE_ENV": JSON.stringify("dev"),
    }),
  ],
});
