import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Behandling } from "../shared/behandlinger/behandlinger.model";
import { BehandlingService } from "../shared/behandlinger/behandlinger.service";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";


@Component({
    selector: "gr-behandling",
    providers: [BehandlingService],
    templateUrl: "behandlinger/behandlinger.component.html",
    styleUrls: ["behandlinger/behandlinger.component.css"],
})
export class behandlingComponent implements OnInit {
    behandlingsListe: Array<Behandling> = [];
    id: number;

    constructor(private routerExtensions: RouterExtensions, private behandlingService: BehandlingService, private pageRoute: PageRoute) { 
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
            ).forEach((params) => { this.id = +params["id"]; });
    }

    ngOnInit() {
        this.behandlingService.load(this.id)
            .subscribe(hentedeBehandlinger => {
                hentedeBehandlinger.forEach((behandlingsObjekt) => {
                    this.behandlingsListe.unshift(behandlingsObjekt);
                });
            });
    }

    public onNavigationItemTap(args: any) {
        var itemIndex = args.index;
        var tappedItem = this.behandlingsListe[itemIndex] as Behandling;
        this.routerExtensions.navigate(["/kalender/" + tappedItem.id]);
    }
}