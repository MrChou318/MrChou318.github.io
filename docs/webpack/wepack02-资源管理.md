---
title: 资源管理
date: 2021-02-23
categories:
    - webpack
tags:
    - webpack
---
# 资源管理
## 设置
在开始之前，让我们对项目做一个小的修改：
**dist/index.html**
```
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
-    <title>起步</title>
+    <title>管理资源</title>
   </head>
   <body>
-    <script src="main.js"></script>
+    <script src="bundle.js"></script>
   </body>
 </html>
```
## 加载CSS
为了在JavaScript模块中`import`一个CSS文件，你需要安装`style-loader`和`css-loader`，并在`module`配置中添加这些loader:
```
npm install --save-dev style-loader css-loader
```
**webpack.config.js**
```
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  module: {
+    rules: [
+      {
+        test: /\.css$/i,
+        use: ['style-loader', 'css-loader'],
+      },
+    ],
+  },
 };
```
模块loader可以链式调用。链中的每个loader都将对资源进行转换。链会逆序执行。
第一个loader将其结果（被转换后的资源）传递给下一个loader，以此类推。最后，webpack期望链中的最后的loader返回JavaScript。

应保证loader的先后顺序：`style-loader`在前，而`css-loader`在后，如果不遵守此约定，webpack可能会抛出错误。
::: tip
webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
在这个示例中，所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader。
:::

这使你可以在依赖于此样式的 js 文件中 import './style.css'。现在，在此模块执行过程中，含有 CSS 字符串的 `<style>` 标签，
将被插入到 html 文件的 `<head>` 中。

我们尝试一下，通过在项目中添加一个新的 style.css 文件，并将其 import 到我们的 index.js 中：
**project**
```
  webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- style.css
    |- index.js
  |- /node_modules
```
**src/style.css**
```
.hello {
  color: red;
}
```
**src/index.js**
```
 import _ from 'lodash';
+import './style.css';

 function component() {
     const element = document.createElement('div');
     element.innerHTML = ['Hello', 'webpack'].join('===');
+    element.classList.add('hello');
     return element;
 }

 document.body.appendChild(component());
```
现在运行 build 命令：
```
$ npm run build

> webpack-demo@1.0.0 build D:\study\webpack-demo
> webpack

asset bundle.js 3.71 KiB [emitted] [minimized] (name: main)
runtime modules 663 bytes 3 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 9.12 KiB
  modules by path ./src/ 910 bytes
    ./src/index.js + 1 modules 578 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 332 bytes [built] [code generated]
  modules by path ./node_modules/ 8.23 KiB
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.23.0 compiled with 1 warning in 430 ms
```
再次在浏览器中打开 `dist/index.html`，你应该看到 `Hello webpack` 现在的样式是红色。要查看 `webpack` 做了什么，
请检查页面（不要查看页面源代码，它不会显示结果，因为 `<style>` 标签是由 JavaScript 动态创建的），并查看页面的 `head` 标签。
它应该包含 `style` 块元素，也就是我们在 `index.js` 中 `import` 的 `css` 文件中的样式。
## 加载image图像
假如，现在我们正在下载CSS，但是想background和icon这样的图像，要如何处理呢？在webpack5中，可以使用内置的Asset Modules，我们可以
轻松地将这些内容混入我们的系统中：
**webpack.config.js**
```
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
+      {
+        test: /\.(png|svg|jpg|jpeg|gif)$/i,
+        type: 'asset/resource',
+      },
     ],
   },
 };
```
现在，在` import MyImage from './my-image.png'` 时，此图像将被处理并添加到 `output` 目录，
并且 `MyImage` 变量将包含该图像在处理后的最终 `url`。在使用 `css-loader` 时，如前所示，
会使用类似过程处理你的 `CSS` 中的 `url('./my-image.png')`。loader 会识别这是一个本地文件，
并将 './my-image.png' 路径，替换为 `output` 目录中图像的最终路径。而 html-loader 以相同的方式处理 `<img src="./my-image.png" />`。

