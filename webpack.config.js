const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(src) {
  return path.resolve(__dirname, src)
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      "@": resolve("src")
    },
    extensions: ['.tsx', '.ts', '.js', '.vue', '.json']
  },
  externals: {
  }
}
