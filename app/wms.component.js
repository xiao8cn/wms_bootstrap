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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var WmsComponent = (function () {
    function WmsComponent(router) {
        this.router = router;
    }
    WmsComponent.prototype.buttonSelect = function (val) {
        this.router.navigate([("wms_" + val)]);
    };
    WmsComponent = __decorate([
        core_1.Component({
            selector: 'wms-app',
            template: "\n                <h2 class=\"text-center\">Angular2 & ng2-bootstrap \u5236\u4F5C <small>jiaoju.wu@qq.com</small></h2>\n                <tabset [justified]=\"true\">\n                    <tab heading=\"Button\" (select)=\"buttonSelect('button')\" routerLink></tab>\n                    <tab heading=\"Alert\" (select)=\"buttonSelect('alert')\"></tab>\n                    <tab heading=\"Echarts\" (select)=\"buttonSelect('echarts')\"></tab>\n                </tabset>\n                <router-outlet></router-outlet>\n        ",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], WmsComponent);
    return WmsComponent;
}());
exports.WmsComponent = WmsComponent;
//# sourceMappingURL=wms.component.js.map