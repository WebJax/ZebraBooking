"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var grocery_service_1 = require("../shared/grocery/grocery.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(_router, groceryService) {
        this._router = _router;
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
        this.groceryService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
        });
    };
    ListComponent.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this.groceryList[itemIndex];
        if (tappedItem.har_undergrupper) {
            this._router.navigateByUrl('undergruppe/undergruppe');
        }
        else {
            this._router.navigateByUrl('');
        }
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "gr-list",
            providers: [grocery_service_1.GroceryService],
            templateUrl: "list/list.component.html",
            styleUrls: ["list/list.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router, grocery_service_1.GroceryService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFFekMscUVBQW1FO0FBU25FO0lBSUksdUJBQW9CLE9BQWUsRUFBVSxjQUE4QjtRQUF2RCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSDNFLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztJQUcyQyxDQUFDO0lBRWhGLHNCQUFJLHNDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO2FBQ3JCLFNBQVMsQ0FBQyxVQUFBLGVBQWU7WUFDdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUksMkNBQW1CLEdBQTFCLFVBQTJCLElBQVM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBZSxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQTNCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzt5Q0FLK0IsZUFBTSxFQUEwQixnQ0FBYztPQUpsRSxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE92ZXJncnVwcGUgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImdyLWxpc3RcIixcclxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3QvbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0L2xpc3QuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZ3JvY2VyeUxpc3Q6IEFycmF5PE92ZXJncnVwcGU+ID0gW107XHJcbiAgICBwcml2YXRlIF9ncnVwcGU6IE92ZXJncnVwcGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZ3JvY2VyeVNlcnZpY2U6IEdyb2NlcnlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBnZXQgdmFsZ3RHcnVwcGUoKTogT3ZlcmdydXBwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dydXBwZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdyb2NlcnlTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgcHVibGljIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogYW55KSB7XHJcbiAgICB2YXIgaXRlbUluZGV4ID0gYXJncy5pbmRleDtcclxuICAgIHZhciB0YXBwZWRJdGVtID0gdGhpcy5ncm9jZXJ5TGlzdFtpdGVtSW5kZXhdIGFzIE92ZXJncnVwcGU7XHJcbiAgICBpZiAodGFwcGVkSXRlbS5oYXJfdW5kZXJncnVwcGVyKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJ3VuZGVyZ3J1cHBlL3VuZGVyZ3J1cHBlJyk7ICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0=