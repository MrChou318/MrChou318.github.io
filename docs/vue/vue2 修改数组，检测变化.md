---
title: vue2 修改数组，检测变化
date: 2021-04-12 07:22:00 PM
categories:
    - vue
tags:
    - vue
---
# vue2 修改数组，检测变化
在vue2中，通过数组索引修改数组的值，并不会被监听到  
例：
```
<template>
  <div>
    {{ list }}
    <button @click="clickHandle">点我</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    clickHandle() {
      this.list[0] = 'f'
    }
  },
  watch: {
    list() {
      console.log('监听list...')
    }
  }
}
</script>

<style scoped>
</style>
```
我们会发现页面的list并没有发生变化，watch里面的console也没有被打印出来。  
那我们要如何做才能让vue2监听到list的变化呢
## 使用$set方法
```
this.$set(this.list, 0, 'f')
```
## 使用splice
vue2 会对splice方法进行劫持，然后进行相应的视图更新操作。
```
this.list.splice(0, 1, 'f')
```
