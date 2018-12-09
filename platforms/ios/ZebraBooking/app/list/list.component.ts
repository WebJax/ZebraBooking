import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Overgruppe } from "../shared/grocery/grocery.model";
import { GroceryService } from "../shared/grocery/grocery.service";


@Component({
    selector: "gr-list",
    providers: [GroceryService],
    templateUrl: "list/list.component.html",
    styleUrls: ["list/list.component.css"],
})
export class ListComponent implements OnInit {
    groceryList: Array<Overgruppe> = [];
    private _gruppe: Overgruppe;

    constructor(private _router: Router, private groceryService: GroceryService) { }

    get valgtGruppe(): Overgruppe {
        return this._gruppe;
    }

    ngOnInit() {
        this.groceryService.load(0)
            .subscribe(loadedGroceries => {
                loadedGroceries.forEach((groceryObject) => {
                    this.groceryList.unshift(groceryObject);
                });
            });
    }

  public onNavigationItemTap(args: any) {
    var itemIndex = args.index;
    var tappedItem = this.groceryList[itemIndex] as Overgruppe;
    if (tappedItem.har_undergrupper) {
        this._router.navigateByUrl('undergruppe/undergruppe/' + tappedItem.id);
    } else {
        this._router.navigateByUrl('behandlinger/behandlinger' + tappedItem.id);
    }
  }

}