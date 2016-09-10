/**
 * Created by xiao on 16/9/9.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var echarts_service_1 = require("./echarts.service");
var lineOption_1 = require("../entity/lineOption");
var templateUrl = "app/echarts/wms_echarts.html";
var WmsEchartsComponent = (function () {
    /**
     * 通过json 获取文件内容
     */
    function WmsEchartsComponent(echartService) {
        this.echartService = echartService;
        this.radioModel = "left";
    }
    WmsEchartsComponent.prototype.ngOnInit = function () {
        var success = false;
        this.echartService.getLineJson().subscribe(function (res) {
            res.data.filter(function (item) { return item.type === "line"; })
                .map(function (item) {
                lineOption_1.option.series[0].data = item.data;
            });
        });
        this.chart = { type: "line", option: lineOption_1.option, width: "1024px", height: "500px" };
    };
    WmsEchartsComponent.prototype.chartTab = function (type) {
        var _this = this;
        var _a = this.chart, option = _a.option, width = _a.width, height = _a.height;
        setTimeout(function () {
            _this.chart = {
                type: type,
                option: option,
                width: width,
                height: height
            };
        }, 1000);
    };
    WmsEchartsComponent = __decorate([
        core_1.Component({
            templateUrl: templateUrl,
        }), 
        __metadata('design:paramtypes', [echarts_service_1.EchartService])
    ], WmsEchartsComponent);
    return WmsEchartsComponent;
}());
exports.WmsEchartsComponent = WmsEchartsComponent;
;
//# sourceMappingURL=wms.echarts.component.js.map