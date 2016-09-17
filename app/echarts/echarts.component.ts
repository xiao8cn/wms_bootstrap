/**
 * Created by xiao on 16/9/9.
 */
import { Component,Input,SimpleChanges } from "@angular/core";

import { Echarts } from "../entity/echarts";

let templateUrl = "app/echarts/echarts.html";

var echarts = require("echarts");

@Component({
    selector : 'wms-chart',
    templateUrl : templateUrl
})

export class EchartsComponent{
    @Input() chart:Echarts;
    myChart:any;

    ngOnChanges(changes: SimpleChanges): void {
        this.chart = changes['chart'].currentValue;
        if(this.chart){
            this.myChart = echarts.init(document.getElementById("c1"));
            console.log(this.chart.option);
            this.myChart.setOption(this.chart.option);
        }
    }



}