"use strict";
var router_1 = require('@angular/router');
var wms_component_1 = require('./wms.component');
var wms_button_component_1 = require("./button/wms.button.component");
var wms_alert_component_1 = require("./alert/wms.alert.component");
var wms_echarts_component_1 = require("./echarts/wms.echarts.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/wms_button',
        pathMatch: 'full'
    },
    {
        path: 'wms_index',
        component: wms_component_1.WmsComponent
    },
    {
        path: 'wms_button',
        component: wms_button_component_1.WmsButtonComponent
    },
    {
        path: "wms_alert",
        component: wms_alert_component_1.WmsAlertComponent
    },
    {
        path: "wms_echarts",
        component: wms_echarts_component_1.WmsEchartsComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=wms.routing.js.map