---
title: vue3 teleport传送门
date: 2021-04-01 10:24:00 PM
categories:
    - vue
tags:
    - vue
---
# vue3 teleport传送门
我们工作中有这样一种场景：  
想把相关的代码都放到一个组件里，但又想把其中一部分代码放到指定的位置，例如body标签之前，这时teleport就可以干这事儿，翻译过来就叫传送门。

例子：我们把`Hello.vue`组件里的一个div放到body标签之前
```
<template>
  <div>
    <div>
      <p>我</p>
      <span>要放到</span>
      <div>body的前面，不要在这里</div>
    </div>
    <div>HelloWorld...</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>

<style scoped>
</style>
```

在`index.html`元素中定义`<div id='model-target'></div>`
```
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <div id="model-target"></div>
  </body>
</html>

```

在组件内添加`teleport`标签，`to`属性里的值填写`选择器`
```
<template>
  <div>
    <teleport to="#model-target">
      <div>
        <p>我</p>
        <span>要放到</span>
        <div>body的前面，不要在这里</div>
      </div>
    </teleport>
    <div>HelloWorld...</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>

<style scoped>
</style>
```
我们查看页面元素
![An image](/img/teleport.png)

## vue2使用teleport
Vue2也可以用，搜`portal-vue`这个包
