"use strict";
var router_1 = require('@angular/router');
var wms_component_1 = require('./wms.component');
var wms_button_component_1 = require("./button/wms.button.component");
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
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=wms.routing.js.map