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
/**
 * Created by xiao on 16/9/9.
 */
var core_1 = require("@angular/core");
var echarts_1 = require("../entity/echarts");
var templateUrl = "app/echarts/echarts.html";
var echarts = require("echarts");
var EchartsComponent = (function () {
    function EchartsComponent() {
    }
    EchartsComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes['chart']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', echarts_1.Echarts)
    ], EchartsComponent.prototype, "chart", void 0);
    EchartsComponent = __decorate([
        core_1.Component({
            selector: 'wms-chart',
            templateUrl: templateUrl
        }), 
        __metadata('design:paramtypes', [])
    ], EchartsComponent);
    return EchartsComponent;
}());
exports.EchartsComponent = EchartsComponent;
//# sourceMappingURL=echarts.component.js.map