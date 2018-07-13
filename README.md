# web 全栈

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

| angular       | vue     | react            |
| ------------- | ------- | ---------------- |
| ng-cli        | vue-cli | react-create-app |
| @angular/http | axios   | fetch            |

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