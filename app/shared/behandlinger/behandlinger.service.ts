import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Behandling } from "./behandlinger.model";

@Injectable()
export class BehandlingService {
    behandlingBaseUrl = "https://zebrafinken.dk/testsite/wp-json/jw_salonbooking/v1/behandlingsliste/";
    gruppe: number;

    constructor(private http: Http) { }

    load(gruppe) {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        //let params = new URLSearchParams();
        //params.append("sort", "{\"_kmd.lmt\": 1}");
        return this.http.get(this.behandlingBaseUrl + gruppe, {
            headers: this.getCommonHeaders(),
            //params: params
        }).pipe(
            map(res => res.json()),
            map(data => {
                let behandlingsListe = [];
                data.forEach((behandling) => {
                    behandlingsListe.push(new Behandling(behandling.id, behandling.titel, behandling.pris, behandling.varighed, behandling.beskrivelse));
                });
                return behandlingsListe;
            }),
            catchError(this.handleErrors)
        );
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