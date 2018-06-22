<?php
    header("Content-Type:text/html;charset=utf-8");

    // 自动跳转
    header("Refresh:10;url=http://www.baidu.com");
    echo "10 秒钟后跳转到百度，没有跳转，请点击<a href='www.baidu.com'>百度</a>";

    /* 
        获取用户提交的数据：
            1. $_GET
            2. $_POST
            3. $_FILES
        获取客户端的请求头：
            getallheaders()
    */

    $allHeaders = getallheaders();
    $userAgent = $allHeaders["User-Agent"];

    // 判断字符串包含某个字符
    if(strstr($userAgent,"Chrome")){
        echo "google 浏览器";
    }else if(strstr($userAgent,"Firefox")){
        echo "火狐浏览器";
    }else {
        echo "其他浏览器";
    }
?>