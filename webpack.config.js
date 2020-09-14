const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolve(src) {
  return path.resolve(__dirname, src);
}

module.exports = {
  entry: resolve("src/main.ts"),
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img/",
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("public/index.html"),
      chunks: ["main"],
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
    extensions: [".tsx", ".ts", ".js", ".vue", ".json"],
  },
};