我们向项目添加一个图像，然后看它是如何工作的。
**project**
```
  webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- icon.png
    |- style.css
    |- index.js
  |- /node_modules
```
**src/index.js**
```
import './style.css';
import Icon from './123.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join('===');
  element.classList.add('hello');

+  // 将图像添加到我们已经存在的 div 中。
+  const myIcon = new Image();
+  myIcon.src = Icon;
+  
+  element.appendChild(myIcon);

  return element;
}
document.body.appendChild(component());
```
**src/style.css**
```
 .hello {
   color: red;
+  background: url('./icon.png');
 }
```
重新构建并再次打开`index.html`文件：
```
$ npm run build
> webpack-demo@1.0.0 build D:\study\webpack-demo
> webpack

assets by status 521 KiB [cached] 1 asset
asset bundle.js 4.66 KiB [emitted] [minimized] (name: main)
runtime modules 1.71 KiB 5 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 10.5 KiB (javascript) 521 KiB (asset)
  modules by path ./src/ 1.42 KiB (javascript) 521 KiB (asset)
    ./src/index.js + 1 modules 757 bytes [built] [code generated]
    ./src/123.jpg 42 bytes (javascript) 521 KiB (asset) [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 655 bytes [built] [code generated]
  modules by path ./node_modules/ 9.04 KiB
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/getUrl.js 830 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  86ea531fa084baf131ec.jpg (521 KiB)

WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.23.0 compiled with 3 warnings in 449 ms
```
如果一切顺利，你现在应该看到你的 `icon` 图标成为了重复的背景图，以及 `Hello webpack` 文本旁边的 `img` 元素。
如果检查此元素，你将看到实际的文件名已更改为 `86ea531fa084baf131ec.jpg`。
这意味着 `webpack` 在 `src` 文件夹中找到我们的文件，并对其进行了处理!
## 加载fonts字体
那么，像字体这样的其他资源如何处理呢？使用 Asset Modules 可以接收并加载任何文件，然后将其输出到构建目录。
这就是说，我们可以将它们用于任何类型的文件，也包括字体。让我们更新 `webpack.config.js` 来处理字体文件：
**webpack.config.js**
```
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
+      {
+        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
+        type: 'asset/resource',
+      },
     ],
   },
 };
```
在项目中添加一些字体文件：
这里使用阿里的iconfont做实例
**project**
```
  webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- iconfont.eot
+   |- iconfont.svg
+   |- iconfont.ttf
+   |- iconfont.woff
+   |- iconfont.woff2
    |- icon.png
    |- style.css
    |- index.js
  |- /node_modules
```
配置好 loader 并将字体文件放在合适的位置后，你可以通过一个 `@font-face` 声明将其混合。
本地的 url(...) 指令会被 webpack 获取处理，就像它处理图片一样：
**src/style.css**
```
+ @font-face {
+   font-family: 'My-font';
+   src: url('./iconfont.eot');
+   src: url('./iconfont.eot?#iefix') format('embedded-opentype'),
+   url('./iconfont.woff2') format('woff2'),
+   url('./iconfont.woff') format('woff'),
+   url('./iconfont.ttf') format('truetype'),
+   url('./iconfont.svg#iconfont') format('svg');
+ }
  .hello {
    color: red;
    background: url('./123.jpg');
  }
+ .icon-font {
+   font-family: "My-font" !important;
+ }
```
**src/index.js**
```
import './style.css';
import Icon from './123.jpg';

function component() {
  const element = document.createElement('div');
- element.innerHTML = ['Hello', 'webpack'].join('===');
+ element.innerHTML = ['Hello', 'webpack', '&#xe620;'].join('===');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

+ // 添加iconfonts
+ element.classList.add('icon-font')

  return element;
}
document.body.appendChild(component());
```
现在，让我们重新构建，然后看下 webpack 是否处理了我们的字体：
```
$ npm run build

assets by status 566 KiB [cached] 6 assets
asset bundle.js 5.43 KiB [compared for emit] [minimized] (name: main)
runtime modules 1.71 KiB 5 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 12.2 KiB (javascript) 566 KiB (asset)
  modules by path ./src/ 3.19 KiB (javascript) 566 KiB (asset)
    asset modules 252 bytes (javascript) 566 KiB (asset) 6 modules
    javascript modules 2.94 KiB
      ./src/index.js + 1 modules 831 bytes [built] [code generated]
      ./node_modules/css-loader/dist/cjs.js!./src/style.css 2.13 KiB [built] [code generated]
  modules by path ./node_modules/ 9.04 KiB
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/getUrl.js 830 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  86ea531fa084baf131ec.jpg (521 KiB)

WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.23.0 compiled with 3 warnings in 465 ms
```
重新打开 `dist/index.html` 看看我们使用的iconfont是否生效。如果一切顺利，你应该能看到变化。

