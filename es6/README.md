# ECMAScript 6 (es2015)

- ECMAScript 标准
- javascript 语言（实现）
- 适用高级浏览器——不兼容 -> 编译

## 变量

| es5                                                             | es6                                                                     |
| --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| var                                                             | let(变量) const(常量)                                                   |
| 缺点:<br>1.重复定义不报错<br>2.没有块级作用域<br>3.不能限制修改 | 解决:<br>不能重复定义<br>有块级作用域->花括号<br>const 是常量，不能修改 |

## 函数 + 参数

- 箭头函数 —— 简写

  1.  只有一个参数，`()` 可以省略
  2.  只有一个语句，还是 return , `{}` 可以省略

```javascript
// 数组排序
let arr = [12, 3, 5, 19];
arr.sort((a, b) => a - b);
console.log(arr); // [3, 5, 12, 19]
```

- 参数扩展——剩余参数（Rest Parameter）

```javascript
function show(a, b, ...args) {
  console.log(args);
}

show(13, 3, 1, 2, 3); // 1,2,3
```

- 展开数组

```javascript
let arr = [1, 2, 3];

// ...arr 等价于 1,2,3

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(...arr); // 6
```

## 字符串

- 两个新方法

  - startsWith() 以...开头

```javascript
    if (str.startsWith('http://')) {
        console.log('普通网址');
    } eles if (str.startsWith('https://')) {
        console.log('加密网址');
    } else if (str.startsWith('git://')) {
        console.log('git 地址');
    } else if (str.startsWith('svn://')) {
        console.log('svn 地址');
    }
```

- endsWith() 以...结尾

```javascript
// 根据文件名的后缀判断文件类型
const str = "a.txt";
if (str.endsWith(".txt")) {
  console.log("文本文件");
}
```

- 字符串模板

  - 用法：

    - 反单引号 `

    - 字符串变量：`${变量名}`


    ```javascript
    const a = 123;
    console.log(`abc${a}`); // abc123
    ```

- 优点：

  - 直接把变量放到字符串中

  - 支持换行

    ```javascript
    // es6 前字符串换行报错
    // es6 前字符串拼接最好用 array.join() 方法
    `<div>
            <span>11111</span>
        </div>`;
    ```

## 解构赋值

- 使用条件

  - 左右两边的解构必须一样

  - 右边必须是个值

  - 声明和赋值不能分开（须在同一行）

- 案例

  ```javascript
  // 数组
  let [a, b, c] = [1, 2, 3];
  console.log(a, b, c); // 1 2 3

  // 对象
  let { a, b } = { b: 2, a: 1 };
  console.log(a, b); // 1 2

  // 函数参数的解构赋值
  function fn(obj) {
    console.log(obj.name);
  }

  // 等价于
  function fn({ name }) {
    console.log(name);
  }

  fn({ name: "hopper" });
  ```

## 数组

- map : 映射 -> 一个对一个

  ```javascript
  let arr = [1, 2, 3, 4];
  let arr2 = arr.map(item => item * 2);
  console.log(arr2); // 2,4,6,8
  ```

- reduce : 汇总

  ```javascript
  let arr = [1, 2, 3, 4, 5];
  /*
    tmp: 上一次回调返回累积值
    item: 数组中正在处理的元素
    index(可选): 数组中正在处理的当前元素的索引
   */
  let total = arr.reduce((tmp, item, index) => tmp + item);
  console.log(total); // 15

  // 求平均数
  let average = arr.reduce((tmp, item, index) => {
    if (index < arr.length - 1) {
      return tmp + item;
    } else {
      return (tmp + item) / arr.length;
    }
  });
  ```

- filter : 过滤（保留回调返回 true 的）

  ```javascript
  // 输出奇数
  let arr = [1, 2, 3];
  let odd = arr.filter(item => item % 2);
  console.log(odd);
  ```

- forEach : 迭代、遍历

  ```javascript
  let arr = [1, 2, 3];
  arr.forEach((item, index) => {
    console.log(`第${index}个是${item}`);
  });
  ```

## Module

- 由两个命令构成：export 和 import

- export: 规定模块的对外接口

- import: 输入其他模块提供的功能

### export 命令

- 一个模块是一个独立的文件，内部的所有变量，外部无法读取，须使用 export 关键字输出变量

- 输出方式

```javascript
    // 1. 输出变量
    export var name = 'hopper';
    export var age = 20;
    // 等价于
    var name = 'hopper';
    var age = 20;
    export {name,age};  // 推荐

    // 2. 输出函数或类（class）
    export function sum(x,y){
        return x + y;
    }

    // 3. 使用 as 关键字重命名
    function v1 {...}
    export {
        v1 as aaa;
        v1 as bbb;  // v1 可以用不同的名字输出两次
    }
```

- 注意：

  - export 输出的对外接口，必须与模块内的变量建立一一对应的关系

```javascript
// 报错
export 1;   // 直接输出1

// 报错
var m = 1;
export m;   // 通过 m 变量直接输出 1 ， 不是接口

// 正确写法
// 写法 一
export var m = 1;

// 写法 二
var m = 1;
export {m};

// 写法 三
var n = 1;
export {n as m};

// 以上三种方法规定了对外的接口 m ; 实质：在接口名和模块内部变量之间，建立了一一对应的关系. 函数和类的输出，也要遵循这种写法
```

- export 命令可以出现在模块的任意位置，但必须处于模块的顶层

### import 命令

- export 命令定义了模块的对外接口，通过 import 命令加载这个模块

- 输入的变量都是只读，本质是输入接口

- from 路径：

  - 可以是相对路径，也可以是绝对路径，.js 后缀可以省略

  - 如果只是模块名，不带有路径，那么必须有配置文件，告诉 js 引擎该模块的位置

```javascript
import { method } from "Utils";

// Utils 是模块文件名，由于不带路径，须有配置文件
```

- 模块的整体加载

  - 用 \* 指定一个对象，模块输出的所有值都加载这个对象上

```javascript
// circle.js
// 输出 area 和 circumference

export function area(r) {
  return Math.PI * r * r;
}

export function circumference(r) {
  return 2 * Math.PI * r;
}
```

```javascript
// main.js

import { area, circumference } from "./circle";

console.log("圆面积", area(4));
console.log("圆周长", circumference(4));
```

```javascript
    // 整体加载
    // 注：整个 circle 对象是静态分析，不允许运行时改变

    import * as circle from './circle'

    console.log('圆面积'，circle.area(4));
    console.log('圆周长'，circle.circumference(4));
```
