var http = require('http');

var express=require('express');
var app=express();
app.get('/',function(req,res)
{
    res.send('Hello World! -- App');
});

var port = process.env.PORT || 1337;
var server=app.listen(port,function() {});

console.log("Server running at http://localhost:%d", port);
