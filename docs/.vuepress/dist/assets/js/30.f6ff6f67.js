(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{535:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"路由懒加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载"}},[s._v("#")]),s._v(" 路由懒加载")]),s._v(" "),n("h2",{attrs:{id:"普通引入组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#普通引入组件"}},[s._v("#")]),s._v(" 普通引入组件")]),s._v(" "),n("p",[s._v("使用import的方式引入"),n("code",[s._v("About")]),s._v("组件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import Vue from 'vue'\nimport VueRouter from 'vue-router'\nimport Home from '../views/Home.vue'\nimport About from '../views/About'\n\nVue.use(VueRouter)\n\nconst routes = [\n  {\n    path: '/',\n    name: 'Home',\n    component: Home\n  },\n  {\n    path: '/about',\n    name: 'About',\n    component: About\n  }\n]\n\nconst router = new VueRouter({\n  mode: 'history',\n  base: process.env.BASE_URL,\n  routes\n})\nexport default router\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("我们看看浏览器js文件加载情况")]),s._v(" "),n("h3",{attrs:{id:"进入首页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入首页"}},[s._v("#")]),s._v(" 进入首页")]),s._v(" "),n("p",[n("code",[s._v("app.js")]),s._v(" 大小 "),n("code",[s._v("159kb")]),s._v(" "),n("img",{attrs:{src:"/img/router-1.png",alt:"An image"}})]),s._v(" "),n("h3",{attrs:{id:"进入about页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入about页"}},[s._v("#")]),s._v(" 进入About页")]),s._v(" "),n("p",[s._v("没有任何js文件加载，说明About页的js文件已经在app.js文件加载过了\n"),n("img",{attrs:{src:"/img/router-2.png",alt:"An image"}})]),s._v(" "),n("h2",{attrs:{id:"箭头函数引入组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数引入组件"}},[s._v("#")]),s._v(" 箭头函数引入组件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import Vue from 'vue'\nimport VueRouter from 'vue-router'\nimport Home from '../views/Home.vue'\n\nVue.use(VueRouter)\n\nconst routes = [\n  {\n    path: '/',\n    name: 'Home',\n    component: Home\n  },\n  {\n    path: '/about',\n    name: 'About',\n    component: () => import(/* webpackChunkName: \"about\" */ '../views/About.vue')\n  }\n]\n\nconst router = new VueRouter({\n  mode: 'history',\n  base: process.env.BASE_URL,\n  routes\n})\n\nexport default router\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"进入首页-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入首页-2"}},[s._v("#")]),s._v(" 进入首页")]),s._v(" "),n("p",[n("code",[s._v("app.js")]),s._v(" 大小 "),n("code",[s._v("151kb")]),s._v(" "),n("img",{attrs:{src:"/img/router-3.png",alt:"An image"}})]),s._v(" "),n("h3",{attrs:{id:"进入about页-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入about页-2"}},[s._v("#")]),s._v(" 进入About页")]),s._v(" "),n("p",[n("code",[s._v("about.js")]),s._v("文件被单独加载，About页的js文件按需加载\n"),n("img",{attrs:{src:"/img/router-4.png",alt:"An image"}})]),s._v(" "),n("p",[s._v("这样懒加载的方式，可以缩短首屏渲染时间。")]),s._v(" "),n("p",[s._v("题外话，"),n("code",[s._v('/* webpackChunkName: "about" */')]),s._v(" 可以自定义组件生成的名称，而不是随机生成。")])])}),[],!1,null,null,null);a.default=e.exports}}]);