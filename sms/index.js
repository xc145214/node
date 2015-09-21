var https = require('https');
var querystring = require('querystring');
var parseString = require('xml2js').parseString;

var postData = {
    UserID:969885,
    Account:'runtai',
    Password:'7C4A8D09CA3762AF61E59520943DC26494F8941B',
    //ActiveID:'8539469920791790'
    SMSType:1,
    Content:'【优链网】123456(优链网注册验证码，10分钟有效)【浪驰软件】',
    Phones:13682541912,
    SendDate:null,
    SendTime:null
};

var content = querystring.stringify(postData);

console.info(content);

var options = {
    host:'www.lanz.net.cn',
    path:'/LANZGateway/DirectSendSMSs.asp',
    method:'POST',
    agent:false,
    rejectUnauthorized : false,
    headers:{
        'Content-Type' : 'application/x-www-form-urlencoded;charset=gb2312',
        'Content-Length' :content.length
    }
};

var req = https.request(options,function(res){
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        parseString(chunk, function (err, result) {
            console.info(result);
            console.info(JSON.stringify(result));
        });
    });
    res.on('end',function(){
        console.log('over');
    });
});

req.write(content);
req.end();