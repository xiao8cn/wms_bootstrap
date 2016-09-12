/**
 * Created by xiao on 16/9/9.
 */

import { Component,OnInit} from "@angular/core";

import { EchartService } from "./echarts.service";
import { lineOption } from "../entity/lineOption";
import { mapOption } from "../entity/mapOption";
import { pieOption } from "../entity/pieOption";
import { Echarts } from "../entity/echarts";

let templateUrl = "app/echarts/wms_echarts.html";

var echarts = require("echarts");

@Component({
    templateUrl : templateUrl,
})

export class WmsEchartsComponent implements OnInit{
    /**
     * 通过json 获取文件内容
     */
    constructor(private echartService:EchartService){}

    chart : Echarts;

    myChart : any;

    public radioModel:string = "left";

    ngOnInit(): void {
        let success = false;
        this.myChart = echarts.init(document.getElementById("test"));
        this.echartService.getLineJson().subscribe(
            res=>{
                res.data.filter(item=>item.type==="line")
                    .map(item=>{
                        lineOption.series[0].data = item.data;
                        this.chart = {type:"line",option:lineOption,width:"1024px",height:"500px"};
                        this.myChart.setOption(lineOption);
                    });
                }
        )
    }

    chartTab(type:string):void{
        let { option,width,height} = this.chart;

        this.chart = {
            type:type,
            option:option,
            width:width,
            height:height
        }

        switch (this.chart.type){
            case "line" :
                this.chart.option = lineOption;
                this.chart.option.series[0].type = "line";
                this.chart.option.xAxis.boundaryGap = false;
                this.myChart.setOption(this.chart.option,true);
                break;
            case "bar" :
                this.chart.option = lineOption;
                this.chart.option.series[0].type = "bar";
                this.chart.option.xAxis.boundaryGap = true;
                this.myChart.setOption(this.chart.option,true);
                break;
            case "pie" :
                this.echartService.getPieJson().subscribe(res=>{
                    this.chart.option = pieOption;
                    this.chart.option.series[0].data = res.data;
                    this.myChart.setOption(this.chart.option,true);
                })
                break;
            case "map":
                /**
                 * 地图echarts
                 */
                this.echartService.getMapJson().subscribe(res=>{
                    echarts.registerMap('china',res);
                    this.myChart.setOption(mapOption,true);
                })
                break;
            default : alert("未知图表");
        }

    }

};