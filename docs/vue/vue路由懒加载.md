---
title: vue 路由懒加载
date: 2021-04-06 11:24:00 PM
categories:
    - vue
tags:
    - vue
---
# 路由懒加载
## 普通引入组件
使用import的方式引入`About`组件
```
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
```
我们看看浏览器js文件加载情况
### 进入首页
`app.js` 大小 `159kb`
![An image](/img/router-1.png)
### 进入About页
没有任何js文件加载，说明About页的js文件已经在app.js文件加载过了
![An image](/img/router-2.png)

## 箭头函数引入组件
```
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```
### 进入首页
`app.js` 大小 `151kb`
![An image](/img/router-3.png)
### 进入About页
`about.js`文件被单独加载，About页的js文件按需加载
![An image](/img/router-4.png)

这样懒加载的方式，可以缩短首屏渲染时间。

题外话，`/* webpackChunkName: "about" */` 可以自定义组件生成的名称，而不是随机生成。

