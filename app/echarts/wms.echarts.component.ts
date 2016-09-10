/**
 * Created by xiao on 16/9/9.
 */

import { Component,OnInit} from "@angular/core";

import { EchartService } from "./echarts.service";
import { option } from "../entity/lineOption";
import { Echarts } from "../entity/echarts";

let templateUrl = "app/echarts/wms_echarts.html";

@Component({
    templateUrl : templateUrl,
})

export class WmsEchartsComponent implements OnInit{
    /**
     * 通过json 获取文件内容
     */
    constructor(private echartService:EchartService){}

    chart : Echarts;

    public radioModel:string = "left";

    ngOnInit(): void {
        let success = false;
        this.echartService.getLineJson().subscribe(
            res=>{
                res.data.filter(item=>item.type==="line")
                    .map(item=>{
                        option.series[0].data = item.data;
                    });
            }
        );
        this.chart = {type:"line",option:option,width:"1024px",height:"500px"};
    }

    chartTab(type:string):void{
        let { option,width,height} = this.chart;

        setTimeout(()=>{
            this.chart = {
                type:type,
                option:option,
                width:width,
                height:height
            }
        },1000);

    }

};