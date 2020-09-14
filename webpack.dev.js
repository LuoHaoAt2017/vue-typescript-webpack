const path = require("path");
const webpack = require("webpack");
const WebpackMerge = require("webpack-merge");
const config = require("./webpack.config");

module.exports = WebpackMerge(config, {
  mode: "development",
  devServer: {
    port: 9200,
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
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify("/api-test"),
      "process.env.NODE_ENV": JSON.stringify("dev"),
    }),
  ],
});
