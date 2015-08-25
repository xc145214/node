/**
 * Created by Administrator on 2015/5/15.
 */
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function () {
        return "(" + this.from + "бнбн" + this.to + ")";
    }
}


var r2 =new  Range(1, 5);
r2.includes(2);
r2.foreach(console.log);
console.log(r2);