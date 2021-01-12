---
title: aaa
date: 2020-12-12
categories:
    - frontEnd
tags:
    - vue
---
### 使用自定义组件
这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />
<ClientOnly>
    <my-demo></my-demo>
</ClientOnly>
# vscode
## 快捷键
- 打开.md文件： 先按`ctrl+k`，然后放掉，紧接着再按`v`，就能调出实时预览框。

# js
## 正则表达式
- **search() 方法**
```
var str = 'Visit Runoob!';
var n = str.search(/Runoob/i) // n = 6
```
用于检索字符串中指定的子字符串（没有匹配的 `n` 就返回`-1`），或检索与正则表达式匹配的子串的起始位置。  
`i` 是一个修饰符 (搜索不区分大小写)。
- **replace() 方法**
```
var str = 'hahaha, Microsoft';
var txt = str.replace(/microsoft/i, 'oho') // 输出 hahaha, oho
```
用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。  
- **正则表达式修饰符**

| 修饰符 | 描述 |
| ------ | ------ |
| i | 执行对大小写不敏感的匹配。 |
| g | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止） |
| m | 执行多行匹配

| 表达式 | 描述 |
| ------ | ------ |
| [abc] | 查找方括号之间的任何字符 |
| [^abc] | 查找任何不在方括号之间的字符 |
| [0-9] | 查找任何从0-9的数字 |
| [a-z] | 查找任何从小写 a 到小写 z 的字符 |
| [A-Z] | 查找任何从大写 A 到大写 Z 的字符 |
| [A-z] | 查找任何从大写 A 到小写 z 的字符 |
| [adgk] | 查找给定集合内的任何字符 |
| [^adgk] | 查找给定集合外的任何字符 |
| `(red|blue|green)` | 查找任何指定的选项 |

| 元字符 | 描述 |
| ------ | ------ |
| . |	查找单个字符，除了换行和行结束符。 |
| \w |	查找单词字符。等价于 [A-Za-z0-9_] |
| \W |	查找非单词字符。 |
| \d |	查找数字。 |
| \D |	查找非数字字符。 |
| \s |	查找空白字符。 |
| \S |	查找非空白字符。 |
| \b |	匹配单词边界。 |
| \B |	匹配非单词边界。 |
| \0 |	查找 NULL 字符。 |
| \n |	查找换行符。 |
| \f |	查找换页符。 |
| \r |	查找回车符。 |
| \t |	查找制表符。 |
| \v |	查找垂直制表符。 |
| \xxx |	查找以八进制数 xxx 规定的字符。 |
| \xdd |	查找以十六进制数 dd 规定的字符。 |
| \uxxxx |	查找以十六进制数 xxxx 规定的 Unicode 字符。 |

