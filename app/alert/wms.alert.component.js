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
var templateUrl = "app/alert/wms_alert.html";
var WmsAlertComponent = (function () {
    function WmsAlertComponent() {
        this.list = [{
                type: "danger",
                msg: "on my god!"
            }, {
                type: "success",
                msg: "fuck",
                closable: true
            }];
    }
    WmsAlertComponent.prototype.closeAlert = function (i) {
        this.list.splice(i, 1);
    };
    WmsAlertComponent.prototype.addAlert = function () {
        this.list.push({
            type: "warning",
            msg: "6666",
            closable: true
        });
    };
    WmsAlertComponent = __decorate([
        core_1.Component({
            templateUrl: templateUrl,
        }), 
        __metadata('design:paramtypes', [])
    ], WmsAlertComponent);
    return WmsAlertComponent;
}());
exports.WmsAlertComponent = WmsAlertComponent;
//# sourceMappingURL=wms.alert.component.js.map