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
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
var EchartService = (function () {
    function EchartService(http) {
        this.http = http;
        this.linejson = "app/echarts/line.json";
    }
    EchartService.prototype.getLineJson = function () {
        return this.http.get(this.linejson)
            .map(this.extractData);
    };
    EchartService.prototype.extractData = function (res) {
        console.log(res);
        alert(res);
        var body = res.json();
        return body.data || {};
    };
    EchartService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg);
        return observable_1.Observable.throw(errMsg);
    };
    EchartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EchartService);
    return EchartService;
}());
exports.EchartService = EchartService;
//# sourceMappingURL=echarts.service.js.map