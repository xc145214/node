/**
 * Created by Administrator on 2015/8/25.
 */
$(function () {
    var content = $('#content');
    var status = $('#status');
    var input = $('#input');
    var myName = false;

    //����websocket����
    socket = io.connect('http://localhost:3000');
    //�յ�server������ȷ��
    socket.on('open',function(){
        status.text('Choose a name:');
    });

    //����system�¼����ж�welcome����disconnect����ӡϵͳ��Ϣ��Ϣ
    socket.on('system',function(json){
        var p = '';
        if (json.type === 'welcome'){
            if(myName==json.text) status.text(myName + ': ').css('color', json.color);
            p = '<p style="background:'+json.color+'">system  @ '+ json.time+ ' : Welcome ' + json.text +'</p>';
        }else if(json.type == 'disconnect'){
            p = '<p style="background:'+json.color+'">system  @ '+ json.time+ ' : Bye ' + json.text +'</p>';
        }
        content.prepend(p);
    });

    //����message�¼�����ӡ��Ϣ��Ϣ
    socket.on('message',function(json){
        var p = '<p><span style="color:'+json.color+';">' + json.author+'</span> @ '+ json.time+ ' : '+json.text+'</p>';
        content.prepend(p);
    });

    //ͨ�����س����ύ������Ϣ
    input.keydown(function(e) {
        if (e.keyCode === 13) {
            var msg = $(this).val();
            if (!msg) return;
            socket.send(msg);
            $(this).val('');
            if (myName === false) {
                myName = msg;
            }
        }
    });
});