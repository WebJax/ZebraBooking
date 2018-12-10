import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Undergruppe } from "../shared/grocery/grocery.model";
import { GroceryService } from "../shared/grocery/grocery.service";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";


@Component({
    selector: "gr-under",
    providers: [GroceryService],
    templateUrl: "undergruppe/undergruppe.html",
    styleUrls: ["undergruppe/undergruppe.css"],
})
export class undergruppeComponent implements OnInit {
    id: number;
    groceryList: Array<Undergruppe> = [];
    private _gruppe: Undergruppe;

    constructor(private _router: Router, private groceryService: GroceryService, private pageRoute: PageRoute) { 
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute.pipe(
        switchMap(activatedRoute => activatedRoute.params)
      ).forEach((params) => { this.id = +params["id"]; });
    }
    

    get valgtGruppe(): Undergruppe {
        return this._gruppe;
    }

    ngOnInit() {
        this.groceryService.load(this.id)
            .subscribe(loadedGroceries => {
                loadedGroceries.forEach((groceryObject) => {
                    this.groceryList.unshift(groceryObject);
                });
            });
    }

  public onNavigationItemTap(args: any) {
    var itemIndex = args.index;
    var tappedItem = this.groceryList[itemIndex] as Undergruppe;
    this._router.navigateByUrl('/behandlingComponent/' + tappedItem.id);  
  }

}