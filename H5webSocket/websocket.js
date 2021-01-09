// 多个终端 通过websocket进行通信

//引入Websocket server模块
var WebSocketServer = require('websocket').server;

//引入http模块 搭建http服务器
var http = require('http');

var server = http.createServer();
server.listen(3000, function () {
  console.log("服务器搭建成功")
});

//储存所有终端的连接
var clients = [];

//创建Websocket服务对象
var wsServer = new WebSocketServer({httpServer: server});

//监听连接请求  建立连接
//webSocketRequest 当前的请求
wsServer.on('request', function (webSocketRequest) {
  //当前连接会话
  var connection = webSocketRequest.accept(null, 'accepted-origin');

  //把连接添加到终端
  clients.push(connection);

  //定时向客户端发送
  // setInterval(function () {
  //   connection.sendUTF("helloWorld" + (new Date()))
  // }, 1000);

  // 监听客户端发信息
  connection.on('message', function (msg) {
    // 当前传输的是utf-8类型数据
    if (msg.type == 'utf-8') {
      //给每一个连接都发送数据
      clients.forEach(function (item) {
        // 发送数据
        console.log(11111111111111111111111111111);
        console.log(item);
        item.sendUTF(msg.utf8Data);
      });
    }
  });


  // 当连接断开时，触发事件
  connection.on('close', function (reasonCode, description) {
    console.log("断开了一个连接");
    //获取当前索引
    var index = clients.indexOf(connection);
    // 删除
    clients.splice(index,1);
  })
});
