---
title: vue3中v-model的变化
date: 2021-03-31 08:40:00 PM
categories:
    - vue
tags:
    - vue
---
# vue3中v-model的变化
## vue2中双向绑定多个数据

vue2中通过`v-model`或者`.sync`的方式实现数据的双向绑定

`Hello.vue`
```
<template>
  <div>
    <MyInput v-model="name" :age.sync="age"></MyInput>
    名字：{{ name }}
    年龄：{{ age }}
  </div>
</template>

<script>
  import MyInput from "./MyInput";
  export default {
    name: 'HelloWorld',
    components: {
        MyInput
    },
    data() {
      return{
        name: '冬烘',
        age: 18
      }
    }
  }
</script>

<style scoped>
</style>
```

`MyInput`
```
<template>
  <div>
    <input :value="value" @input="onInputName">
    <input :value="age" @input="onInputAge">
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['value', 'age'],
    methods: {
      onInputName(e) {
        this.$emit('input', e.target.value)
      },
      onInputAge(e) {
        this.$emit('update:age', parseInt(e.target.value))
      }
    }
  }
</script>

<style scoped>
</style>
```
## vue3中双向绑定多个数据
vue3中可以设置多个v-model: `v-model:name` 和 `v-model:age`

`Hello.vue`
```
<template>
  <div class="hello">
    <MyInput v-model:name="name" v-model:age="age"></MyInput>
    名字：{{ name }}
    年龄：{{ age }}
  </div>
</template>

<script>
import MyInput from "./MyInput";
export default {
  name: 'HelloWorld',
  components: {
    MyInput
  },
  data() {
    return{
      name: '冬烘',
      age: 18
    }
  }
}
</script>
<style scoped>
</style>
```
`MyInput`
```
<template>
  <div class="hello">
    <input :value="name" @input="onInputName">
    <input :value="age" @input="onInputAge">
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['name', 'age'],
    methods: {
      onInputName(e) {
        this.$emit('update:name', e.target.value)
      },
      onInputAge(e) {
        this.$emit('update:age', parseInt(e.target.value))
      }
    }
  }
</script>

<style scoped>
</style>
```

## vue3中双向绑定单个数据
子组件接收v-model参数名需为：`modelVal`  
`Hello.vue`
```
<template>
  <div class="hello">
    <MyInput v-model="name"></MyInput>
    名字：{{ name }}
  </div>
</template>

<script>
import MyInput from "./MyInput";
export default {
  name: 'HelloWorld',
  components: {
    MyInput
  },
  data() {
    return{
      name: '冬烘'
    }
  }
}
</script>

<style scoped>
</style>
```

`MyInput`
```
<template>
  <div class="hello">
    <input :value="modelValue" @input="onInputName">
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['modelValue'],
    methods: {
      onInputName(e) {
        this.$emit('update:modelValue', e.target.value)
      },
    }
  }
</script>

<style scoped>
</style>
```


