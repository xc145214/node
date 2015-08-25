/**
 * Created by Administrator on 2015/4/15.
 * unit conversion
 */

/**
 * tab 页切换
 */
app.controller("TabController", function () {
    this.tab = 1;

    this.isSet = function (checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function (activeTab) {
        this.tab = activeTab;
    };
});

/***
 * 长度单位转换
 */
app.directive('longthForm',function(){
    return {
        restrict:'E',
        templateUrl:'/partials/longth-form.html',
        controller: function(){
            this.length = 1;
            this.unit = '公里';
            this.units = ['公里', '米', '厘米','英里','海里','码','英尺','英寸'];
            this.rates = {
                公里: 1,
                米: 1000,
                厘米: 100000,
                英里:0.612382,
                海里:0.539611,
                码:1093.63,
                英尺:3280.89,
                英寸:39370.7
            };

            this.total = function total(outUnit) {
                return this.convertUnit(this.length, this.unit, outUnit);
            };
            this.convertUnit = function convertUnit(amount, inUnit, outUnit) {
                return amount * this.rates[outUnit] / this.rates[inUnit];
            };
        },
        controllerAs:'invoice'
    }
});

/**
 * 重量单位转换
 */
app.directive('weigthForm',function(){
    return {
        restrict:'E',
        templateUrl:'/partials/weigth-form.html',
        controller: function InvoiceController() {
            this.length = 1;
            this.unit = '吨';
            this.units = ['吨', '千克', '克','磅','盎司','克拉'];
            this.rates = {
                吨: 1,
                千克: 1000,
                克: 1000000,
                磅:2204.6226218,
                盎司:35273.9619496 ,
                克拉:5000000
            };

            this.total = function total(outUnit) {
                return this.convertUnit(this.length, this.unit, outUnit);
            };
            this.convertUnit = function convertUnit(amount, inUnit, outUnit) {
                return amount * this.rates[outUnit] / this.rates[inUnit];
            };
        },
        controllerAs:'invoice'
    }
});

/**
 * 面积单位转换
 */
app.directive('areaForm',function(){
    return {
        restrict:'E',
        templateUrl:'/partials/area-form.html',
        controller: function InvoiceController() {
            this.length = 1;
            this.unit = '平方公里';
            this.units = ['平方公里', '公亩', '平方米','平方英尺','平方英寸','平方英里','平方码','英亩'];
            this.rates = {
                平方公里: 1,
                公亩: 10000,
                平方米: 1000000,
                平方英尺:10763910.41671,
                平方英寸:1550003100.006,
                平方英里:0.3861022,
                平方码:1195990.046301,
                英亩:247.1053815
            };

            this.total = function total(outUnit) {
                return this.convertUnit(this.length, this.unit, outUnit);
            };
            this.convertUnit = function convertUnit(amount, inUnit, outUnit) {
                return amount * this.rates[outUnit] / this.rates[inUnit];
            };
        },
        controllerAs:'invoice'
    }
});

/***
 * 体积单位转换
 */
app.directive('volumeForm',function(){
    return {
        restrict:'E',
        templateUrl:'/partials/volume-form.html',
        controller: function InvoiceController() {
            this.length = 1;
            this.unit = '吨';
            this.units = ['吨', '千克', '克','磅','盎司','克拉'];
            this.rates = {
                吨: 1,
                千克: 1000,
                克: 1000000,
                磅:2204.6226218,
                盎司:35273.9619496 ,
                克拉:5000000
            };

            this.total = function total(outUnit) {
                return this.convertUnit(this.length, this.unit, outUnit);
            };
            this.convertUnit = function convertUnit(amount, inUnit, outUnit) {
                return amount * this.rates[outUnit] / this.rates[inUnit];
            };
        },
        controllerAs:'invoice'
    }
});