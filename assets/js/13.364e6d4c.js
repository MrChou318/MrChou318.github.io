(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{518:function(s,a,n){"use strict";n.r(a);var e=n(3),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_3-变量的结构赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-变量的结构赋值"}},[s._v("#")]),s._v(" 3. 变量的结构赋值")]),s._v(" "),n("h2",{attrs:{id:"_3-1-数组的结构赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数组的结构赋值"}},[s._v("#")]),s._v(" 3.1 数组的结构赋值")]),s._v(" "),n("h3",{attrs:{id:"_3-1-1-基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-基本用法"}},[s._v("#")]),s._v(" 3.1.1 基本用法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let [foo, [[bar], baz]] = [1, [[2], 3]];\nfoo // 1\nbar // 2\nbaz // 3\n\nlet [ , , third] = ["foo", "bar", "baz"];\nthird // "baz"\n\nlet [x, , y] = [1, 2, 3];\nx // 1\ny // 3\n\nlet [head, ...tail] = [1, 2, 3, 4];\nhead // 1\ntail // [2, 3, 4]\n\nlet [x, y, ...z] = [\'a\'];\nx // "a"\ny // undefined\nz // []\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let [x, y] = [1, 2, 3];\nx // 1\ny // 2\n\nlet [a, [b], d] = [1, [2, 3], 4];\na // 1\nb // 2\nd // 4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_3-1-2-默认值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-默认值"}},[s._v("#")]),s._v(" 3.1.2 默认值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let [foo = true] = [];\nfoo // true\n\nlet [x, y = 'b'] = ['a']; // x='a', y='b'\nlet [x, y = 'b'] = ['a', undefined]; // x='a', y='b'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let [x = 1] = [undefined];\nx // 1\n\nlet [x = 1] = [null];\nx // null\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function f() {\n  console.log('aaa');\n  return 3;\n}\n\nlet [x = f()] = [1];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let [x = 1, y = x] = [];     // x=1; y=1\nlet [x = 1, y = x] = [2];    // x=2; y=2\nlet [x = 1, y = x] = [1, 2]; // x=1; y=2\nlet [x = y, y = 1] = [];     // ReferenceError: y is not defined\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"_3-2-对象的解构赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-对象的解构赋值"}},[s._v("#")]),s._v(" 3.2 对象的解构赋值")]),s._v(" "),n("h3",{attrs:{id:"_3-2-1-基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-基本用法"}},[s._v("#")]),s._v(" 3.2.1 基本用法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let { bar, foo } = { foo: "aaa", bar: "bbb" };\nfoo // "aaa"\nbar // "bbb"\n\nlet { baz } = { foo: "aaa", bar: "bbb" };\nbaz // undefined\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let { foo: baz } = { foo: "aaa", bar: "bbb" };\nbaz // "aaa"\nfoo // error: foo is not defined\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let obj = {\n  p: [\n    'Hello',\n    { y: 'World' }\n  ]\n};\n\nlet { p: [x, { y }] } = obj;\np // p is not defined\nx // \"Hello\"\ny // \"World\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("注意，这时"),n("code",[s._v("p")]),s._v("是模式，不是变量，因此不会被赋值。如果"),n("code",[s._v("p")]),s._v("也要作为变量赋值，可以写成下面这样。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let obj = {\n  p: [\n    \'Hello\',\n    { y: \'World\' }\n  ]\n};\n\nlet { p, p: [x, { y }] } = obj;\nx // "Hello"\ny // "World"\np // ["Hello", {y: "World"}]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const node = {\n  loc: {\n    start: {\n      line: 1,\n      column: 5\n    }\n  }\n};\n\nlet { loc, loc: { start }, loc: { start: { line }} } = node;\nline // 1\nloc  // Object {start: Object}\nstart // Object {line: 1, column: 5}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"_3-2-2-默认值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-默认值"}},[s._v("#")]),s._v(" 3.2.2 默认值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var {x = 3} = {};\nx // 3\n\nvar {x, y = 5} = {x: 1};\nx // 1\ny // 5\n\nvar {x: y = 3} = {};\ny // 3\n\nvar {x: y = 3} = {x: 5};\ny // 5\n\nvar { message: msg = 'Something went wrong' } = {};\nmsg // \"Something went wrong\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("下面代码将"),n("code",[s._v("Math")]),s._v("对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let { log, sin, cos } = Math;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("由于数组的本质是特殊的对象，因此可以对数组进行对象属性的解构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let arr = [1, 2, 3];\nlet {0 : first, [arr.length - 1] : last} = arr;\nfirst // 1\nlast // 3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h1",{attrs:{id:"_3-3-字符串的解构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-字符串的解构"}},[s._v("#")]),s._v(" 3.3 字符串的解构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const [a, b, c, d, e] = \'hello\';\na // "h"\nb // "e"\nc // "l"\nd // "l"\ne // "o"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let {length : len} = 'hello';\nlen // 5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h1",{attrs:{id:"_3-4-函数的解构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-函数的解构"}},[s._v("#")]),s._v(" 3.4 函数的解构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function add([x, y]){\n  return x + y;\n}\n\nadd([1, 2]); // 3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[[1, 2], [3, 4]].map(([a, b]) => a + b);\n// [ 3, 7 ]\n// 其中a是[1, 3] b是[2, 4]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function move({x = 0, y = 0} = {}) {\n  return [x, y];\n}\n\nmove({x: 3, y: 8}); // [3, 8]\nmove({x: 3}); // [3, 0]\nmove({}); // [0, 0]\nmove(); // [0, 0]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"_3-5-用途"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-用途"}},[s._v("#")]),s._v(" 3.5 用途")]),s._v(" "),n("h3",{attrs:{id:"_3-5-1-交换变量的值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1-交换变量的值"}},[s._v("#")]),s._v(" 3.5.1 交换变量的值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let x = 1;\nlet y = 2;\n\n[x, y] = [y, x];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_3-5-2-函数返回多个值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-2-函数返回多个值"}},[s._v("#")]),s._v(" 3.5.2 函数返回多个值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 返回一个数组\n\nfunction example() {\n  return [1, 2, 3];\n}\nlet [a, b, c] = example();\n\n// 返回一个对象\n\nfunction example() {\n  return {\n    foo: 1,\n    bar: 2\n  };\n}\nlet { foo, bar } = example();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"_3-5-3-提取jsons数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-提取jsons数据"}},[s._v("#")]),s._v(" 3.5.3 提取jsons数据")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let jsonData = {\n    id: 42,\n    status: 'OK',\n    data: [876, 5245]\n};\nlet { id, status, data : myData } = jsonData;\nconsole.log(id, status, myData)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_3-5-4-函数参数的默认值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-4-函数参数的默认值"}},[s._v("#")]),s._v(" 3.5.4 函数参数的默认值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("jQuery.ajax = function (url, {\n  async = true,\n  beforeSend = function () {},\n  cache = true,\n  complete = function () {},\n  crossDomain = false,\n  global = true,\n  // ... more config\n} = {}) {\n  // ... do stuff\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_3-5-5-遍历map结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-5-遍历map结构"}},[s._v("#")]),s._v(" 3.5.5 遍历Map结构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const map = new Map();\nmap.set('first', 'hello');\nmap.set('second', 'world');\n\nfor (let [key, value] of map) {\n  console.log(key + \" is \" + value);\n}\n// first is hello\n// second is world\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("如果只想获取键名，或者只想获取键值，可以写成下面这样。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 获取键名\nfor (let [key] of map) {\n  // ...\n}\n\n// 获取键值\nfor (let [,value] of map) {\n  // ...\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_3-5-6-输入模块的指定方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-6-输入模块的指定方法"}},[s._v("#")]),s._v(" 3.5.6 输入模块的指定方法")]),s._v(" "),n("p",[s._v("加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const { SourceMapConsumer, SourceNode } = require("source-map");\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h1",{attrs:{id:"_4-字符串的扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-字符串的扩展"}},[s._v("#")]),s._v(" 4. 字符串的扩展")]),s._v(" "),n("h2",{attrs:{id:"_4-1-includes-startswith-endswith"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-includes-startswith-endswith"}},[s._v("#")]),s._v(" 4.1 includes(), startsWith(), endsWith()")]),s._v(" "),n("ul",[n("li",[s._v("includes()：返回布尔值，表示是否找到了参数字符串。")]),s._v(" "),n("li",[s._v("startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。")]),s._v(" "),n("li",[s._v("endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let s = 'Hello world!';\n\ns.startsWith('Hello') // true\ns.endsWith('!') // true\ns.includes('o') // true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("这三个方法都支持第二个参数，表示开始搜索的位置。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let s = 'Hello world!';\n\ns.startsWith('world', 6) // true\ns.endsWith('Hello', 5) // true\ns.includes('Hello', 6) // false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。")]),s._v(" "),n("h2",{attrs:{id:"_4-2-repeat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-repeat"}},[s._v("#")]),s._v(" 4.2 repeat()")]),s._v(" "),n("p",[n("code",[s._v("repeat")]),s._v("方法返一个新的字符串，表示将原字符串重复n次")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'x'.repeat(3) // \"xxx\"\n'hello'.repeat(2) // \"hellohello\"\n'na'.repeat(0) // \"\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_4-3-padstart-padend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-padstart-padend"}},[s._v("#")]),s._v(" 4.3 padStart()，padEnd()")]),s._v(" "),n("p",[s._v("字符串补全功能，如果某个字符串不够制定长度，会在头部或尾部补全。"),n("code",[s._v("padStart()")]),s._v("用于头部补全，"),n("code",[s._v("padEnd()")]),s._v("用于尾部补全。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'x'.padStart(5, 'ab') // 'ababx'\n'x'.padStart(4, 'ab') // 'abax'\n\n'x'.padEnd(5, 'ab') // 'xabab'\n'x'.padEnd(4, 'ab') // 'xaba'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'abc'.padStart(10, '0123456789')\n// '0123456abc'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("如果省略第二个参数，默认使用空格补全长度。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'x'.padStart(4) // '   x'\n'x'.padEnd(4) // 'x   '\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'1'.padStart(10, '0') // \"0000000001\"\n'12'.padStart(10, '0') // \"0000000012\"\n'123456'.padStart(10, '0') // \"0000123456\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("另一个用途是提示字符串格式。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'12'.padStart(10, 'YYYY-MM-DD') // \"YYYY-MM-12\"\n'09-12'.padStart(10, 'YYYY-MM-DD') // \"YYYY-09-12\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h1",{attrs:{id:"_8-数组的扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-数组的扩展"}},[s._v("#")]),s._v(" 8. 数组的扩展")]),s._v(" "),n("h2",{attrs:{id:"_8-3-array-of-将一组值转换为数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-array-of-将一组值转换为数组"}},[s._v("#")]),s._v(" 8.3 Array.of() 将一组值转换为数组")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n    console.log(Array.of(2, 3, 5));     [2, 3, 5]\n    console.log(Array.of(3));           [3]\n    console.log(Array(2, 3, 5));        [2, 3, 5]\n    console.log(Array(3));              [empty × 3] 长度为3的空数组\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h1",{attrs:{id:"_14-promise-对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-promise-对象"}},[s._v("#")]),s._v(" 14. Promise 对象")]),s._v(" "),n("h2",{attrs:{id:"_14-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-2"}},[s._v("#")]),s._v(" 14.2")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n    let p1 = new Promise(function (resolve, reject) {\n        setTimeout(() => reject(new Error('fail')), 3000)\n    })\n\n    let p2 = new Promise(function (resolve, reject) {\n        setTimeout(() => resolve(p1), 1000)\n    })\n    p2\n        .then(result => console.log(result))\n        .catch(error => console.log(error))\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_14-6-promise-race"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-6-promise-race"}},[s._v("#")]),s._v(" 14.6 Promise.race()")]),s._v(" "),n("p",[s._v("将多个Promise实例包装成一个新的Promise实例，其中一个Promise实例率先改变状态，新的Promise实例的状态也跟着改变，并将Promise实例率先改变的返回值传递给回调函数。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n    const p = Promise.race([\n        new Promise(function (resolve, reject) {\n            // 请求接口 \n            setTimeout(() => {\n                resolve('aaa')\n            }, 2000)\n        }),\n        new Promise(function (resolve, reject) {\n            setTimeout(() => {\n                reject(new Error('request timeout'))\n            }, 5000)\n        })\n    ])\n    p.then(response => console.log('response', response));\n    p.catch(error => console.log('error', error));\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);