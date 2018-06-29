## 数据交互

1.  http 协议

2.  form

3.  ajax 官方。不能跨域；单向通信

4.  jsonp 民间。可以跨域，但不推荐

5.  websocket 双向通信

---

### [http 协议](../http/README.md)

https://tools.ietf.org/html/rfc2616

1.  无状态

2.  连接过程（三次握手）：连接、接受、发送请求

3.  消息（数据）分成两块：头（header） + 体（body）

    - 大小限制：

      - 头：<= 32k 。信息

      - 体：<= 1G 。数据

- http 版本

  - http 1.0 短连接

  - http 1.1 主流。长连接-keep alive

  - http 2.0

## form 最重要

- 浏览器向服务器请求数据只有一种方式：form 表单 。ajax/jsonp 只是对表单的一种模拟

---

- action: 提交到哪，请求的地址

- method: GET/POST/PUT/DELETE/HEAD 决定了提交的数据格式

  | GET （获取数据）<= 32k  | POST （发送数据）<= 1G |
  | ----------------------- | ---------------------- |
  | 把数据放在 url 里面传输 | 放在 body 里面         |
  | 数据量很小              | 数据量大               |
  | 缓存                    | 不会缓存               |

- name 数据的名字

- enctype 编码类型

  - application/x-www-form-urlencoded ： 默认、小数据

    - 数据形式: `名字=值&名字=值&名字=值`

  - multipart/form-data ：将 body 分块，适合文件上传，大数据

  - text/plain ：不常用

## ajax 原理 -> XMLHttpRequest 对象

- 不兼容 ie6

- 特点：用户体验好、性能高

- 步骤

  1.  创建 xhr 对象

  2.  连接

  3.  发送数据

  4.  接收响应

- `onreadystatechange` 当通信状态改变

  - `readyState` 五种状态

    ```
    0  初始状态  xhr 对象刚创建完
    1  连接      连接到服务器
    2  发送请求  send 完成
    3  接收完成  头接收完
    4  接收完成  体接收完
    ```