| 量词 | 描述 |
| ------ | ------ |
| n+	| 匹配任何包含至少一个 n 的字符串。例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。 |
| n*	| 匹配任何包含零个或多个（包含一个） n 的字符串。例如，/bo*/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。 |
| n? | 匹配任何包含零个或一个 n 的字符串。例如，/le?/ 匹配"angleeee" 中的 "le"。 |
| n{X}	| 匹配包含 X 个 n 的序列的字符串。例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。 |
| n{X,}	| X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。 |
| n{X,Y}	| X 和 Y 为正整数。前面的模式 n 连续出现至少 X 个，至多匹配 Y 个。例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。 |
| n$	| 匹配任何结尾为 n 的字符串。 |
| ^n	| 匹配任何开头为 n 的字符串。 |
| ?=n	| 匹配任何其后紧接指定字符串 n 的字符串。例如：/jack(?=tr)/.exec('ssssjacktrww') |
| ?!n	| 匹配任何其后没有紧接指定字符串 n 的字符串。 |
- **test()方法**
test()方法是一个正则表达式方法，用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文字则返回true，否则返回false。
```
var patt = /e/;
var flag = patt.test('The best'); // 返回true
```
- **exec()方法**
exex()是一个正则表达式方法， 该函数返回一个数组，其中存放匹配的结果，如果未匹配到，则返回null。
```
/e/.exec("The best things in life are free!");
// 输出
[{
  0: "e"
  groups: undefined
  index: 2
  input: "The best things in life are free!"
  length: 1
}]


const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
const matchObj = RE_DATE.exec('1999-12-31');
console.log('matchObj', matchObj);
// 0: "1999-12-31"
// 1: "1999"
// 2: "12"
// 3: "31"
// groups: undefined
// index: 0
// input: "1999-12-31"
// length: 4

**es2018引入了具名匹配** 注意groups属性
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const matchObj = RE_DATE.exec('1999-12-31');
console.log('matchObj', matchObj);
// 0: "1999-12-31"
// 1: "1999"
// 2: "12"
// 3: "31"
// groups: {
    day: "31"
    month: "12"
    year: "1999"
}
// index: 0
// input: "1999-12-31"
// length: 4

// ps：如果没有匹配到，键名依旧存在，值是undefined
```
- **试一试**
```
/132/   // 可匹配字符串：任何包含132的字符（注意是132，不是1或3或2）
/[132]/   // ..: 任何包含1或2或3的字符即可
/(13|2)/    // ..: 任何包含13或2的字符（注意是13，不是1或3）
/^2.6$/   // ..: 2开头，6结尾，中间包含单个字符（除了换行和行结束符）
/^[2.3]$/   // ..: 2或.或3的一个字符的字符串
/^[\dz]$/   // ..: 0-9或z的一个字符的字符串
/^[15-73]$/   // ..: 1或5-7或3的一个字符的字符串
/^\[\d+\]$/   // ..: [开头，]结尾，中间是任意一串数字的字符串 例如：[235]
/^10|28$/   // ..: 10开头或28结尾的任何字符串 例如：10 102 1028 10dfsdf wsfsf28 10sdf28
/(^10|28$)/   // ..: 10或28  ()改变了默认优先级  

当一个正则表达式需要把一个变量作为一个动态的变量规则时，我们只能通过创建实例的方式实现  
var num = 678;
var reg = new RegExp("^aaa" + num + "bbb$");
reg.test('aaa678bbb');
在实例创建的方式中,我们只要出现\,基本上都是要写\\的
reg = new RegExp("^\\[100\\]$");
reg.test("[100]");  //->true
reg = new RegExp("^\\d+$", "ig");

/^1\d{10}$/   // 手机号
/^[\u4e00-\u9fa5]{2,4}$/    // 真实姓名(中国):两到四位的汉字
/^-?(\d|([1-9]\d+))(\.\d+)?$/   // 有效数字
/^(1[8-9])|([2-5]\d)|(6[0-5])$/    // 18-65之间
// 初级练习
    // 1、求非负整数 : 
        // 我的答案：/^\d+$/.test('');
        // 正确答案：/^\d+$/
    // 2、匹配正整数： 
        // 我的答案：/^[1-9]\d*$/.test('-66545345');
        // 正确答案：/^[1-9]*[1-9][0-9]*$/
    // 3、非正整数：（小数、0、所有负数）
        
    // 4、负整数：
        // 我的答案：/^-[1-9]+$/.test('-6');
        // 正确答案：/^-[0-9]*[1-9][0-9]*$ /
    // 5、整数 ：
        // 我的答案：/(^-[1-9]+$|^\d+$)/.test('654')
        // 正确答案：/^-?\d+$/
    // 6、非负浮点数 ：
        // 正确答案：/^\d+(\.\d+)?$/.test('7666')
    // 7、正浮点数 ：
        // 我的答案：/^(([1-9](\d+)?(\.\d+)?)|0\.\d+)$/.test(8)
    // 8、非正浮点数 ：
       // 我的答案： /(0|^-\d+(\.\d+)?$)/.test(0)
    // 9、负浮点数：
            /^-\d+(\.\d+)?$/.test('-0');
    // 10、浮点数：
            /^(-?\d+)(\.\d+)?$/.test('');
    // 11、有数字、26个英文字母组成的字符串：
            /^[A-Za-z0-9]+$/.test('1r')
    // 12、长度为8-10的用户密码（以字母开头、数字、下划线）
            /^[a-zA-Z]\w{7,10}$/
```

