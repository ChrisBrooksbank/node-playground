"use strict";
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Hello from Node.js');
});
server.listen(1500);
console.log('listening yes...');
