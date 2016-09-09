import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { routing,appRoutingProviders } from "./wms.routing";

import { WmsComponent } from "./wms.component";
import { WmsButtonComponent } from "./button/wms.button.component";
import { WmsAlertComponent } from "./alert/wms.alert.component";
import { WmsEchartsComponent } from "./echarts/wms.echarts.component";

import { TabsModule,ButtonsModule,AlertModule } from "ng2-bootstrap/ng2-bootstrap";

@NgModule({
    imports:      [ BrowserModule,TabsModule,routing,ButtonsModule,FormsModule,AlertModule ],
    declarations: [ WmsComponent,WmsButtonComponent,WmsAlertComponent,WmsEchartsComponent ],
    bootstrap:    [ WmsComponent ],
    providers : [appRoutingProviders]
})

export class WmsModule {}