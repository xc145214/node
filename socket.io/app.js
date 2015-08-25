/**
 * Created by Administrator on 2015/8/24.
 */
var express= require('express');
var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

//�����û�
var onlineUsers = {};

//��ǰ�����û���
var onlineCount = 0;

io.on('connection', function (socket) {
    console.log("a user connected");


    //�������û�����
    socket.on('login', function (obj) {
        //���¼����û���Ψһ��ʶ����socket�����ƣ������˳���ʱ����õ�
        socket.name = obj.userid;

        //��������б������������ͼ���
        if (!onlineUsers.hasOwnProperty(obj.userid)) {
            onlineUsers[obj.userid] = obj.username;
            //��������+1
            onlineCount++;
        }

        //�����пͻ��˹㲥�û�����
        io.emit('login', {onlineUsers: onlineUsers, onlineCount: onlineCount, user: obj});
        console.log(obj.username + '������������');
    });

    //�����û��˳�
    socket.on('disconnect', function () {
        //���˳����û��������б���ɾ��
        if (onlineUsers.hasOwnProperty(socket.name)) {
            //�˳��û�����Ϣ
            var obj = {userid: socket.name, username: onlineUsers[socket.name]};

            //ɾ��
            delete onlineUsers[socket.name];
            //��������-1
            onlineCount--;

            //�����пͻ��˹㲥�û��˳�
            io.emit('logout', {onlineUsers: onlineUsers, onlineCount: onlineCount, user: obj});
            console.log(obj.username + '�˳���������');
        }
    });

    //�����û�������������
    socket.on('message', function (obj) {
        //�����пͻ��˹㲥��������Ϣ
        io.emit('message', obj);
        console.log(obj.username + '˵��' + obj.content);
    });

});



app.use(express.static('public'));


// ָ��webscoket�Ŀͻ��˵�html�ļ�
app.get('/', function (req, res) {
    //res.send('<h1>Welcome Realtime Server</h1>');
    res.sendFile(__dirname +'/views/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