- **匹配 replace天生为正则而生**
```
var str = "2016-04-03";//->"2016年04月03日"
let reg = /^([1-9]\d{3})-(0?[1-9]|1[1-2])-([02]\d|[3][0-1])$/
console.log(reg.test(str))
str.replace(reg,function(){
  console.log(arguments)
  // 0: "2016-04-03"
  // 1: "2016"
  // 2: "04"
  // 3: "03"
  // 4: 0
  // 5: "2016-01-9"
  return arguments[1] + '年' + arguments[2] + '月' + + arguments[3] + '日'
})

var str = "678123";//->"陆柒捌壹贰叁"
var ary = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
str = str.replace(/\d/g, function () {
    console.log(arguments[0]);    //每一次捕获到的内容(我们要的数字)
    return ary[arguments[0]];
});
```
## String 对象方法
- **charAt()** 返回在指定位置的字符
```
let a = 'heLLo';
a.charAt('2'); // L
```
- **indexOf()** 返回某个指定字符在字符串首次出现的位置，也可以用来判断是否存在该字符，没有返回-1
```
let a = 'hello';
a.indexOf('l'); // 2
```
- **lastIndexOf()** 从后往前数，指定字符首次出现的位置
```
let a = 'hello';
a.lastIndexOf('l'); // 3
```
- **slice()** 提取字符串的片段，返回提取的字符串
```
let a = 'hello';
a.slice(1);     // ello
a.slice(1, 3);  // el
```
- **substr()** 从起始索引号提取字符串中指定数目的字符。
```
let a = 'hello';
a.substr(1);     // ello
a.substr(1, 3);  // ell
```
- **split()** 把字符串分隔为字符串数组，第二个参数为limit,可指定返回的字符串最大长度
```
let str="How are you doing today?";
str.split(" ");         // ["How", "are", "you", "doing", "today?"]
str.split(" ",3);       // ["How", "are", "you"]
```
- **startsWith()** 查看字符串是否以指定字开头
```
var str = "Hello world, welcome to the Runoob.";
var n = str.startsWith("Hello");        // true
```
- **toLowerCase** 把字符串所有字符转为小写
```
let str="How are you doing today?";
str.toLowerCase();      // how are you doing today?
```
- **toUpperCase()** 把字符串所有字符转为大写
```
let str="How are you doing today?";
str.toUpperCase();      // HOW ARE YOU DOING TODAY?
```
- **trim()** 去除字符串两边的空白
```
let str="    How are you doing today?   ";
str.trim();     // "How are you doing today?"
```
## Array对象方法
- **concat(...)** 连接两个或更多的数组，并返回结果
```
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let arr3 = ['g', 'h', 'i'];
arr1.concat(arr2, arr3)         // ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
```
- **every()** 用于检测数组所有数据是否都符合指定的条件（函数提供）
```
let ages = [32, 33, 16, 40];
function checkAdult(age) {
    console.log('age===', age);         // 32 33 16
    return age >= 18;
}
ages.every(checkAdult)          // false
```
- **some()** 检测数组中是否有满足符合指定的条件（函数提供）
```
var ages = [3, 10, 18, 20];
var ages1 = [3, 10, 12, 14];
function checkAdult(age) {
    return age >=18;
}
ages.some(checkAdult)       // true
ages1.some(checkAdult)      // false
```
- **filter()** 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
```
let ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
}
ages.filter(checkAdult)         // [32, 33, 40]
```
- **find()** 通过测试（函数内判断）的数组的第一个元素的值
```
let ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
ages.find(checkAdult)           // 18
```
- **findIndex()** 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置
```
let ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
}
ages.findIndex(checkAdult)      // 2
```
- **forEach** 用于调用数组的每个元素，并将元素传递给回调函数
```
var numbers = [4, 9, 16, 25];
var objList = [{"a": "aa"}, {"b": "bb"}, {"c": "cc"}]

function myFunction(item, index) {
    console.log('item..index', item, index)
}
numbers.forEach(myFunction)     // item..index 4 0
                                // item..index 9 1
                                // item..index 16 2
                                // item..index 25 3
objList.forEach(myFunction)     // item..index {a: "aa"} 0
                                // item..index {b: "bb"} 1
                                // item..index {c: "cc"} 2
objList.forEach((item, index) => {
    console.log('item..index', item, index)     // item..index {a: "aa"} 0
                                                // item..index {b: "bb"} 1
                                                // item..index {c: "cc"} 2
})
```
- **from()** 字符串变为数组
```
Array.from("RUNOOB");   // ["R", "U", "N", "O", "O", "B"]
```
- **includes()** 检测数组是否包含某个值
```
let site = ['runoob', 'google', 'taobao'];
site.includes('runoob');    // true
site.includes('run');   // false
arr.includes(searchElement, fromIndex)
// 可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
```
- **indexOf()** 查找数组中某个元素的index
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.indexOf("Apple");    // 2
```
- **isArray()** 判断是否为数组
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var obj = {"aa": "aa"}
Array.isArray(fruits);  // true
Array.isArray(obj);     // false
```
- **join()** 将数组转换为字符串，并根据指定分隔符分隔
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join('|')    // "Banana|Orange|Apple|Mango"
```
- **lastIndexOf()** 查找数组中某个元素最后出现的位置
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.lastIndexOf("Apple");    // 2
```
- **map()** 通过指定的函数处理数组的每个元素，并返回处理后的新数组
```
var arr = [0,2,4,6,8];

var str = arr.map((item, index, arr) => {
    return item / 2;
});
console.log('str==', str);      // [0, 1, 2, 3, 4]

var str1 = arr.forEach((item, index, arr) => {
    return item / 2;
})
console.log('str1===', str1);   // undefined
```
ps： forEach()也会调用数组的每个元素，但不会有返回值
- **pop()** 删除数组的最后一个元素
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits)     // ["Banana", "Orange", "Apple"]
```
- **push()** 可向数组结尾添加一个或多个元素
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi","Lemon");
fruits.push(["aa", "bb"])
console.log(fruits)     // ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon", Array(2)]
```
- **reduce()** 将数组从左到右计算为一个值
```
var numbers = [10, 20, 30, 40];
function getSum(total, num) {
    console.log(total)   // 5 15 35 65
    return total + num;
}
numbers.reduce(getSum, 5);  // 105
numbers.reduce(getSum);     // 100
// 第二个参数相当于一个初始值
```
- **reverse()** 颠倒数组顺序
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();   // Mango,Apple,Orange,Banana
```
- **shift()** 删除数组的第一个元素
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)     // ["Orange", "Apple", "Mango"]
```
- **unshift()** 可以向数组的开头添加一个或多个元素
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift('lemon', 'Pineapple')
console.log(fruits)     // ["lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]
```
- **slice()** 可以从已有的数组返回选定的元素
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.slice(1, 3);     // ["Orange", "Apple"]
```
- **sort()** 对数组进行排序
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();      // ["Apple", "Banana", "Mango", "Orange"]
```
- **splice()** 用于添加或删除数组中的元素
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, 'Lemon', 'Kiwi');   
// 参数1：从何处添加/删除元素；
// 参数2：删除多少个元素，若未指定，则从第一个参数指定的下标开始，删到结尾；
// 参数3：要添加到数组的新元素。
console.log(fruits);    // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
```
- **toString()** 将数组转换为字符串，数组中的元素之间用逗号分隔。
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString()       // "Banana,Orange,Apple,Mango"
```
## Date
- 创建Date对象
```
let a = new Date();
console.log(a);     // Sat May 30 2020 15:16:41 GMT+0800 (中国标准时间)
let b = new Date(1280977330000);
console.log(b);     // Thu Aug 05 2010 11:02:10 GMT+0800 (中国标准时间)
let c = new Date('2020/01/01 12:00:00');
console.log(c);     // Wed Jan 01 2020 12:00:00 GMT+0800 (中国标准时间)
let d = new Date('2020', '00', '01', '12', '00', '00', '00');
console.log(d)      // Wed Jan 01 2020 12:00:00 GMT+0800 (中国标准时间)
```
- **getDate()** 获取月份的某一天，1-31之间的某个数
```
var d = new Date("July 21, 1983 01:15:00");
d.getDate();        // 21
```
- **getDay()** 获取1周的某一天
```
var d = new Date("July 21, 1983 01:15:00");
d.getDay();     // 4  （0为星期天，1为星期一 ...）
```
- **getFullYear()** 获取年份
```
var d = new Date("July 21, 2020 01:15:00");
d.getFullYear()     // 2020
```
- **getHours()** 获取小时 0-24
```
var d = new Date("July 21, 2020 01:15:00");
d.getHours()     // 1
```
- **getMilliseconds()** 获取毫秒数
```
var d = new Date("July 21, 1983 01:15:00:526");
d.getMilliseconds();    // 526
```
- **getMinutes()**  返回 Date 对象的分钟(0 ~ 59)
- **getMonth()**    从 Date 对象返回月份 (0(一月) ~ 11)
- **getSeconds()** 返回 Date 对象的秒数 (0 ~ 59)
- **getTime()** 返回 1970 年 1 月 1 日至今的毫秒数
```
var d = new Date("May 30, 2020 01:15:00:526");
d.getTime();    // 1590772500526
```
- **toLocaleDateString()** 根据本地时间把date对象的日期部分转换为字符串
```
var d=new Date("May 30, 2020 01:15:00:526");
d.toLocaleDateString();     // 2020/5/30
```
## Number
- **toFixed(x)** 保留小数点后指定位数（四舍五入）
```
let n = 6.4642
n.toFixed(1)        // 6.5 
```
- **toPrecision()** 把数字格式化为指定的长度:
```
var num = new Number(13.3714);
num.toPrecision(2);     // "13"
num.toPrecision(3);     // "13.4"
num.toPrecision(4);     // "13.37"
```
## 杂七杂八
### 1. 弹窗遮罩
```
<div class='content'></div>
<div class="modal" @click='close'></div>    // 遮罩
.modal{
    width:100%;
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
}
.content{
    background: #fff;
    position: fixed;
    top:50%;
    left:50%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    z-index: 1001;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
}
```
### 2. 按钮点击后边框颜色变化
```
// 给按钮添加如下属性
outline: none;
```
### 3. 背景图
```
background-size: cover
background-size: contain
```
**auto**  
以背景图片的比例缩放背景图片。

**cover**   
缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和 contain 值相反，cover 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。

**contain**   
缩放背景图片以完全装入背景区，可能背景区部分空白。contain 尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小的不同时，容器的空白区域（上/下或者左/右）会显示由 background-color 设置的背景颜色。
