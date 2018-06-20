# HTTP 协议

- 超文本传输协议

- 规范，约束双方。约束的是浏览器客户端和服务器通讯的一个标准。

- 客户端和服务器进行交互，交互的目的是传递数据，基于请求和响应

- http 协议是约束客户端和服务器传递的数据格式

### 请求数据 -> 客户端（浏览器）进行数据组装

- 请求首行

- 请求头

- 请求空行

- 请求体

#### GET 请求数据格式 （request）

1. 请求首行

    ```GET /day_02/code/01_fileupload.html?username=zhangsan&age=11 HTTP/1.1```

    - ```/day_02/code/01_fileupload.html``` 根据地址去找服务器上面的资源

    - ```HTTP/1.1``` 协议的版本

2. 请求头 -> GET 请求，数据放在 url 上，因此没有请求体

    - 主机地址

        ```Host	88.128.18.51```

    - [自动升级请求从 http 到 https](https://segmentfault.com/q/1010000005875125?_ea=937051)

        ```Upgrade-Insecure-Requests	1```

    - 告诉服务器客户端浏览器的版本，以及操作系统的版本

        ```User-Agent	Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36```

    - 告诉服务器，客户端接收的数据格式

        ```Accept	text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8```

    - 告诉服务器，请求来自哪个页面

        ```Referer	http://88.128.18.51/day_02/code/```

    - 接收服务器的压缩类型

        ```Accept-Encoding	gzip, deflate, br```

    - 接收语言

        ```Accept-Language	zh-CN,zh;q=0.9,ko;q=0.8,zh-HK;q=0.7```

    - 版本匹配

        ```If-None-Match	"2a000000005186-273-56efe0a46c0d8"```
    
    - 修改
    
        ```If-Modified-Since	Tue, 19 Jun 2018 12:44:16 GMT```

### 响应数据

### HTTP 数据解析流程

## 前后端交互完整流程

![img](../imgs/交互.png)

