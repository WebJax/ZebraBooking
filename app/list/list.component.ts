import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "gr-list",
    templateUrl: "list/list.component.html",
    styleUrls: ["list/list.component.css"]
})
export class ListComponent implements OnInit {
    groceryList: Array<Object> = [];

    ngOnInit() {
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
    }
}