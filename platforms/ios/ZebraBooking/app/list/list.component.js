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
        if (tappedItem.har_undergrupper) {
            this.routerExtensions.navigate(["/undergruppe/" + tappedItem.id]);
        }
        else {
            this.routerExtensions.navigate(["/behandlinger/" + tappedItem.id]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0QscUVBQW1FO0FBU25FO0lBSUksdUJBQW9CLGdCQUFrQyxFQUFVLGNBQThCO1FBQTFFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFIOUYsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO0lBRzhELENBQUM7SUFFbkcsc0JBQUksc0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLGVBQWU7WUFDdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUksMkNBQW1CLEdBQTFCLFVBQTJCLElBQVM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBZSxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNILENBQUM7SUEzQlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBS3dDLHlCQUFnQixFQUEwQixnQ0FBYztPQUpyRixhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE92ZXJncnVwcGUgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImdyLWxpc3RcIixcclxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3QvbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0L2xpc3QuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZ3JvY2VyeUxpc3Q6IEFycmF5PE92ZXJncnVwcGU+ID0gW107XHJcbiAgICBwcml2YXRlIF9ncnVwcGU6IE92ZXJncnVwcGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGdyb2NlcnlTZXJ2aWNlOiBHcm9jZXJ5U2VydmljZSkgeyB9XHJcblxyXG4gICAgZ2V0IHZhbGd0R3J1cHBlKCk6IE92ZXJncnVwcGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncnVwcGU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VydmljZS5sb2FkKDApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBhbnkpIHtcclxuICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xyXG4gICAgdmFyIHRhcHBlZEl0ZW0gPSB0aGlzLmdyb2NlcnlMaXN0W2l0ZW1JbmRleF0gYXMgT3ZlcmdydXBwZTtcclxuICAgIGlmICh0YXBwZWRJdGVtLmhhcl91bmRlcmdydXBwZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3VuZGVyZ3J1cHBlL1wiICsgdGFwcGVkSXRlbS5pZF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2JlaGFuZGxpbmdlci9cIiArIHRhcHBlZEl0ZW0uaWRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19