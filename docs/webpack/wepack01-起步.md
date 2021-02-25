---
title: 起步
date: 2021-02-22
categories:
    - webpack
tags:
    - webpack
---
# 起步
## 基本安装
1. 首先创建一个目录`webpack-demo`，初始化npm，然后再本地安装`webpack`，接着安装`webpack-cli`(此工具用于在命令行中运行webpack)
    ```
    mkdir webpack-demo
    cd webpack-demo
    npm init -y
    npm install webpack webpack-cli --save-dev
    ```
    `init -y` 会生成`package.json`文件
    ```
    {
      "name": "webpack-demo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```
2. 创建目录结构
    ```
    webpack-demo
      |- package.json
      |- index.html
      |- /src
        |- index.js
    ```
    **src/index.js**
    ```
    function component() {
      const element = document.createElement('div');
      element.innerHTML = ['Hello', 'webpack'].join('===');
      return element;
    }
    document.body.appendChild(component());
    ```
    **index.html**
    ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>起步</title>
      </head>
      <body>
        <script src="./src/index.js"></script>
      </body>
    </html>
    ```
   我们还需要调整`package.json`文件，以便确保我们安装包是private私有的，并且移除main入口。这可以防止意外发布你的代码。  
   **package.json**
   ```
   {
     "name": "webpack-demo",
     "version": "1.0.0",
     "description": "",
   + "main": "index.js",
   - "private": true,
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "webpack": "^5.4.0",
        "webpack-cli": "^4.2.0"
      }
    }
   ```
## 创建一个bundle
首先，我们稍微调整下目录结构，创建分发代码(./dist)文件夹用于存放分发代码，源代码(./src)文件夹仍存放源代码。
源代码是指用于书写和编辑的代码。分发代码是指在构建过程中，经过最小化和优化后产生的输出结果，最终将在浏览器中加载。调整后目录结构如下：  
**project**
```
  webpack-demo
  |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js
```
::: tip
你可能会发现，尽管 index.html 目前放在 dist 目录下，但它是手动创建的。以后会学习如何生成 index.html 而非手动编辑它。
:::
**dist/index.html
```
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>起步</title>
   </head>
   <body>
    <script src="main.js"></script>
   </body>
 </html>
```
执行 `npx webpack`，会将我们的脚本 `src/index.js` 作为 入口起点，也会生成 `dist/main.js` 作为 输出。
```
$npx webpack
asset main.js 132 bytes [emitted] [minimized] (name: main)
./src/index.js 194 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.23.0 compiled with 1 warning in 158 ms
```
在浏览器中打开 `dist` 目录下的 `index.html`，如果一切正常，你应该能看到以下文本：`Hello===webpack`。
## 使用配置文件
在webpack v4 中，可以无须任何配置，然而大多数项目会需要很复杂的设置，这就是为什么webpack任然要支持配置文件。这笔在terminal中手动输入
大量命令要高效的多，所以让我们创建一个配置文件。  
**project**
```
  webpack-demo
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```
**webpack.config.js**
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
现在，让我们通过新的配置文件再次执行构建：
```
$npx webpack --config webpack.config.js
asset main.js 132 bytes [compared for emit] [minimized] (name: main)
./src/index.js 194 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.23.0 compiled with 1 warning in 157 ms
```
::: tip
如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。
这对于需要拆分成多个文件的复杂配置是非常有用的。
:::
## npm scripts
考虑到用 CLI 这种方式来运行本地的 webpack 副本并不是特别方便，我们可以设置一个快捷方式。  
调整 package.json 文件，添加一个 npm script：
```
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "test": "echo \"Error: no test specified\" && exit 1",
+    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
```
现在，可以使用 `npm run build` 命令，来替代我们之前使用的 `npx` 命令。  
注意，使用 `npm scripts`，我们可以像使用 `npx` 那样通过模块名引用本地安装的 `npm packages`。  
这是大多数基于 `npm` 的项目遵循的标准，因为它允许所有贡献者使用同一组通用脚本。

现在运行以下命令，然后看看你的脚本别名是否正常运行：
```
$ npm run build

> webpack-demo@1.0.0 build D:\study\webpack-demo
> webpack

asset main.js 132 bytes [compared for emit] [minimized] (name: main)
./src/index.js 194 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.23.0 compiled with 1 warning in 159 ms
```
