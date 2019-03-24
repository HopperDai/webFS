## 数据交互

1.  http 协议 , 被设计用于浏览器和服务器之间的通信

2.  form

3.  ajax 官方。不能跨域(跨域：不同域名之间进行通信)；单向通信

    - ajax 请求出现跨域问题，主要是因为浏览器的[『同源策略』](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)，目的：保护用户信息的安全，防止恶意的网站窃取数据。同源策略规定，ajax 只能发给同源的网址，否则报错

      - "同源"指的是"三个相同"
        - 协议相同
        - 域名相同
        - 端口相同

4.  jsonp 民间。可以跨域，但不推荐

5.  websocket 双向通信

---

### [http 协议](../http/README.md)

https://tools.ietf.org/html/rfc2616

1.  无状态

2.  请求过程（三次握手）：发送连接请求、响应接受、发送请求

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

  - `readyState` 五种状态（通信状态）

    ```
    0  初始状态  xhr 对象刚创建完
    1  连接      连接到服务器
    2  发送请求  send 完成
    3  接收完成  头接收完
    4  接收完成  体接收完
    ```

  - `status` http 状态码，（通信结果）

    ```
    1xx  消息
    2xx  成功
    3xx  重定向
      - 301 Moved Permanently  永久重定向
      - 302 Move temporarily   临时重定向
      - 304 Not Modified       没有修改，缓存
    4xx  请求错误
    5xx  服务器错误
    6xx+ 自定义

    成功：2xx/304 -> (xhr.status >=200 && xhr.status <300) || xhr.status === 304

    重定向的原因：
    - 访问：taobao.com
      - PC 端访问：302 -> www.taobao.com
      - 手机端访问：302 -> m.taobao.com
    ```

  - 接收响应的数据

    - xhr.response(不常用)

    - xhr.responseText ：文本的方式返回数据

      - 解析数据：

        - `eval('('+xhr.responseText+')');` 不太安全

        - JSON 安全，但不兼容 ie6/7/8

          - JSON.stringify：把 json 转换为字符串

          - JSON.parse: 把字符串转换为 json

          - json 标准格式

            1.  key 必须用引号包起来

            2.  双引号

          ```javascript
          // 兼容处理

          let json = null;
          try {
            json = JSON.parse(xhr.responseText);
          } catch (e) {
            json = eval("(" + xhr.responeseText + ")");
          }
          ```

    - xhr.responseURL(不常用)

    - xhr.responseXML ：xml 方式返回数据

      ```javascript
      // json
      let json = {
        name: "小明",
        age: 23,
        sister: {
          name: "小红",
          age: 24
        }
      };
      ```

      ```xml
        <!-- xml -->
        <?xml version=1.0 encoding="UTF-8"?>
        <person>
          <name>小明</name>
          <age>23</age>
          <sister>
            <person>
              <name>小红</name>
              <age>24</age>
            </person>
          </sister>
        </person>
      ```

## 安全

1.  前台没有安全性；后台才有安全性问题

    - 数据都与后台相关

2.  xss 跨站脚本攻击

ajax 不允许跨域：防止 xxs
