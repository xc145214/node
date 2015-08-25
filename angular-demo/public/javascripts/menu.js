/**
 * Created by Administrator on 2015/4/15.
 */
app.controller('MenuController', function () {
    var menu = this;
    menu.items = [
        {name: '登录', link: '/login'},
        {name: 'the basic of angular', link: '/basic'},
        {name: 'todo list in angular', link: '/todo'},
        {name: 'nav 导航 in angular', link: '/nav'},
        {name: 'nice todoList', link: '/niceTodo'},
        {name: '单位转换', link: '/unitConver'},
        {name: '笔记本', link: '/notes'}

    ];

});