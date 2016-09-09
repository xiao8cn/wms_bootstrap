/**
 * Created by xiao on 16/9/9.
 */
import { Component } from "@angular/core";

let templateUrl = "app/alert/wms_alert.html";

@Component({
    templateUrl : templateUrl,
})

export class WmsAlertComponent{

    public list : Array<Object> = [{
        type : "danger",
        msg : "on my god!"
    },{
        type : "success",
        msg : "fuck",
        closable : true
    }];

    public closeAlert(i:number):void{
        this.list.splice(i,1);
    }

    public addAlert():void{
        this.list.push({
            type:"warning",
            msg : "6666",
            closable:true
        })
    }






}