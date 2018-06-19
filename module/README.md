# 模块化

- 基本实现：闭包函数的自调用
```javascript
    const DatePicker = (function(){
        return {
            init(){

            }
        }
    })();
```

- 解决以下的问题：

    - 代码杂乱无章，没条理性，不便维护，不便复用
    
    - 代码重复，逻辑重复
    
    - 全局变量污染

    - 不便保护私有数据

- 模块方式

    - AMD: async module define  -> RequireJs

    - [CMD](https://github.com/seajs/seajs/issues/242): common module defin (seajs -> 已停更) -> commonjs 的前端实现

    - commonjs: node 中使用的模块解决方案

    - vue、angular、react 集成了各自的模块化

    - es6 模块化

    - webpack 模块化的解决方案

- [AMD 和 CMD 区别](https://www.zhihu.com/question/20351507)

## [AMD (异步模块定义)](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)) -> 思想

- 模块和模块的依赖可以被异步加载

- html 引入 requirejs

```html
    <!-- data-main: 主 js 路径; src: 引入 requirejs 的路径 -->
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