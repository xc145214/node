/**
 * Created by Administrator on 2015/5/15.
 */

/**
 * 原型继承创建对象
 * @param p
 * @returns {*}
 */
function inherit(p) {
    if (p == null) throw TypeError();            //p是对象，但不为null
    if (Object.create) {                          //如果Object.create方法存在，直接使用
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();

    function f() {
    };                         //定义空构造函数
    f.prototype = p;                        //将原型设置为p
    return new f();                         //使用f()创建p的继承对象
}

/**
 * 使用工厂方法返回一个范围对象
 * @param from
 * @param to
 * @returns {*}
 */
function range(from, to) {
    var r = inherit(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

//原型对象定义方法，被每个范围对象继承
range.methods = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function () {
        return "(" + this.from + "……" + this.to + ")";
    }
}

//var r = range(1, 3);
//r.includes(2);
//r.foreach(console.log);
//console.log(r);