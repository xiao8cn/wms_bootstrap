/**
 * Created by xiao on 16/9/9.
 */

import { Component,OnInit,OnChanges} from "@angular/core";

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

    public charts : Echarts;

    ngOnInit(): void {
        this.echartService.getLineJson().subscribe(
            res=>{
                res.data.filter(item=>item.type==="line")
                    .map(item=>{
                        option.series[0].data = item.data;
                        this.charts = {type:"line",option:option,width:"1024px",height:"500px"};
                        console.log(this.charts);
                        this.chartTab("line");
                    });
            }
        )
    }

    public radioModel:string = "left";

    chartTab(type:string):void{
        this.charts.type = type;
    }

};