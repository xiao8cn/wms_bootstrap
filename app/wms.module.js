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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var wms_routing_1 = require("./wms.routing");
var wms_component_1 = require("./wms.component");
var wms_button_component_1 = require("./button/wms.button.component");
var wms_alert_component_1 = require("./alert/wms.alert.component");
var wms_echarts_component_1 = require("./echarts/wms.echarts.component");
var echarts_component_1 = require("./echarts/echarts.component");
var echarts_service_1 = require("./echarts/echarts.service");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var WmsModule = (function () {
    function WmsModule() {
    }
    WmsModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                ng2_bootstrap_1.TabsModule,
                wms_routing_1.routing,
                ng2_bootstrap_1.ButtonsModule,
                forms_1.FormsModule,
                ng2_bootstrap_1.AlertModule,
                http_1.HttpModule],
            declarations: [wms_component_1.WmsComponent, wms_button_component_1.WmsButtonComponent, wms_alert_component_1.WmsAlertComponent, wms_echarts_component_1.WmsEchartsComponent, echarts_component_1.EchartsComponent],
            bootstrap: [wms_component_1.WmsComponent],
            providers: [wms_routing_1.appRoutingProviders, echarts_service_1.EchartService]
        }), 
        __metadata('design:paramtypes', [])
    ], WmsModule);
    return WmsModule;
}());
exports.WmsModule = WmsModule;
//# sourceMappingURL=wms.module.js.map