/**
 * Created by xiao on 16/9/9.
 */
import { Component,Input,OnChanges,SimpleChanges } from "@angular/core";

import {Echarts} from "../entity/echarts";

let templateUrl = "app/echarts/echarts.html";

let echarts = require("echarts");

@Component({
    selector : 'wms-chart',
    templateUrl : templateUrl
})

export class EchartsComponent implements OnChanges{
    @Input()
    chart:Echarts;

    myChart:any;

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes['chart']);
    }
}