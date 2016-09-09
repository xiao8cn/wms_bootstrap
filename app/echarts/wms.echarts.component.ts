/**
 * Created by xiao on 16/9/9.
 */

import { Component,OnInit } from "@angular/core";

import { EchartService } from "./echarts.service";
import { option } from "../entity/lineOption";

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

        this.chart = Echarts.init(document.getElementById("test"));

        this.echartService.getLineJson().subscribe(
            res=>{
                res.data.filter(item=>item.type==="line")
                    .map(item=>{
                        option.series[0].data = item.data;
                        this.chart.setOption(option);
                    });
            }
        )

    }

};