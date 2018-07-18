# webpack

打包、构建、编译

## 原理

打包：把很多文件打包到一起

- 找到所有的引入（import、require）-> 语法解析

- 把引入的文件直接放到当前的文件里面 -> 作用域

- 得到，当前文件独立运行的结果

## 使用 -> webpack.config.js

- 安装

  - `npm i -g webpack`

  - `npm i -g webpack-cli`

- 配置 `webpack.config.js`

  ```javascript
  module.exports = {
    entry: "",
    output: {
      filename: ""
    }
  };
  ```

- 运行：`webpack --config webpack.config.js`
