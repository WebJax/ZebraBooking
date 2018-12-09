import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Overgruppe, Undergruppe } from "./grocery.model";

@Injectable()
export class GroceryService {
    overGruppeBaseUrl = "https://zebrafinken.dk/testsite/wp-json/jw_salonbooking/v1/behandlingsovergruppe";
    underGruppeBaseUrl = "https://zebrafinken.dk/testsite/wp-json/jw_salonbooking/v1/behandlingsundergruppe";
    gruppe: number;

    constructor(private http: Http) { }

    load(gruppe) {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        //let params = new URLSearchParams();
        //params.append("sort", "{\"_kmd.lmt\": 1}");
        if (gruppe === 0) {
            return this.http.get(this.overGruppeBaseUrl, {
                headers: this.getCommonHeaders(),
                //params: params
            }).pipe(
                map(res => res.json()),
                map(data => {
                    let groceryList = [];
                    data.forEach((gruppe) => {
                        groceryList.push(new Overgruppe(gruppe.id, gruppe.titel, gruppe.beskrivelse, gruppe.billede, gruppe.undergrupper));
                    });
                    return groceryList;
                }),
                catchError(this.handleErrors)
            );
        } else {
            return this.http.get(this.underGruppeBaseUrl + '/' + gruppe, {
                headers: this.getCommonHeaders(),
                //params: params
            }).pipe(
                map(res => res.json()),
                map(data => {
                    let groceryList = [];
                    data.forEach((gruppe) => {
                        groceryList.push(new Undergruppe(gruppe.id, gruppe.titel));
                    });
                    return groceryList;
                }),
                catchError(this.handleErrors)
            );
        }
    }

    getCommonHeaders() {
        let headers = new Headers();
        //headers.append("Content-Type", "application/json");
        //headers.append("Authorization", "Kinvey " + Config.token);
        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}