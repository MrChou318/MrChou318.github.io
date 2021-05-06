---
title: Vue中v-if和v-for为何不能连用？
date: 2021-04-01 09:54:00 PM
categories:
    - vue
tags:
    - vue
---
# Vue中v-if和v-for为何不能连用？
```
<template>
  <div>
    <div v-if="isShow" v-for="(item, index) in books" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return{
        books: ['钓鱼的男孩', '白夜行', '回答不了'],
        isShow: false
      }
    }
  }
</script>

<style scoped>
</style>
```
如果一个标签同时存在`v-if`和`v-for`的时候，会首先执行，`v-for`，
创建出多个div标签，然后每个div标签再执行`v-if`，如果为false，则会删除div标签。
这样创建删除会造成不必要的性能浪费。

## 如何避免呢？
### 外面嵌套一层template
```
<template>
  <div>
    <template v-if="isShow">
      <div v-for="(item, index) in books" :key="index">
        {{ item }}
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return{
        books: ['钓鱼的男孩', '白夜行', '回答不了'],
        isShow: false
      }
    }
  }
</script>

<style scoped>
</style>
```
在html中`template`标签不会在页面中显示，但在后台查看页面DOM结构存在`template`标签。  
这是因为`template`标签天生不可见，它设置了`display:none`属性。
