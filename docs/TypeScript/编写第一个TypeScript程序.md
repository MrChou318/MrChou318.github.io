---
title: 编写第一个TypeScript程序
date: 2021-04-20 06:55:00 AM
categories:
    - TypeScript
tags:
    - TypeScript
---
# 编写第一个TypeScript程序

1. 新建目录`ts-action`
2. 执行命令`npm init -y`，初始化了一个`package.json`文件
3. 安装TypeScript：`npm i typescript -g` 全局安装
4. 执行命令`tsc --init`，初始化了一个`tsconfig.json`文件
5. 创建`src`目录，创建一个`index.ts`文件
```typescript
let hello:string = 'Hello TypeScript'
```
6. 执行命令编译ts文件`tsc ./src/index.ts`，我们可以看到生成了`index.js`文件
```javascript
var hello = 'Hello TypeScript';
```
我们也可以通过ts官网的playground来查看ts文件代码编辑后的结果:`https://typescript-play.js.org/`  

7. 配置构建工具webpack
`npm i webpck webpack-cli webpack-dev-server`  

8. 创建`build`目录，存放配置文件  
`webpack.config.js`所有配置文件的入口
```javascript
const { merge } = require('webpack-merge')  // 作用：把多个配置文件合并
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};
```
`webpack.base.config.js`公共环境的配置
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',    // 入口文件
    output: {
        filename: 'app.js'  // 输出文件名
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']  // 指定三个拓展名
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,   // 正则，以ts或者tsx结尾的文件
                use: [{
                    loader: 'ts-loader' // 安装相应的loader
                }],
                exclude: /node_modules/ // 排除node_modules下的文件
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'    // 插件作用：通过一个模板，生成一个网站的首页，而且可以帮助我们把输出文件自动嵌入到这个文件中
        })
    ]
}

```
`webpack.dev.config.js`开发环境配置
```javascript
const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                devtools: 'cheap-module-eval-source-map'
            }
        })
    ]
}
// cheap:表示source map会忽略文件的列信息，因为我们在调试时，列信息是没有用的；
// module:表示错误信息会定位到ts源码，而不是loader转义后的js代码；
// source-map:会将source-map以DataURL的形式打包到文件中（什么是DataURL：DataURL最早是出现在HTML文件img标签中的关于图片的引用，DataURL提供了一种将图片”嵌入”到HTML中的方法。）

```
DataURL:  
![An image](/img/ts-01.png)

`webpack.pro.config.js`生产环境配置
```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin()    // 作用：每次构建的时候帮我们清空dist目录
    ]
}

```
9. 安装loader及插件 `npm i ts-loader typescript -D`  `npm i html-webpack-plugin -D`  `npm i clean-webpack-plugin -D
`  `npm i webpack-merge -D`
10. 创建一个`/src/tpl/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TypeScript Action</title>
</head>
<body>
  <div class="app"></div>
</body>
</html>

```

11. 修改npm脚本
`package.json`
```json
{
  "name": "ts-action",
  "version": "1.0.0",
  "description": "",
  "main": "./src/index.ts",
  "scripts": {
    "start": "webpack serve --mode development --env development --config ./build/webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^4.0.0-alpha.0",
    "html-webpack-plugin": "^5.3.1",
    "ts-loader": "^9.0.0",
    "typescript": "^4.2.4",
    "webpack": "^5.34.0",
    "webpack-cli": "^4.6.0",
    "webpack-dev-server": "^3.11.2",
    "webpack-merge": "^5.7.3"
  }
}
```

12. `npm start`启动服务
13. 修改`index.ts`文件
```typescript
let hello:string = 'Hello TypeScript'
document.querySelectorAll('.app')[0].innerHTML = hello
```
页面可以看到 Hello TypeScript

14. 编写构建生产环境的脚本
`package.json`
```json
{
  "name": "ts-action",
  "version": "1.0.0",
  "description": "",
  "main": "./src/index.ts",
  "scripts": {
    "start": "webpack serve --mode development --env development --config ./build/webpack.config.js",
    "build": "webpack --mode=production --config ./build/webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^4.0.0-alpha.0",
    "html-webpack-plugin": "^5.3.1",
    "ts-loader": "^9.0.0",
    "typescript": "^4.2.4",
    "webpack": "^5.34.0",
    "webpack-cli": "^4.6.0",
    "webpack-dev-server": "^3.11.2",
    "webpack-merge": "^5.7.3"
  }
}

```
15. 运行命令`npm run build` 会生成`dist`目录，打包文件都放在这里面。
