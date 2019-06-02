/**
 * websocket 特性
 * 1. 双工，数据实时性
 * 2. HTML5 标准才支持
 * 3. 被普遍使用
 * 库：socket.io
 */

 const http = require('http');
 const io = require('socket.io');

 const server = http.createServer();
 server.listen(3000);

 const wsServer = io.listen(server) // websocket 基于 http 服务
 wsServer.on('connection', sock => {
    sock.on('browser', (...data) => {
        console.log(`接收到浏览器的数据：${data}`);
    });
    setInterval(() => {
        sock.emit('server', Math.random());
    }, 1000)
 })
