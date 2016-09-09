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
var templateUrl = "app/echarts/wms_echarts.html";
var Echarts = require("echarts");
var WmsEchartsComponent = (function () {
    function WmsEchartsComponent() {
    }
    WmsEchartsComponent.prototype.ngOnInit = function () {
        this.chart = Echarts.init(document.getElementById("test"));
        var option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
            ]
        };
        this.chart.setOption(option);
    };
    WmsEchartsComponent = __decorate([
        core_1.Component({
            templateUrl: templateUrl,
        }), 
        __metadata('design:paramtypes', [])
    ], WmsEchartsComponent);
    return WmsEchartsComponent;
}());
exports.WmsEchartsComponent = WmsEchartsComponent;
;
//# sourceMappingURL=wms.echarts.component.js.map