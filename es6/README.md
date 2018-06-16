# ECMAScript 6 (es2015)

## 变量

|es5|es6|
|---|---|
|var|let(变量) const(常量)|
|缺点:<br>1.重复定义不报错<br>2.没有块级作用域<br>3.不能限制修改| 解决:<br>不能重复定义<br>有块级作用域->花括号<br>const 是常量，不能修改

## 字符串

- 两个新方法

    - startsWith()  以...开头

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

    - endsWith()    以...结尾

    ```javascript
        // 根据文件名的后缀判断文件类型
        const str = 'a.txt';
        if (str.endsWith('.txt')) {
            console.log('文本文件');
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
                </div>`
            ```

## 解构赋值

- 使用条件

    - 左右两边的解构必须一样

    - 右边必须是个值

    - 声明和赋值不能分开（须在同一行）

- 案例

    ```javascript
    // 数组
    let [a,b,c] = [1,2,3];
    console.log(a,b,c); // 1 2 3

    // 对象
    let {a,b} = {b:2,a:1}
    console.log(a,b); // 1 2

    // 函数参数的解构赋值
    function fn(obj) {
        console.log(obj.name);
    }

    // 等价于
    function fn({name}) {
        console.log(name);
    }

    fn({name: 'hopper'});
    ```
