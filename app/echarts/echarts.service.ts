/**
 * Created by xiao on 16/9/9.
 */
import { Injectable } from "@angular/core";

import { Http,Response,Headers,RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";

import { jsonData } from "../entity/jsonData";


@Injectable()
export class EchartService{

    constructor(private http:Http){}

    private linejson = "app/echarts/line.json";
    private mapjson = "app/map/china.json";
    private piejson = "app/echarts/pie.json";

    getLineJson():Observable<jsonData>{
        return this.http.get(this.linejson)
            .map(this.extractData);
    }

    getMapJson():Observable<jsonData>{
        return this.http.get(this.mapjson)
            .map(this.extractData);
    }

    getPieJson():Observable<jsonData>{
        return this.http.get(this.piejson)
            .map(this.extractData);
    }

    private extractData(res:Response){
        let body = res.json();
        return body || {};
    }

    private handleError(error:any){
        let errmsg = (error.message) ? error.message :
            error.status ? `${error.message} - ${error.statusText}` : "server error";
        return Observable.throw(errmsg);
    }

}

