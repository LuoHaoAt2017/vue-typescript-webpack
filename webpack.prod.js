const path = require("path");
const webpack = require("webpack");
const WebpackMerge = require("webpack-merge");
const config = require("./webpack.config");

module.exports = WebpackMerge(config, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify("/api-prod"),
      "process.env.NODE_ENV": JSON.stringify("prod"),
    }),
  ],
});
