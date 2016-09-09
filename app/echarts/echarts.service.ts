/**
 * Created by xiao on 16/9/9.
 */
import { Injectable } from "@angular/core";

import { Http,Response } from "@angular/http";

import "rxjs/operator/toPromise";


@Injectable()
export class EchartService{

    constructor(private http:Http){}

    private linejson = "app/echarts/line.json";

    getLineJson():Promise<line[]>{
        return this.http.get(this.linejson)
            .toPromise()
            .then(res=>console.log(res));
    }

    private extractData(res:Response){
        console.log(res);
        alert(res);
        let body = res.json();
        return body.data || {};
    }

}

class line {
    data:Array;
}