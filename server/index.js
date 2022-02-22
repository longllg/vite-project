const cors = require('cors');
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const getSuccessJson = require('./utils/response');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '121.41.93.134',
  port: '3306',
  user: 'longlinguo',
  password: '!BHbhbhbh520',
  database: 'my_test',
});
// console.log(cors());
// app.use(cors());
// app.all("*", function (req, res, next) {
//   //设置允许跨域的域名，*代表允许任意域名跨域
//   res.header("Access-Control-Allow-Origin", "*");
//   //允许的header类型
//   res.header("Access-Control-Allow-Headers", "content-type");
//   //跨域允许的请求方式
//   res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
//   if (req.method.toLowerCase() == "options") res.send(200);
//   //让options尝试请求快速结束
//   else next();
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9888');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next();
});
console.log(new Date());
app.post('/api', (req, res) => {
  connection.connect();
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    console.log(results);
  });
  res.json(getSuccessJson({ a: 1, v: 2 }));
});
app.listen(8888, (port) => {
  console.log(`服务启动在${8888}`);
});
