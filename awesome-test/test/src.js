/**
 * �ַ�����ת
 * @param name
 * @returns {string}
 */
function reverse(name) {
    return name.split("").reverse().join("");
}

/**
 * �ж��Ƿ�������
 * @param num
 * @returns {boolean}
 */
function isInteger(num) {
    if (typeof num !== "number") return false;
    var pattern = /^[1-9]\d*$/g;
    return pattern.test(num);
}

/**
 * �ж�value����������
 * @param value
 */
function getTypeofVal(val) {
    if(typeof val == 'object'){
        return objType(val);
    }
    return typeof val;
}

/**
 * ��ȡ���������
 * @param arr
 * @returns {string}
 */
function objType(arr){
    return Object.prototype.toString.apply(arr);
}

/**
 * ��ӡ����Ԫ��
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
