---
title: 代码分离
date: 2021-02-24
categories:
    - webpack
tags:
    - webpack
---
# 代码分离
代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。
代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

常用的代码分离方法有三种：
- **入口起点**：使用 `entry` 配置手动地分离代码。
- **防止重复**：使用 Entry dependencies 或者 SplitChunksPlugin 去重和分离 chunk。
- **动态导入**：通过模块的内联函数调用来分离代码。

## 入口起点(entry point) 
这是迄今为止最简单的分离代码的方式。不过，这种方式手动配置较多，并有一些隐患。先来看看如何从main bundle 中分离 another module（另一个模块）：

我们先调整目录结构
**project**
webpack-demo
|- package.json
|- webpack.config.js
|- /dist
|- /src
  |- index.js
+ |- another-module.js
|- /node_modules

我们添加 `lodash` 依赖做范例：
```
npm install --save lodash
```
**src/index.js**
```
+ import _ from 'lodash';
- import printMe from './print.js'

function component() {
  const element = document.createElement('div');
- element.innerHTML = ['Hello', 'webpack'].join('===');
+ element.innerHTML = _.join(['Hello', 'webpack'], '===');
  element.classList.add('hello');

- const button = document.createElement('button')
- button.innerHTML = '点我点我';
- button.onclick = printMe;
- element.appendChild(button)

  return element;
}
document.body.appendChild(component());
```
**another-module.js**
```
import _ from 'lodash';

console.log(_.join(['Another', 'module', 'loaded!'], '&&&'))
```
**webpack.config.js**
```
   const path = require('path');
-  const HtmlWebpackPlugin = require('html-webpack-plugin');
-  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
+   another: './src/another-module.js',
  },
- devtool: 'inline-source-map',
- devServer: {
-   contentBase: './dist',
- },
- plugins: [
-     new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
-     new HtmlWebpackPlugin({
-       title: '开发环境',
-     })
- ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
-   publicPath: '/',
  },
};
```

执行 `npm run build` 
```
$ npm run build

asset index.bundle.js 554 KiB [compared for emit] (name: index)
asset another.bundle.js 554 KiB [emitted] (name: another)
runtime modules 2.5 KiB 12 modules
cacheable modules 532 KiB
  ./src/index.js 261 bytes [built] [code generated]
  ./src/another-module.js 89 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
webpack 5.23.0 compiled successfully in 240 ms
```
正如前面提到的，这种方式存在一些隐患：

- 如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。
- 这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。
以上两点中，第一点对我们的示例来说无疑是个问题，因为之前我们在 `./src/index.js` 中也引入过 `lodash`，这样就在两个 bundle 中造成重复引用。

## 防止重复(prevent duplication)
### 入口依赖
配置 `dependOn option` 选项，这样可以在多个 chunk 之间共享模块：
**webpack.config.js**
```
 const path = require('path');

 module.exports = {
   mode: 'development',
   entry: {
-    index: './src/index.js',
-    another: './src/another-module.js',
+    index: {
+      import: './src/index.js',
+      dependOn: 'shared',
+    },
+    another: {
+      import: './src/another-module.js',
+      dependOn: 'shared',
+    },
+    shared: 'lodash',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```
如果我们要在一个 HTML 页面上使用多个入口时，还需设置 optimization.runtimeChunk: 'single'，否则还会遇到这里所述的麻烦。
**webpack.config.js**
```
 const path = require('path');

 module.exports = {
   mode: 'development',
   entry: {
     index: {
       import: './src/index.js',
       dependOn: 'shared',
     },
     another: {
       import: './src/another-module.js',
       dependOn: 'shared',
     },
     shared: 'lodash',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  optimization: {
+    runtimeChunk: 'single',
+  },
 };
```

构建结果如下：
```
$ npm run build

asset shared.bundle.js 550 KiB [emitted] (name: shared)
asset runtime.bundle.js 7.91 KiB [emitted] (name: runtime)
asset index.bundle.js 1.57 KiB [emitted] (name: index)
asset another.bundle.js 1.45 KiB [emitted] (name: another)
Entrypoint index 1.57 KiB = index.bundle.js
Entrypoint another 1.45 KiB = another.bundle.js
Entrypoint shared 558 KiB = runtime.bundle.js 7.91 KiB shared.bundle.js 550 KiB
runtime modules 3.76 KiB 7 modules
cacheable modules 532 KiB
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
  ./src/another-module.js 89 bytes [built] [code generated]
  ./src/index.js 261 bytes [built] [code generated]
webpack 5.23.0 compiled successfully in 244 ms
```
由上可知，除了生成 shared.bundle.js，index.bundle.js 和 another.bundle.js 之外，还生成了一个 runtime.bundle.js 文件。

