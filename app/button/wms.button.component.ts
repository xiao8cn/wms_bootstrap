import { Component } from '@angular/core';

@Component({
    selector: 'wms-app',
    templateUrl : "app/button/wms_button.html"
})

export class WmsButtonComponent {
    public singleModel:string = '1';
    public radioModel:string = 'Middle';
    public checkModel:any = {left: false, middle: true, right: false};
}