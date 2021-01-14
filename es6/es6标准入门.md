---
title: es6标准入门
date: 2021-01-14
categories:
    - javascript
tags:
    - es6
---

# 3. 变量的结构赋值
## 3.1 数组的结构赋值
### 3.1.1 基本用法
```
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
```
```
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4
```
### 3.1.2 默认值
```
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```
```
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
```
```
function f() {
  console.log('aaa');
  return 3;
}

let [x = f()] = [1];
```
```
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined
```
## 3.2 对象的解构赋值
### 3.2.1 基本用法
```
let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined
```
```
let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"
foo // error: foo is not defined
```
```
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
p // p is not defined
x // "Hello"
y // "World"
```
注意，这时`p`是模式，不是变量，因此不会被赋值。如果`p`也要作为变量赋值，可以写成下面这样。
```
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;
x // "Hello"
y // "World"
p // ["Hello", {y: "World"}]
```
```
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let { loc, loc: { start }, loc: { start: { line }} } = node;
line // 1
loc  // Object {start: Object}
start // Object {line: 1, column: 5}
```
### 3.2.2 默认值
```
var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x: y = 3} = {};
y // 3

var {x: y = 3} = {x: 5};
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"
```
下面代码将`Math`对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
```
let { log, sin, cos } = Math;
```
由于数组的本质是特殊的对象，因此可以对数组进行对象属性的解构
```
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
first // 1
last // 3
```
# 3.3 字符串的解构
```
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```
```
let {length : len} = 'hello';
len // 5
```
# 3.4 函数的解构
```
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
```
```
[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]
// 其中a是[1, 3] b是[2, 4]
```
```
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
```
## 3.5 用途
### 3.5.1 交换变量的值
```
let x = 1;
let y = 2;

[x, y] = [y, x];
```
### 3.5.2 函数返回多个值
```
// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```
### 3.5.3 提取jsons数据
```
let jsonData = {
    id: 42,
    status: 'OK',
    data: [876, 5245]
};
let { id, status, data : myData } = jsonData;
console.log(id, status, myData)
```
### 3.5.4 函数参数的默认值
```
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
```
### 3.5.5 遍历Map结构
```
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
```
如果只想获取键名，或者只想获取键值，可以写成下面这样。
```
// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
```
### 3.5.6 输入模块的指定方法
加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
```
const { SourceMapConsumer, SourceNode } = require("source-map");
```
# 4. 字符串的扩展
## 4.1 includes(), startsWith(), endsWith()
- includes()：返回布尔值，表示是否找到了参数字符串。
- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
```
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```
这三个方法都支持第二个参数，表示开始搜索的位置。
```
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```
上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
## 4.2 repeat()
`repeat`方法返一个新的字符串，表示将原字符串重复n次
```
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```
## 4.3 padStart()，padEnd()
字符串补全功能，如果某个字符串不够制定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全。
```
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```
如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
```
'abc'.padStart(10, '0123456789')
// '0123456abc'
```
如果省略第二个参数，默认使用空格补全长度。
```
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
```
padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。
```
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
```
另一个用途是提示字符串格式。
```
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```
# 8. 数组的扩展
## 8.3 Array.of() 将一组值转换为数组
```
{
    console.log(Array.of(2, 3, 5));     [2, 3, 5]
    console.log(Array.of(3));           [3]
    console.log(Array(2, 3, 5));        [2, 3, 5]
    console.log(Array(3));              [empty × 3] 长度为3的空数组
}
```
# 14. Promise 对象
## 14.2

```
{
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('fail')), 3000)
    })

    let p2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(p1), 1000)
    })
    p2
        .then(result => console.log(result))
        .catch(error => console.log(error))
}
```
## 14.6 Promise.race()
将多个Promise实例包装成一个新的Promise实例，其中一个Promise实例率先改变状态，新的Promise实例的状态也跟着改变，并将Promise实例率先改变的返回值传递给回调函数。
```
{
    const p = Promise.race([
        new Promise(function (resolve, reject) {
            // 请求接口 
            setTimeout(() => {
                resolve('aaa')
            }, 2000)
        }),
        new Promise(function (resolve, reject) {
            setTimeout(() => {
                reject(new Error('request timeout'))
            }, 5000)
        })
    ])
    p.then(response => console.log('response', response));
    p.catch(error => console.log('error', error));
}
```
