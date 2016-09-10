/**
 * Created by xiao on 16/9/9.
 */
import { Component,Input,OnChanges,SimpleChanges,OnInit } from "@angular/core";

import { Echarts } from "../entity/echarts";

let templateUrl = "app/echarts/echarts.html";

var echarts = require("echarts");

@Component({
    selector : 'wms-chart',
    templateUrl : templateUrl
})

export class EchartsComponent implements OnChanges,OnInit{
    ngOnInit(): void {
        console.log(this.chart.option.series[0].data);
    }
    @Input() chart:Echarts;

    myChart:any;

    ngOnChanges(changes: SimpleChanges): void {
        console.log("change");
        this.chart = changes['chart'].currentValue;
        this.myChart = echarts.init(document.getElementById("test"));
        console.log(this.chart.option);
        this.myChart.setOption(this.chart.option);
    }



}