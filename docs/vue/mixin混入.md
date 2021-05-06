---
title: mixin混入
date: 2021-04-12 08:20:00 PM
categories:
    - vue
tags:
    - vue
---
# vue2 mixin混入
假设我们有`ComponentA` 和 `ComponentB` 两个组件，这两个组件有相同的显示隐藏功能的代码  
`ComponentA`
```
<template>
  <div>
    <p v-show="isShow">显示隐藏</p>
    <button @click="showHandle">点我</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    showHandle() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
</style>
```
`ComponentB`
```
<template>
  <div>
    <p v-show="isShow">显示隐藏</p>
    <button @click="showHandle">点我</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    showHandle() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
</style>
```
如何把相同的代码提取出来呢，这里就要使用到mixin了  
我们定义一个`showMixin.js`文件
```
export const showMixin = {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    showHandle() {
      this.isShow = !this.isShow
    }
  }
}
```
让两个组件引入`mixin.js`  
`ComponentA`
```
<template>
  <div>
    <p v-show="isShow">显示隐藏</p>
    <button @click="showHandle">点我</button>
  </div>
</template>

<script>
import { showMixin } from './js/showMixin'
export default {
  name: 'ComponentA',
  mixins: [showMixin],
}
</script>

<style scoped>
</style>
```
`ComponentB`
```
<template>
  <div>
    <p v-show="isShow">显示隐藏</p>
    <button @click="showHandle">点我</button>
  </div>
</template>

<script>
import { showMixin } from './js/showMixin'
export default {
  name: 'ComponentB',
  mixins: [showMixin],
}
</script>

<style scoped>
</style>
```
这样我们就把相同的逻辑提取到mixin进行管理  

如果我们在`ComponentA`也定义isShow的属性，`ComponentA`的属性会把mixin同名的属性覆盖掉，以组件为主，方法也一样。
