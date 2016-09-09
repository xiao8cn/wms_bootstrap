/**
 * Created by xiao on 16/9/9.
 */

import { Component,OnInit } from "@angular/core";

import { EchartService } from "./echarts.service";

let templateUrl = "app/echarts/wms_echarts.html";

var Echarts = require("echarts");

@Component({
    templateUrl:templateUrl,
})

export class WmsEchartsComponent implements OnInit{

    /**
     * 通过json 获取文件内容
     */
    constructor(private echartService:EchartService){}


    public chart : any;

    ngOnInit(): void {

        this.echartService.getLineJson();

        this.chart = Echarts.init(document.getElementById("test"));

        let option = {

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },

            ]
        };

        this.chart.setOption(option);

    }

};