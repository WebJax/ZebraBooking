"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var grocery_service_1 = require("../shared/grocery/grocery.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(routerExtensions, groceryService) {
        this.routerExtensions = routerExtensions;
        this.groceryService = groceryService;
        this.groceryList = [];
    }
    Object.defineProperty(ListComponent.prototype, "valgtGruppe", {
        get: function () {
            return this._gruppe;
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryService.load(0)
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
        });
    };
    ListComponent.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this.groceryList[itemIndex];
        if (tappedItem.har_undergrupper != "false") {
            this.routerExtensions.navigate(["/undergruppe/" + tappedItem.id]);
        }
        else {
            this.routerExtensions.navigate(["/behandlingComponent/" + tappedItem.id]);
        }
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "gr-list",
            providers: [grocery_service_1.GroceryService],
            templateUrl: "list/list.component.html",
            styleUrls: ["list/list.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, grocery_service_1.GroceryService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0QscUVBQW1FO0FBU25FO0lBSUksdUJBQW9CLGdCQUFrQyxFQUFVLGNBQThCO1FBQTFFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFIOUYsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO0lBRzhELENBQUM7SUFFbkcsc0JBQUksc0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLGVBQWU7WUFDdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUksMkNBQW1CLEdBQTFCLFVBQTJCLElBQVM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBZSxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDSCxDQUFDO0lBM0JVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQUt3Qyx5QkFBZ0IsRUFBMEIsZ0NBQWM7T0FKckYsYUFBYSxDQTZCekI7SUFBRCxvQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPdmVyZ3J1cHBlIH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnkubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJnci1saXN0XCIsXHJcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5U2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0L2xpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wibGlzdC9saXN0LmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGdyb2NlcnlMaXN0OiBBcnJheTxPdmVyZ3J1cHBlPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfZ3J1cHBlOiBPdmVyZ3J1cHBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBncm9jZXJ5U2VydmljZTogR3JvY2VyeVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIGdldCB2YWxndEdydXBwZSgpOiBPdmVyZ3J1cHBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3J1cHBlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeVNlcnZpY2UubG9hZCgwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgcHVibGljIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogYW55KSB7XHJcbiAgICB2YXIgaXRlbUluZGV4ID0gYXJncy5pbmRleDtcclxuICAgIHZhciB0YXBwZWRJdGVtID0gdGhpcy5ncm9jZXJ5TGlzdFtpdGVtSW5kZXhdIGFzIE92ZXJncnVwcGU7XHJcbiAgICBpZiAodGFwcGVkSXRlbS5oYXJfdW5kZXJncnVwcGVyICE9IFwiZmFsc2VcIikge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdW5kZXJncnVwcGUvXCIgKyB0YXBwZWRJdGVtLmlkXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYmVoYW5kbGluZ0NvbXBvbmVudC9cIiArIHRhcHBlZEl0ZW0uaWRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19