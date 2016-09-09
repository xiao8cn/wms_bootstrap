/**
 * Created by xiao on 16/9/9.
 */
import { Injectable } from "@angular/core";

import { Http,Response } from "@angular/http";

import { Observable } from "rxjs/observable";

@Injectable()
export class EchartService{

    constructor(private http:Http){}

    private linejson = "app/echarts/line.json";

    getLineJson():Observable<JSON>{
        return this.http.get(this.linejson)
            .map(this.extractData);
    }

    private extractData(res:Response){
        console.log(res);
        alert(res);
        let body = res.json();
        return body.data || {};
    }

    private handleError(error:any){
        let errMsg = (error.message) ? error.message:
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

}