# web 全栈

- web full stack

## 常用软件

- 编辑器：vscode

- 服务器：wamp(windows)、xampp(mac)、nginx(Linux)

  - 支持数据库 (mysql)

  - 支持 php

- photoshop

- 手机虚拟机（测试）: 夜神

- Navicat for mysql（MySQL 管理工具）

- 虚拟机 VMware -> Linux 环境部署

- CentOS 64bit 镜像（Linux 环境） 镜像下载地址：http://mirrors.163.com/

- putty（ windows 系统连接 Linux 环境的服务器）、winSCP（Mac 用 yummy FTP、Linux 直接用 ssh）

  - putty: 命令行；winSCP: 拷贝文件

- git for windows （Mac 用 git-scm、Linux 直接用 yum/apt）

- TortoiseSVN（Max 用 SnailSVN、Linux 直接用 yum/apt）

- Node.js

- phonegap-cli v6.5.2 （ app 开发框架；npm 命令安装）国外

- APICloud Studio 2 （国内）

- MongoDB

- 浏览器：Chrome、Firefox

---

### 版本控制

作用：1.共享协作；2.版本查看

- svn：集中式（只有一台服务器）

  - svn checkout

  - svn commit = git add + git commit + git push

  - svn update = git pull

  - 远程客户端：码云

- git：分布式

  - 常用命令

    - 克隆项目：`git clone 源地址`

    - 提交：`git commit -a -m "说明"` (-a: 提交所有的文件；-m:提交描述)

    - 添加文件：`git add 文件/目录路径`

    - 推到服务器：`git push`

    - 更新到本地：`git pull`

  - 远程客户端：github/码云

### angular/vue/react

| angular            | vue                            | react                |
| ------------------ | ------------------------------ | -------------------- |
| ng-cli             | vue-cli                        | react-create-app     |
| @angular/http      | axios                          | fetch                |
| assets             | static                         | public               |
| 脏检查（数据层面） | 数据收集依赖 proxy（数据层面） | 虚拟 DOM（数据层面） |

- angular

```
// 组件
xxx.component.html
xxx.component.css
xxx.component.js
```

- vue

```
// 组件
<template></template>
<script></script>
<style></style>
```

- react

```
// 组件
class xxx extends Component{
  js...

  render(){
    return()
  }
}
```

## 前端性能优化

- 主要目的：提高 web 的访问速度，更好地提升交互效果

- 减少访问的时间

- 策略

  - html (适用：前后端一体)

    - 服务器给前端响应 html 资源时，适用 Gzip 压缩

    - 提前设置刷新的缓冲区

  - css

    - 把 css 文件放在页面的顶部，预先加载，避免页面缺失样式不美观

    - 合并多个 css 文件，减少 http 请求

  - js

    - 合并多个 js 文件，减少 http 请求

    - 减少使用 js 操作 DOM , 因为 javascript 访问 DOM 元素比较慢

    - 删除多余的注释代码，避免打包合并 js 时使得文件变大

  - 图片

    - 适当优化图片，减小图片的大小
      - [图片压缩工具](https://tinypng.com/)

    - 利用 css sprites 整合图像（传说中的精灵图），即把多个图片合成一个

## 浏览器兼容性
