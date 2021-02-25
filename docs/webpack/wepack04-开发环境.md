---
title: 开发环境
date: 2021-02-24
categories:
    - webpack
tags:
    - webpack
---
# 开发环境
在开始前，我们先将 `mode` 设置为 `development`，并将 `title` 设置为 `Development`。
**webpack.config.js**
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
+ mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
-       title: '管理输出',
+       title: '开发环境',
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
## 使用source map
当webpack打包源码时，可能会很难追踪到error和warning在源码中的原始位置。例如将三个源文件(a.js b.js c.js)打包成一个bundle.js，而其中
一个源文件报错，堆栈跟踪就会直接指向到bundle.js。但你可能需要准确的知道哪个的源文件的哪个报错位置。

为了更好的追踪error和warning，javascript提供source maps 功能，可以将编译后的代码映射回原始源代码。如果b.js 报错，source map就会明确
的告诉你。
**webpack.config.js**
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
+ devtool: 'inline-source-map',
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: '开发环境',
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
现在，让我们来做一些调试，在 `print.js` 文件中生成一个错误：
```
export default function printMe() {
-  console.log('I get called from print.js!');
+  cosnole.log('I get called from print.js!');
}
```
运行 `npm run build`

在浏览器中打开 `dist/index.html` 点击按钮，在控制台会有如下报错信息：
```
print.js:2 Uncaught ReferenceError: cosnole is not defined
    at HTMLButtonElement.printMe (print.js:2)
```
此错误信息包含报错的源文件名称及错误行数，这是对定位错误非常有帮助的。

## 选择一个自动编译代码开发工具
在每次编译代码是，手动运行 `npm run build` 会显得很麻烦。
webpack 提供几种可选方式，帮助你在代码发生变化后自动编译代码：  
    1. webpack's Watch Mode   
    2. webpack-dev-server  
    3. webpack-dev-middleware  

### 使用 watch mode (观察模式)
你可以指示webpack 'watch' 所有文件的更改。如果其中一个文件被更新，代码将被重新编译，所以你不用再去手动运行整个构建。
**package.json**
```
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
+   "watch": "webpack --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^5.2.0",
    "webpack": "^5.23.0",
    "webpack-cli": "^4.5.0"
  }
}
```
如果不想在 `watch` 触发增量构建后删除 `index.html` 文件，可以在 `CleanWebpackPlugin` 中配置 `cleanStaleWebpackAssets` 选项 来实现：
**webpack.config.js**
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  plugins: [
-     new CleanWebpackPlugin(),
+     new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: '开发环境',
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
现在，你可以在命令行中运行 `npm run watch`，然后就会看到 `webpack` 是如何编译代码。 
然而，你会发现并没有退出命令行。这是因为此 `script` 当前还在 `watch` 你的文件。
然后我们把 `print.js` 文件修改回来
```
export default function printMe() {
-  cosnole.log('你点我做咩啊？')
+  console.log('你点我做咩啊？')
}
```
你可以发现在termimal窗口，webpack自动的重新编译修改后的模块。
```
$ npm run watch

> webpack-demo@1.0.0 watch D:\study\webpack-demo
> webpack --watch

asset index.bundle.js 7.11 KiB [emitted] (name: index)
asset print.bundle.js 3.71 KiB [emitted] (name: print)
asset index.html 285 bytes [emitted]
runtime modules 1.31 KiB 6 modules
cacheable modules 498 bytes
  ./src/index.js 418 bytes [built] [code generated]
  ./src/print.js 80 bytes [built] [code generated]
webpack 5.23.0 compiled successfully in 125 ms
asset index.bundle.js 7.11 KiB [emitted] (name: index)
asset print.bundle.js 3.71 KiB [emitted] (name: print)
asset index.html 285 bytes [emitted]
runtime modules 1.31 KiB 6 modules
cached modules 418 bytes [cached] 1 module
./src/print.js 80 bytes [built] [code generated]
webpack 5.23.0 compiled successfully in 18 ms
```
缺点是，package.json文件增加watch脚本--watch 动态监听文件的改变并实时打包，输出新的文件，这样文件多了之后速度会很慢，
而且此打包方式不会热更新，即每次webpack编译之后，你还需要手动刷新浏览器
。如果能自动刷新浏览器就更好了，因此，我们接下来尝试下`webpack-dev-serve`实现此功能。

### 使用 webpack-dev-serve
`webpack-dev-serve` 为你提供了一个简单的 web serve, 并且具有live reloading（实时重新加载）功能。设置如下：
```
npm install --save-dev webpack-dev-server
```
**webpack.config.js**
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
+ devServer: {
+   contentBase: './dist',
+ },
  plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: '开发环境',
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
以上配置告知 `webpack-dev-serve`, 将`dist`目录下的文件 serve 到 `localhost:8080` 下。
**package.json**
```
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
+   "start": "webpack serve --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^5.2.0",
    "webpack": "^5.23.0",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^3.11.2"
  }
}
```
现在，在命令行中运行 `npm start`，我们会看到浏览器自动加载页面。如果你更改任何源文件并保存它们，web server 将在编译代码后自动重新加载。
试试看！

### 使用 webpack-dev-middleware
`webpack-dev-middleware` 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。 
`webpack-dev-server` 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置。
下面是一个 webpack-dev-middleware 配合 express server 的示例。
首先，安装 `express` 和 `webpack-dev-middleware`：
```
npm install --save-dev express webpack-dev-middleware
```
**webpack.config.js**
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: '开发环境',
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
+   publicPath: '/',
  },
};
```
我们将会在 `server` 脚本使用 `publicPath`，以确保文件资源能够正确地 serve 在 `http://localhost:3000` 下，
稍后我们会指定 port number(端口号)。接下来是设置自定义 `express` server:
**project**
```
 webpack-demo
  |- package.json
  |- webpack.config.js
+ |- server.js
  |- /dist
  |- /src
    |- index.js
    |- print.js
  |- /node_modules
```
**server.js**
```
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```
现在，添加一个 npm script，以使我们更方便地运行 server：
**package.json**
```
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack serve --open",
+   "server": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "express": "^4.17.1",
    "html-webpack-plugin": "^5.2.0",
    "webpack": "^5.23.0",
    "webpack-cli": "^4.5.0",
    "webpack-dev-middleware": "^4.1.0",
    "webpack-dev-server": "^3.11.2"
  }
}
```
现在，在 terminal(终端) 中执行 npm run server，将会有类似如下信息输出:
```
$ npm run server

> webpack-demo@1.0.0 server D:\study\webpack-demo
> node server.js

Example app listening on port 3000!

asset index.bundle.js 7.11 KiB [emitted] (name: index)
asset print.bundle.js 3.71 KiB [emitted] (name: print)
asset index.html 287 bytes [emitted]
runtime modules 1.31 KiB 6 modules
cacheable modules 498 bytes
  ./src/index.js 418 bytes [built] [code generated]
  ./src/print.js 80 bytes [built] [code generated]
webpack 5.23.0 compiled successfully in 125 ms
```
现在，打开浏览器，访问 http://localhost:3000。应该看到 webpack 应用程序已经运行！

