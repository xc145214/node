/**
 * 测试整数
 */
describe("this is a integer test!", function () {
    it("Is integer", function () {
        expect(true).toEqual(isInteger(20));
        expect(false).toEqual(isInteger("20"));
        expect(false).toEqual(isInteger(0));
        expect(false).toEqual(isInteger(0.1));
    })
});

/**
 * 测试翻转
 */
describe("this is a string reverse test!", function () {
    it("reverse String", function () {
        expect("DCBA").toEqual(reverse("ABCD"))
    })
});

describe("Math method test!", function () {
    it("Math method", function () {
        expect(1.0).toEqual(Math.round(.6));
        expect(1.0).toEqual(Math.ceil(.6));
        expect(0.0).toEqual(Math.floor(.6));
    })

    it("number cacl", function () {
        var x = .3 - .2;
        var y = .2 - .1;
        expect(false).toEqual(x == y);
        expect(false).toEqual(x == .1);
        expect(true).toEqual(y == .1);
    })
});

/**
 * 测试数据类型
 */
describe("data type method test!", function () {
    it("base data type", function () {
        expect('number').toEqual(getTypeofVal(80));
        expect('string').toEqual(getTypeofVal("this is a string"));
        expect('number').toEqual(getTypeofVal(NaN));
        expect('boolean').toEqual(getTypeofVal(true));
    })

    it("object type",function(){
        expect('[object Null]').toEqual(objType(null));
        expect('[object Array]').toEqual(objType(values));
        expect('[object Date]').toEqual(objType(now));
        expect('[object Function]').toEqual(objType(printArray));

    })
});


describe("range class test!", function () {
    it("includes method",function(){
        expect(true).toEqual(r2.includes(2))
    })
})