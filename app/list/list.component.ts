import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
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

    constructor(private routerExtensions: RouterExtensions, private groceryService: GroceryService) { }

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
    if (tappedItem.har_undergrupper != "false") {
        this.routerExtensions.navigate(["/undergruppe/" + tappedItem.id]);
    } else {
        this.routerExtensions.navigate(["/behandlingComponent/" + tappedItem.id]);
    }
  }

}