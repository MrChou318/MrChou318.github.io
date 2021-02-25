---
title: 管理输出
date: 2021-02-23
categories:
    - webpack
tags:
    - webpack
---
到目前为止，我们都是在 `index.html` 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始 在文件名中使用 `hash` 并输出 多个 `bundle`，
如果继续手动管理 `index.html` 文件，就会变得困难起来。然而，通过一些插件可以使这个过程更容易管控。
# 管理输出
## 预先准备
**project**
```
  webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
  |- /src
    |- index.js
+   |- print.js
  |- /node_modules
```
我们在 `src/print.js` 文件中添加一些逻辑：
```
export default function printMe() {
  console.log('你点我做咩啊？')
}
```
**src/index.js**
```
+ import printMe from './print.js'

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join('===');
  element.classList.add('hello');

+ const button = document.createElement('button')
+ button.innerHTML = '点我点我';
+ button.onclick = printMe;
+ element.appendChild(button)

  return element;
}
document.body.appendChild(component());
```
还要更新 `dist/index.html` 文件，来为 webpack 分离入口做好准备：
**dist/index.html**
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
-  <title>管理资源</title>
+  <title>管理输出</title>
+  <script src="./print.bundle.js"></script>
</head>
<body>
- <script src="./bundle.js"></script>
+ <script src="./index.bundle.js"></script>
</body>
</html>
```
**webpack.config.js**
```
const path = require('path');

module.exports = {
-  entry: './src/index.js',
+  entry: {
+    index: './src/index.js',
+    print: './src/print.js',
+  },
  output: {
-   filename: 'bundle.js',
+   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
执行 `npm run build`

## 设置 HtmlWebpackPlugin
首先安装插件，并且调整 `webpack.config.js` 文件：
```
npm install --save-dev html-webpack-plugin
```
**webpack.config.js**
```
  const path = require('path');
+ const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
+ plugins: [
+     new HtmlWebpackPlugin({
+       title: '管理输出',
+     })
+ ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
在我们构建之前，你应该了解，虽然在 `dist/` 文件夹我们已经有了 `index.html` 这个文件，
然而 `HtmlWebpackPlugin` 还是会默认生成它自己的 `index.html` 文件。也就是说，它会用新生成的 `index.html` 文件，替换我们的原有文件。

如果在代码编辑器中打开 `index.html`，你会看到` HtmlWebpackPlugin` 创建了一个全新的文件，所有的 bundle 会自动添加到 html 中。

## 清理 /dist 文件夹
通常比较推荐的做法是，在每次构建前清理 `/dist` 文件夹，这样只会生成用到的文件。让我们实现这个需求。
`clean-webpack-plugin` 是一个流行的清理插件，安装和配置它
```
npm install --save-dev clean-webpack-plugin
```
**webpack.config.js**
```
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
+     new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: '管理输出',
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

现在，执行 `npm run build`，检查 `/dist` 文件夹。如果一切顺利，现在只会看到构建后生成的文件，而没有旧文件

