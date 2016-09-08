import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { routing,appRoutingProviders } from "./wms.routing";

import { WmsComponent } from "./wms.component";
import { WmsButtonComponent } from "./button/wms.button.component";

import { TabsModule,ButtonsModule } from "ng2-bootstrap/ng2-bootstrap";

@NgModule({
    imports:      [ BrowserModule,TabsModule,routing,ButtonsModule,FormsModule ],
    declarations: [ WmsComponent,WmsButtonComponent ],
    bootstrap:    [ WmsComponent ],
    providers : [appRoutingProviders]
})

export class WmsModule {}