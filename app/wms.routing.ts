import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WmsComponent }      from './wms.component';
import { WmsButtonComponent } from "./button/wms.button.component";

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
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);