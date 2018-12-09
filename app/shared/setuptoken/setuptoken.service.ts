import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Token } from "./setuptoken.model";
import { Config } from "../config";

@Injectable()
export class SetupToken {
    constructor(private http: Http) { }

    getToken() {
        return this.http.post(
            Config.tokenUrl,
            {},
            { headers: this.getCommonHeaders() }
        ).pipe(
            map(response => response.json()),
            tap(data => {
                Config.jwttoken = data.token
            }),
            catchError(this.handleErrors)
        );
    }

    getCommonHeaders() {
        let headers = new Headers();
        //headers.append("Content-Type", "application/json");        
        //headers.append("Authorization", Config.authHeader);
        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}