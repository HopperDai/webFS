<?php
    header("Content-Type:text/html;charset=utf-8"); // 解决乱码

    /* 
        上传文件服务器的处理：
        1. 接收请求
        2. 处理请求
        3. 完成请求
    */

    $files = $_FILES;   // 文件接收

    var_dump($files);   // 输出详细信息。如对象、数组
    /* 
    array
        'file' => 
            array
            'name' => string '车辆管理移动应用_ios.png' (length=32)
            'type' => string 'image/png' (length=9)
            'tmp_name' => string 'C:\wamp\tmp\php4A66.tmp' (length=23)
            'error' => int 0
            'size' => int 9485
    */

    $fileName = $files["file"]["name"]; // 文件名
    $tmpName = $files["file"]["tmp_name"]; // 获取文件上传的临时位置

    $name = mb_convert_encoding($fileName,"gb2312","UTF-8");   // 文件转码，解决中文不能保存的问题

    /* 
        进行硬盘存储
        move_uploaded_file(file,newloc);    // file: 规定要移动的文件；newloc: 规定文件的新位置
        php 拼接字符串用 .
    */
    move_uploaded_file($tmpName,"files/".$name);
    echo "上传成功";
?>