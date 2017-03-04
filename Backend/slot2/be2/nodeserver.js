const http = require('http');

//tạo một node server đơn giản
http.createServer((request, response) => {
  response.end('Hello');
}).listen(8081)

console.log('Server running at localhost:8081 ');
