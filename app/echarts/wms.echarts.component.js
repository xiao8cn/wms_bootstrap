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
var mapOption_1 = require("../entity/mapOption");
var pieOption_1 = require("../entity/pieOption");
var templateUrl = "app/echarts/wms_echarts.html";
var echarts = require("echarts");
var WmsEchartsComponent = (function () {
    /**
     * 通过json 获取文件内容
     */
    function WmsEchartsComponent(echartService) {
        this.echartService = echartService;
        this.radioModel = "left";
    }
    WmsEchartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myChart = echarts.init(document.getElementById("test"));
        this.echartService.getLineJson().subscribe(function (res) {
            res.data.filter(function (item) { return item.type === "line"; })
                .map(function (item) {
                lineOption_1.lineOption.series[0].data = item.data;
                _this.chart = { type: "line", option: lineOption_1.lineOption, width: "1024px", height: "500px" };
                _this.myChart.setOption(lineOption_1.lineOption);
            });
        });
    };
    WmsEchartsComponent.prototype.chartTab = function (type) {
        var _this = this;
        var _a = this.chart, option = _a.option, width = _a.width, height = _a.height;
        this.chart = {
            type: type,
            option: option,
            width: width,
            height: height
        };
        switch (this.chart.type) {
            case "line":
                this.chart.option = lineOption_1.lineOption;
                this.chart.option.series[0].type = "line";
                this.chart.option.xAxis.boundaryGap = false;
                this.myChart.setOption(this.chart.option, true);
                break;
            case "bar":
                this.chart.option = lineOption_1.lineOption;
                this.chart.option.series[0].type = "bar";
                this.chart.option.xAxis.boundaryGap = true;
                this.myChart.setOption(this.chart.option, true);
                break;
            case "pie":
                this.echartService.getPieJson().subscribe(function (res) {
                    _this.chart.option = pieOption_1.pieOption;
                    _this.chart.option.series[0].data = res.data;
                    _this.myChart.setOption(_this.chart.option, true);
                });
                break;
            case "map":
                /**
                 * 地图echarts
                 */
                this.echartService.getMapJson().subscribe(function (res) {
                    echarts.registerMap('china', res);
                    _this.myChart.setOption(mapOption_1.mapOption, true);
                });
                break;
            default: alert("未知图表");
        }
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