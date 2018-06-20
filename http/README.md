# HTTP 协议

- 超文本传输协议

- 规范，约束双方。约束的是浏览器客户端和服务器通讯的一个标准。

- 客户端和服务器进行交互，交互的目的是传递数据，基于请求和响应

- http 协议是约束客户端和服务器传递的数据格式

### 请求数据：客户端（浏览器）进行数据组装。 客户端 -> 服务器

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

#### POST 请求数据格式 （request）

1. 请求首行

    ```POST /day_02/code/api/02_post.php HTTP/1.1```

2. 请求头。名称和值

    - ```Host	88.128.18.51```

    - ```Content-Length	15```   内容长度

    - ```Cache-Control	max-age=0```    缓存

    - POST 提交有一个默认的请求头

        ```Content-Type	application/x-www-form-urlencoded```

3. 请求空行

4. 请求体：请求发送的数据部分


### 响应数据。 服务器 -> 客户端

1. 响应首行

    ```HTTP/1.1 200 OK```

2. 响应头

    - 服务器的事件

        ```
            Date	Tue, 19 Jun 2018 13:45:04 GMT
            Server	Apache/2.2.21 (Win32) PHP/5.3.10
        ```

    - 文件的最后修改文件

        ```Last-Modified	Tue, 19 Jun 2018 13:30:43 GMT```

    

    - 文件的版本.

        ```ETag	"3600000000518d-253-56efeb066168b"```

    - 字节

        ```Accept-Ranges	bytes```

    - 告诉客户端浏览器，响应体的长度.

        ```Content-Length	595```

    - 响应的数据格式

        ```Content-Type	text/html```

3. 响应空行

4. 响应体（response）

    ```
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
                <!--
                文件上传客户端的处理
                        1:文件上传必须表单提交
                        2：必须是post 方式提交
                        3：表单属性  encType="multipart/form-data"
                        4：input type="file"
                -->
                <form action="./api/02_post.php" method="post">
                    照片:<input type="text" name="lifephoto"> <br> <br>
                        <input type="submit" value="上传">
                </form>
        </body>
        </html>
    ```

### HTTP 数据解析流程

![img](../imgs/数据解析.png)

- http 协议约束了```请求数据```和```响应数据```的数据格式

### GET 和 POST 区别

### 状态码

## 前后端交互完整流程

![img](../imgs/交互.png)