### splitChunksPlugin
`SplitChunksPlugin` 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
让我们使用这个插件，将之前的示例中重复的 lodash 模块去除：
**webpack.config.js**
```
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
+   optimization: {
+     splitChunks: {
+       chunks: 'all',
+     },
+   },
  };
```
使用 `optimization.splitChunks` 配置选项后，`index.bundle.js` 和 `another.bundle.js `中已经移除了重复的依赖模块。
需要注意的是，插件将 `lodash` 分离到单独的 `chunk`，并且将其从 main bundle 中移除，减轻了大小。执行 npm run build 查看效果：
```
$ npm run build

asset vendors-node_modules_lodash_lodash_js.bundle.js 550 KiB [emitted] (id hint: vendors)
asset index.bundle.js 8.85 KiB [emitted] (name: index)
asset another.bundle.js 8.73 KiB [emitted] (name: another)
Entrypoint index 559 KiB = vendors-node_modules_lodash_lodash_js.bundle.js 550 KiB index.bundle.js 8.85 KiB
Entrypoint another 559 KiB = vendors-node_modules_lodash_lodash_js.bundle.js 550 KiB another.bundle.js 8.73 KiB
runtime modules 7.64 KiB 14 modules
cacheable modules 532 KiB
  ./src/index.js 261 bytes [built] [code generated]
  ./src/another-module.js 89 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
webpack 5.23.0 compiled successfully in 245 ms
```
## 动态导入（dynamic import）
在开始前，我们先调整目录结构
**project**
```
webpack-demo
|- package.json
|- webpack.config.js
|- /dist
|- /src
  |- index.js
- |- another-module.js
|- /node_modules
```
**webpack.config.js**
```
 const path = require('path');

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
-    another: './src/another-module.js',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
-  optimization: {
-    splitChunks: {
-      chunks: 'all',
-    },
-  },
 };
```
**src/index.js**
```
- import _ from 'lodash';
- 
- function component() {
-   const element = document.createElement('div');
-   element.innerHTML = _.join(['Hello', 'webpack'], '===');
-   element.classList.add('hello');
- 
-   return element;
- }
- document.body.appendChild(component());

+ function getComponent() {
+   return import('lodash')
+       .then(({ default: _ }) => {
+         const element = document.createElement('div')
+         element.innerHTML = _.join(['Hello', 'webpack'], '===');
+         return element;
+       })
+       .catch((error) => 'An error occurred while loading the component')
+ }
+ 
+ getComponent().then((component) => {
+   document.body.appendChild(component);
+ })
```
简化代码：由于import() 会返回一份promise，因此它可以和async函数一起使用。
```
- function getComponent() {
-   return import('lodash')
-       .then(({ default: _ }) => {
-         const element = document.createElement('div')
-         element.innerHTML = _.join(['Hello', 'webpack'], '===');
-         return element;
-       })
-       .catch((error) => 'An error occurred while loading the component')
- }
+ async function getComponent() {
+   const element = document.createElement('div')
+   const { default: _ } = await import('lodash');
+   element.innerHTML = _.join(['Hello', 'webpack'], '===');
+   return element;
+ }

getComponent().then((component) => {
  document.body.appendChild(component);
})
```
## 预获取/预加载模块（prefetch/preload module）
webpack v4.6.0+ 增加了对预获取和预加载的支持。

在声明import时，使用下面这些内置命令，可以让webpack输出'resource hint(资源提示)'，来告知浏览器：  
- prefetch(预获取)：将来某些导航下可能需要的资源
- preload(预加载)：当前导航下可能需要的资源

下面这个 prefetch 的简单示例中，有一个 `index` 组件，
其内部渲染一个 `btn` 组件，然后在点击后按需加载 `prefetchTest` 组件。
**src/index.js**
```
import _ from 'lodash';
import clickMe from './btn'

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], '===');

    const btn = document.createElement('button');
    btn.innerHTML = '点我点我';
    btn.onclick = clickMe;
    element.appendChild(btn);

    return element;
  }
document.body.appendChild(component());
```
**src/btn.js**
```
export default function ClickMe() {
  console.log('点我作甚？')
  import(/* webpackPrefetch: true */ './prefetchTest')
      .then(({ default: _ }) => {
        console.log('引入成功..')
      })
}
```
**src/prefetchTest.js**
```
console.log('prefetchTest')
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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'prefetch',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

```
重新编译代码 `npm run build`，通过以下两个方式可以判断是否预获取成功：
1. 在浏览器中打开index.html，f12--Elements--在head标签里面可以看到有`link`标签，`rel`属性为`prefetch`；
2. f12--network，刷新页面也可以看到页面初始化就加载了`src_prefetchTest_js.bundle.js`，而不是点击按钮才加载`refetchTest.js`文件。
你可以试试去掉 `src/btn.js` 里面的 `/* webpackPrefetch: true */` 代码，重新编译。

预加载：
```
import(/* webpackPrefetch: true */ './xxx.js');
```

- preload chunk 会在父 chunk 加载时，以并行方式开始加载。prefetch chunk 会在父 chunk 加载结束后开始加载。
- preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。
- preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻。

