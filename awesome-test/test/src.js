/**
 * 字符串翻转
 * @param name
 * @returns {string}
 */
function reverse(name) {
    return name.split("").reverse().join("");
}

/**
 * 判断是否是整数
 * @param num
 * @returns {boolean}
 */
function isInteger(num) {
    if (typeof num !== "number") return false;
    var pattern = /^[1-9]\d*$/g;
    return pattern.test(num);
}

/**
 * 判断value的数据类型
 * @param value
 */
function getTypeofVal(val) {
    if(typeof val == 'object'){
        return objType(val);
    }
    return typeof val;
}

/**
 * 获取对象的类型
 * @param arr
 * @returns {string}
 */
function objType(arr){
    return Object.prototype.toString.apply(arr);
}

/**
 * 打印数组元素
 * @param arr
 */
function printArray(arr){
    if(objType(arr) === '[object Array]' && arr.length > 0){
        for(var item in arr){
            console.log(arr[item]);
        }
    }
    console.log( "not an array");
}

var then = new Date(2011, 0, 1);
var now = new Date();
var time = now - then;

var values = [];
values.push(then);
values.push(now);
values.push(time);


printArray(values);
