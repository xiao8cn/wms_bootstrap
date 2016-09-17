import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'wms-app',
    template: `
                <h2 class="text-center">Angular2 & ng2-bootstrap 制作 <small>jiaoju.wu@qq.com</small></h2>
                <tabset [justified]="true">
                    <tab heading="Button" (select)="buttonSelect('button')" routerLink></tab>
                    <tab heading="Alert" (select)="buttonSelect('alert')"></tab>
                    <tab heading="Echarts" (select)="buttonSelect('echarts')"></tab>
                </tabset>
                <router-outlet></router-outlet>
        `,
})

export class WmsComponent {

    constructor(private router: Router){}

    buttonSelect(val:string):void{
        this.router.navigate([`wms_${val}`]);
    }

}