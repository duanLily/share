# H5中websocket的应用
  ## HTTP
    |-超文本传输协议（HTTP,HyperText Transfer Protocol）是互联网上应用最为广泛的一种网络协议。
      用于从WWW服务器传输超文本到本地浏览器的传送协议。
      1、建立连接（三次握手）
      2、发送请求（request headers）
      3、响应请求（response headers）
      4、断开连接（四次握手）
  ## Websocket
    Websocket protocol是HTML一种新的协议。它实现了浏览器与服务器全双工通信（full-duple）。
    一开始的握手需要借助HTTP请求完成。
    Websocket需要类似TCP的客户端和服务端通过握手连接，
    连接成功后才能相互通信，客服端和服务端都能主动的向对方发送或接收数据。
    Websocket对象提供了一组API,用于创建和管理Websocket连接,以及通过连接发送和接收数据。
    |-创建Websocket对象
        var ws = new Websocket(url,[protocols]);
        url: 表示要连接的URL。这个URL应该为响应Websocket的地址。
        protocols: 可以是一个单个的协议名字字符串或者包含多个协议名字字符串的数组。
    |-Websocket 方法
        1、close([code],[reason]) 关闭Websocket连接或停止正在进行的连接请求。
           code：一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
           reason：一个可读的字符串，表示连接被关闭的原因。
        2、send(data) 通过Websocket 连接向服务器发送数据。
           data: 发送的信息，可以使字符串或者二进制数组。
    |-Websocket 属性
        1、onclose 用于监听连接关闭事件监听器。
           当Websocket对象的readyState状态变为CLOSED时会触发该事件。会接收一个close event对象。
        2、onerror 当错误发生时用于监听error事件的事件监听器。会接收一个error event对象。
        3、onmessage 一个用于消息事件的事件监听器，这一事件当有消息时到达的时候该事件会触发。会接收
           一个message event对象。
        4、onopen 一个用于连接打开事件的事件监听器。当readyState的值变为OPEN的时候会触发该事件。
           会接收一个open event对象。
        5、readyState 连接的当前状态。
           0 连接还没有开启 
           1 连接已开启并准备好进行通信
           2 连接正在关闭的过程中
           3 连接已经关闭，或者连接无法建立。
    |-
    |-
    
