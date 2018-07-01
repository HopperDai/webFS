## 原生 js 实现模块

- 库原理：核心代码

---

### seajs/requirejs

- 在 js 文件里（模块里）

```javascript
define(function(require, exports, module) {
  require("1.js"); // 难点
});
```

- 在 html 文件里

```javascript
seajs.use(["mod"], function(mod) {});
```
