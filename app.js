var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
app.get('/', function(req, res){
  request('http://www.baidu.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(body);
      //当前的$是拿到了整个body的前端选择器
      $=cheerio.load(body);
      //res.send("梁铖城你好");
      res.json({
        'classname':1,
        'result':$('.desc').length
      });
    }
  })
});

app.listen(3000);