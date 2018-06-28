# 模块化

- 模块 = 元件 = 组件

- 模块：可以重用的单位

    - 定义

    - 调用

---

- 基本实现：闭包函数的自调用

```javascript
const DatePicker = (function() {
  return {
    init() {}
  };
})();
```

- 解决以下的问题：

  - 代码杂乱无章，没条理性，不便维护，不便复用

  - 代码重复，逻辑重复

  - 全局变量污染

  - 不便保护私有数据

- 模块化解决方案

  1.  民间（之前 js 没有模块化的官方实现）: sea.js、require.js

      - AMD: async module define -> RequireJs

      - [CMD](https://github.com/seajs/seajs/issues/242): common module definition (seajs -> 已停更) -> commonjs 的前端实现

      - [AMD 和 CMD 区别](https://www.zhihu.com/question/20351507)

  2.  nodejs 模块化: commonjs

  3.  es6 模块化

  4.  vue、angular、react 集成了各自的模块化

  5.  webpack 模块化的解决方案



## [AMD (异步模块定义)](<https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)>) -> 思想

- requirejs

- 模块和模块的依赖可以被异步加载

- html 引入 requirejs

```html
    <!-- data-main: 入口 js 路径; src: 引入 requirejs 的路径 -->
    <!-- data-main attribute tells require.js to load main.js after require.js loads. -->
    <script data-main="main.js" src="./require.js"></script>
```

### API

#### define —— 定义模块

```javascript
    /*
    定义模块
    id: 定义模块的名字，可选。默认：模块文件的路径
    dependencies: 一组对所定义的模块来说必须的依赖项
    factory: 模块执行的函数
     */
    define(id?,dependencies?,factory)
```

#### require —— 加载模块

```javascript
require.config({
  baseUrl: "",
  paths: {}
});

require([], function() {});
```

### 检查第三方库是否支持 AMD 规范

```javascript
// jquery、echarts...
if (typeof define === "function" && define.amd) {
  define([], function() {
    return jQuery;
  });
}
```

### 常用模块、文件夹路径配置

```javascript
requier.config({
  path: {
    jquery: "./lib/jquery.min"
  }
});

// 引用
require(["jquery"], function($) {});
```

### 注意：两个模块不能相互依赖 -> 循环依赖

- requirejs 解决循环依赖

```javascript
// a 已经依赖 b
// b 中先添加 require 模块依赖
define(["require"], function(require) {
  require("a")(); // 执行 a 的代码，手动调用
});
```

## node 中模块化

- require("http").createServer()

- require("fs").readFile()

- require("common/type").doSth()

## es6 模块化
