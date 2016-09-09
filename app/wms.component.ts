import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'wms-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
                <h1>Wms_test</h1>
                <tabset [justified]="true">
                    <tab heading="Button" (select)="buttonSelect()"></tab>
                    <tab heading="Alert">Short Labeled Justified content</tab>
                    <tab heading="Long Justified">Long Labeled Justified content</tab>
                </tabset>
                <router-outlet></router-outlet>
        `
})

export class WmsComponent {

    constructor(private router: Router){}

    buttonSelect():void{
        console.log(this);
        //this.router.navigate(['wms_button']);
    }


}