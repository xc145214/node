/**
 * Created by Administrator on 2015/8/25.
 */
//�����
var express= require('express');
var app = require('express')();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

//������־����
io.set('log level',1);


//websocket����
io.on('connection',function(socket){
    socket.emit('open');

    // ��ӡ������Ϣ
    // console.log(socket.handshake);

    // ����ͻ��˶���
    var client = {
        socket:socket,
        name:false,
        color:getColor()
    }

    // ��message�¼��ļ���
    socket.on('message', function(msg){
        var obj = {time:getTime(),color:client.color};

        // �ж��ǲ��ǵ�һ�����ӣ��Ե�һ����Ϣ��Ϊ�û���
        if(!client.name){
            client.name = msg;
            obj['text']=client.name;
            obj['author']='System';
            obj['type']='welcome';
            console.log(client.name + ' login');

            //���ػ�ӭ��
            socket.emit('system',obj);
            //�㲥���û��ѵ�½
            socket.broadcast.emit('system',obj);
        }else{

            //������ǵ�һ�ε����ӣ�������������Ϣ
            obj['text']=msg;
            obj['author']=client.name;
            obj['type']='message';
            console.log(client.name + ' say: ' + msg);

            // ������Ϣ������ʡ�ԣ�
            socket.emit('message',obj);
            // �㲥�������û�����Ϣ
            socket.broadcast.emit('message',obj);
        }
    });

    //���������¼�
    socket.on('disconnect', function () {
        var obj = {
            time:getTime(),
            color:client.color,
            author:'System',
            text:client.name,
            type:'disconnect'
        };

        // �㲥�û����˳�
        socket.broadcast.emit('system',obj);
        console.log(client.name + 'Disconnect');
    });

});


app.use(express.static('public'));


// ָ��webscoket�Ŀͻ��˵�html�ļ�
app.get('/', function (req, res) {
    res.sendFile(__dirname +'/views/fens.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});


var getTime=function(){
    var date = new Date();
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

var getColor=function(){
    var colors = ['aliceblue','antiquewhite','aqua','aquamarine','pink','red','green',
        'orange','blue','blueviolet','brown','burlywood','cadetblue'];
    return colors[Math.round(Math.random() * 10000 % colors.length)];
}