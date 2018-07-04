const http = require('http');

const port = 8080;

const httpServer = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write('abc');
    res.end();
});
httpServer.listen(port);