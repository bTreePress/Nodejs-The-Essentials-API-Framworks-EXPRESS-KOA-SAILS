var koa = require('koa');
var app = koa();

app.use (function*(){
    this.body  = 'hello from koa api'
})

app.listen(3000);