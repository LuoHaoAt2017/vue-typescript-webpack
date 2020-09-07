const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                }
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
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    externals: {
    }
}
