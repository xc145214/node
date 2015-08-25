/**
 * Created by Administrator on 2015/8/25.
 */
var express= require('express');
var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);





app.get('/',function(req,res){
    res.sendFile(__dirname +'/views/chat.html');
});

io.on('connection', function(socket){

    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.broadcast.emit('hi');
    socket.on('chat message', function(msg){

        console.log(msg);
        io.emit('chat message', msg);
    });
});


//静态页面
app.use(express.static('public'));

http.listen(3000, function(){
    console.log('listening on *:3000');
});