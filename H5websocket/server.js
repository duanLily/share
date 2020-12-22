var WebSocketServer = require('websocket').server;
var http = require('http');

// 创建服务器
var server = http.createServer(function (request, response) {
  console.log((new Date()) + ' Received request for ' + request.url);
  response.writeHead(404);
  response.end();
});
server.listen(3000, function () {
  console.log((new Date()) + ' Server is listening on port 3000');
});

// 创建Websocket服务器
wsServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false
});

// websocket 建立连接
wsServer.on('request', function (request) {
  // 当前连接
  var connection = request.accept(null, request.origin);

  // 定时器发送message
  // setInterval(function () {
  //   connection.sendUTF("服务器发送消息" + new Date());
  // },1000);

  console.log((new Date()) + ' Connection accepted.');
  // 监听当前连接 发送message时候
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data);
      connection.sendUTF(message.utf8Data);
    } else if (message.type === 'binary') {
      console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
      connection.sendBytes(message.binaryData);
    }
  });
  // 监听当前连接当close 关闭 触发
  connection.on('close', function (reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});
