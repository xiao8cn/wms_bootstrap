import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WmsComponent }      from './wms.component';
import { WmsButtonComponent } from "./button/wms.button.component";
import { WmsAlertComponent } from "./alert/wms.alert.component";
import { WmsEchartsComponent } from "./echarts/wms.echarts.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/wms_button',
        pathMatch: 'full'
    },
    {
        path:'wms_index',
        component : WmsComponent
    },
    {
        path:'wms_button',
        component : WmsButtonComponent
    },
    {
        path : "wms_alert",
        component : WmsAlertComponent
    },
    {
        path : "wms_echarts",
        component : WmsEchartsComponent,

    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
