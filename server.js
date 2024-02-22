const http = require('http');

const part = process.env.PORT || 3000;

const server = http.createServer();

server.listen(part);