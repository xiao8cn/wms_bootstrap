/**
 * Created by xiao on 16/9/9.
 */
import { Component,Input } from "@angular/core";

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

    /*ngOnChanges(changes: SimpleChanges): void {
        console.log("change");
        this.chart = changes['chart'].currentValue;
        this.myChart = echarts.init(document.getElementById("test"));
        console.log(this.chart.option);
        this.myChart.setOption(this.chart.option);
    }*/



}