import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http"

import { routing,appRoutingProviders } from "./wms.routing";

import { WmsComponent } from "./wms.component";
import { WmsButtonComponent } from "./button/wms.button.component";
import { WmsAlertComponent } from "./alert/wms.alert.component";
import { WmsEchartsComponent } from "./echarts/wms.echarts.component";
import { EchartsComponent } from "./echarts/echarts.component";

import { EchartService } from "./echarts/echarts.service";

import { TabsModule,ButtonsModule,AlertModule } from "ng2-bootstrap/ng2-bootstrap";

@NgModule({
    imports:      [ BrowserModule,
                    TabsModule,
                    routing,
                    ButtonsModule,
                    FormsModule,
                    AlertModule,
                    HttpModule ],
    declarations: [ WmsComponent,WmsButtonComponent,WmsAlertComponent,WmsEchartsComponent,EchartsComponent ],
    bootstrap:    [ WmsComponent ],
    providers : [appRoutingProviders,EchartService],
})

export class WmsModule {}