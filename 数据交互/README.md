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

      - 体：<= 2G 。数据
