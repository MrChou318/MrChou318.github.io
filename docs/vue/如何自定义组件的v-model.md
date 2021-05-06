---
title: 如何自定义组件的v-model
date: 2021-04-13 09:57:00 PM
categories:
    - vue
tags:
    - vue
---
# vue2 如何自定义组件的v-model
我们先看看正常情况下自定义组件使用`v-model`  
父组件 `App`
```
<template>
  <div id="app">
    {{ value }}
    <MyInput v-model="value" @input="value = $event" />
  </div>
</template>

<script>

import MyInput from "./components/MyInput";
export default {
  name: 'App',
  components: {
    MyInput
  },
  data() {
    return {
      value: 'hello'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
子组件 `MyInput`
```
<template>
  <div>
    <input :value="value" @input="inputHandle">
  </div>
</template>

<script>
  export default {
    name: "MyInput",
    props: ['value'],
    methods: {
      inputHandle(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
```
可以看到子组件只需接收 `value`参数，及向外传递`@input`即可绑定。  
那我们子组件接收的参数并不是 `value` 以及事件 `@input` 呢，可能有自己的属性和事件，这就要使用model配置项进行配置。  
`App`
```
<template>
  <div id="app">
    {{ value }}
    <MyInput v-model="value" @input="value = $event" />
    {{ myChecked }}
    <MyCheckbox v-model="myChecked" @change="myChecked = $event" />
  </div>
</template>

<script>

import MyInput from "./components/MyInput";
import MyCheckbox from "./components/MyCheckbox";
export default {
  name: 'App',
  components: {
    MyInput, MyCheckbox
  },
  data() {
    return {
      value: 'hello',
      myChecked: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
`MyCheckbox`
```
<template>
  <div>
    <input type="checkbox" :checked="myChecked" @change="changeHandle" />
  </div>
</template>

<script>
  export default {
    name: "MyCheckbox",
    props: ['myChecked'],
    model: {
      prop: 'myChecked',
      event: 'change'
    },
    methods: {
      changeHandle(e) {
        this.$emit('change', e.target.checked)
      }
    }
  }
</script>

<style scoped>

</style>
```
