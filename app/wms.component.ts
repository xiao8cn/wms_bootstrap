import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'wms-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
                <h1>Wms_test</h1>
                <tabset [justified]="true">
                    <tab heading="Button" (select)="buttonSelect('button')"></tab>
                    <tab heading="Alert" (select)="buttonSelect('alert')"></tab>
                    <tab heading="Echarts" (select)="buttonSelect('echarts')"></tab>
                </tabset>
                <router-outlet></router-outlet>
        `
})

export class WmsComponent {

    constructor(private router: Router){}

    buttonSelect(val:string):void{
        this.router.navigate([`wms_${val}`]);
    }


}