## 加载数据
此外，可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，
也就是说 `import Data from './data.json'` 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。
让我们处理加载这三类文件：
```
npm install --save-dev csv-loader xml-loader
```
**webpack.config.js**
```
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
+      {
+        test: /\.(csv|tsv)$/i,
+        use: ['csv-loader'],
+      },
+      {
+        test: /\.xml$/i,
+        use: ['xml-loader'],
+      },
     ],
   },
 };
```
在项目中添加一些数据文件：
**project**
```
  webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- data.xml
+   |- data.csv
    |- iconfont.eot
    |- iconfont.svg
    |- iconfont.ttf
    |- iconfont.woff
    |- iconfont.woff2
    |- icon.png
    |- style.css
    |- index.js
  |- /node_modules
```
**src/data.xml**
```
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Mary</to>
  <from>John</from>
  <heading>Reminder</heading>
  <body>Call Cindy on Tuesday</body>
</note>
```
**src/data.csv**
```
to,from,heading,body
Mary,John,Reminder,Call Cindy on Tuesday
Zoe,Bill,Reminder,Buy orange juice
Autumn,Lindsey,Letter,I miss you
```
现在，你可以 import 这四种类型的数据(JSON, CSV, TSV, XML)中的任何一种，所导入的 Data 变量，将包含可直接使用的已解析 JSON：
**src/index.js**
```
  import './style.css';
  import Icon from './123.jpg';
+ import Data from './data.xml';
+ import Notes from './data.csv';

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack', '&#xe620;'].join('===');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  // 添加iconfonts
  element.classList.add('icon-font')
+ console.log(Data);
+ console.log(Notes);

  return element;
}
document.body.appendChild(component());
```
### 自定义JSON模块parser
通过使用 自定义 parser 替代特定的 webpack loader，可以将任何 `toml`、yaml 或 `json5` 文件作为 JSON 模块导入。
假设你在 src 文件夹下有一个 data.toml、一个 data.yaml 以及一个 data.json5 文件：
**src/data.toml**
```
title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
organization = "GitHub"
bio = "GitHub Cofounder & CEO\nLikes tater tots and beer."
dob = 1979-05-27T07:32:00Z
```
**src/data.yaml**
```
title: YAML Example
owner:
  name: Tom Preston-Werner
  organization: GitHub
  bio: |-
    GitHub Cofounder & CEO
    Likes tater tots and beer.
  dob: 1979-05-27T07:32:00.000Z
```
**src/data.json5**
```
{
  // comment
  title: 'JSON5 Example',
  owner: {
    name: 'Tom Preston-Werner',
    organization: 'GitHub',
    bio: 'GitHub Cofounder & CEO\n\
Likes tater tots and beer.',
    dob: '1979-05-27T07:32:00.000Z',
  },
}
```
首先安装 toml，`yamljs` 和 `json5` 的 packages：
```
npm install toml yamljs json5 --save-dev
```
并在你的 webpack 中配置它们：
**webpack.config.js**
```
  const path = require('path');
+ const toml = require('toml');
+ const yaml = require('yamljs');
+ const json5 = require('json5');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(csv|tsv)$/i,
         use: ['csv-loader'],
       },
       {
         test: /\.xml$/i,
         use: ['xml-loader'],
       },
+      {
+        test: /\.toml$/i,
+        type: 'json',
+        parser: {
+          parse: toml.parse,
+        },
+      },
+      {
+        test: /\.yaml$/i,
+        type: 'json',
+        parser: {
+          parse: yaml.parse,
+        },
+      },
+      {
+        test: /\.json5$/i,
+        type: 'json',
+        parser: {
+          parse: json5.parse,
+        },
+      },
     ],
   },
 };
```
**src/index.js**
```
  import './style.css';
  import Icon from './123.jpg';
  import Data from './data.xml';
  import Notes from './data.csv';
+ import toml from './data.toml';
+ import yaml from './data.yaml';
+ import json from './data.json5';
+ 
+ console.log(toml.title); // output `TOML Example`
+ console.log(toml.owner.name); // output `Tom Preston-Werner`
+ 
+ console.log(yaml.title); // output `YAML Example`
+ console.log(yaml.owner.name); // output `Tom Preston-Werner`
+ 
+ console.log(json.title); // output `JSON5 Example`
+ console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack', '&#xe620;'].join('===');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  // 添加iconfonts
  element.classList.add('icon-font')
  console.log(Data);
  console.log(Notes);

  return element;
}
document.body.appendChild(component());
```
重新运行 `npm run build` 打开 `dist/index.html` 你能看到控制台打印的日志。
## 清理
对于下篇指南，我们无需使用本指南中所有用到的资源，因此我们会进行一些清理工作，以便为下篇指南 管理输出 做好准备：
**project**
```
  webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
-   |- data.csv
-   |- data.json5
-   |- data.toml
-   |- data.xml
-   |- data.yaml
-   |- icon.png
-   |- iconfont.eot
-   |- iconfont.svg
-   |- iconfont.ttf
-   |- iconfont.woff
-   |- iconfont.woff2
-   |- style.css
    |- index.js
  |- /node_modules
```
**webpack.config.js**
```
  const path = require('path');
- const toml = require('toml');
- const yaml = require('yamljs');
- const json5 = require('json5');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
-  module: {
-    rules: [
-      {
-        test: /\.css$/i,
-        use: ['style-loader', 'css-loader'],
-      },
-      {
-        test: /\.(png|svg|jpg|jpeg|gif)$/i,
-        type: 'asset/resource',
-      },
-      {
-        test: /\.(woff|woff2|eot|ttf|otf)$/i,
-        type: 'asset/resource',
-      },
-      {
-        test: /\.(csv|tsv)$/i,
-        use: ['csv-loader'],
-      },
-      {
-        test: /\.xml$/i,
-        use: ['xml-loader'],
-      },
-      {
-        test: /\.toml$/i,
-        type: 'json',
-        parser: {
-          parse: toml.parse,
-        },
-      },
-      {
-        test: /\.yaml$/i,
-        type: 'json',
-        parser: {
-          parse: yaml.parse,
-        },
-      },
-      {
-        test: /\.json5$/i,
-        type: 'json',
-        parser: {
-          parse: json5.parse,
-        },
-      },
-    ],
-  },
 };
```
**src/index.js**
```
- import './style.css';
- import Icon from './123.jpg';
- import Data from './data.xml';
- import Notes from './data.csv';
- import toml from './data.toml';
- import yaml from './data.yaml';
- import json from './data.json5';
- 
- console.log(toml.title); // output `TOML Example`
- console.log(toml.owner.name); // output `Tom Preston-Werner`
- 
- console.log(yaml.title); // output `YAML Example`
- console.log(yaml.owner.name); // output `Tom Preston-Werner`
- 
- console.log(json.title); // output `JSON5 Example`
- console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join('===');
-  element.innerHTML = ['Hello', 'webpack', '&#xe620;'].join('===');
-  element.classList.add('hello');

-  // 将图像添加到我们已经存在的 div 中。
-  const myIcon = new Image();
-  myIcon.src = Icon;
-  element.appendChild(myIcon);
-
-  // 添加iconfonts
-  element.classList.add('icon-font')
-  console.log(Data);
-  console.log(Notes);

  return element;
}
document.body.appendChild(component());
```
```
npm uninstall css-loader csv-loader json5 style-loader toml xml-loader yamljs
```
