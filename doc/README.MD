### Could not find a declaration file for module 'loadsh'
如何在typescript项目中引入loadsh。
原理是什么
如何操作

### webpack打包后css中的背景图片路径错误问题

css中的背景图片路径发生错误。

在src目录下，以如下方式在css中使用背景图片。
```background-image: url("../assets/img/icon_add.png");```
打包后的路径是绝对路径，或者说是相对于根路径的。打包后的路径是
```background-image: url("icon_add.png");```
意思是在根路径下寻找icon_add.png图片。

当采用mini-css-extract-plugin将打包后的css文件统一放置到根目录下的css目录下。
打包后的图片路径依然是
```background-image: url("icon_add.png");```
但是此时css目录下没有icon_add.png，icon_add.png在根目录下，因此路径错误。
需要配置MiniCssExtractPlugin.loader的options.publicPath选项。
打包后的css文件放置在根目录下的css目录下，因此css文件相对于根目录的相对路径是..
因此publicPath选项的值是..


### html-webpack-plugin
在多入口情况下的配置，根据同一个html模版创建不同的html文件。
注意chunks: ['h1']的配置。chunks中的配置项决定了打包后的
html文件应该包含引入哪些脚本文件。

```
    new HtmlWebpackPlugin({
        filename: "h1.html",
        title: '氕',
        template: resolve("public/index.html"),
        chunks: ['h1'], // never gold.bundle.js
        inject: true
    }),
    new HtmlWebpackPlugin({
        filename: "h2.html",
        title: '氘',
        template: resolve("public/index.html"),
        chunks: ['h2'], // never silver.bundle.js
        inject: true
    }),
    new HtmlWebpackPlugin({
        filename: "h3.html",
        title: '氚',
        template: resolve("public/index.html"),
        chunks: ['h3'], // never copper.bundle.js
        inject: true
    })
```

### 多页面应用和多端口的关系
多个页面可以共用一个端口

在多入口情况下的配置
可以为每一个页面(每一个vue实例)启动一个devServer服务器。
启动项目的时候，启动三次，每一次启动都启动一个新的web服务器。
```
"start:h1": "webpack-dev-server --option h1 --config webpack.dev.js",
"start:h2": "webpack-dev-server --option h2 --config webpack.dev.js",
"start:h3": "webpack-dev-server --option h3 --config webpack.dev.js",
```
根据option参数值的不同来决定启动的端口。
```
    if (option === 'h1') {
        port = 3000;
    } else if (option === 'h2') {
        port = 4000;
    } else {
        port = 5000;
    }
```

### webpack自定义命令行参数
获取命令行自定义参数
当 webpack 配置对象导出为一个函数时，命令行中的参数可以被argv接收。
```
module.exports = function(env, argv) {
    let port = 3000, option = argv.option;
    if (option === 'h1') {
        port = 3000;
    } else if (option === 'h2') {
        port = 4000;
    } else {
        port = 5000;
    }
    return WebpackMerge(config, {
        mode: 'development',
        devServer: {
            ...
        },
        module: {
            ...
        }
    })
};
```

### 登陆逻辑和权限验证设计

```
"start:h1": "webpack-dev-server --option h1 --config webpack.dev.js",
"start:h2": "webpack-dev-server --option h2 --config webpack.dev.js",
"start:h3": "webpack-dev-server --option h3 --config webpack.dev.js",
"build:h1": "webpack --progress --option h1 --config webpack.prod.js",
"build:h2": "webpack --progress --option h2 --config webpack.prod.js",
"build:h3": "webpack --progress --option h3 --config webpack.prod.js"
```