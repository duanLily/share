const koa = require('koa');
const mysql = require('koa-mysql');

let db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'koatest'});

let server = new koa();
server.use(function* () {
  // this.body = "data";
  let data = yield db.query(`SELECT * FROM user_table`);
  this.body = data;
});
server.listen(8080);
