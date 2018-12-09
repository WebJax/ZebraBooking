"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var grocery_service_1 = require("../shared/grocery/grocery.service");
var behandlingComponent = /** @class */ (function () {
    function behandlingComponent(routerExtensions, groceryService) {
        this.routerExtensions = routerExtensions;
        this.groceryService = groceryService;
        this.groceryList = [];
    }
    Object.defineProperty(behandlingComponent.prototype, "valgtGruppe", {
        get: function () {
            return this._gruppe;
        },
        enumerable: true,
        configurable: true
    });
    behandlingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryService.load(0)
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
        });
    };
    behandlingComponent.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this.groceryList[itemIndex];
        this.routerExtensions.navigate(["/kalender/" + tappedItem.id]);
    };
    behandlingComponent = __decorate([
        core_1.Component({
            selector: "gr-behandling",
            providers: [grocery_service_1.GroceryService],
            templateUrl: "behandlinger/behandlinger.component.html",
            styleUrls: ["behandlinger/behandlinger.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, grocery_service_1.GroceryService])
    ], behandlingComponent);
    return behandlingComponent;
}());
exports.behandlingComponent = behandlingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVoYW5kbGluZ0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJlaGFuZGxpbmdDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBRS9ELHFFQUFtRTtBQU9uRTtJQUdJLDZCQUFvQixnQkFBa0MsRUFBVSxjQUE4QjtRQUExRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRjlGLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztJQUU4RCxDQUFDO0lBQ25HLHNCQUFJLDRDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0QixTQUFTLENBQUMsVUFBQSxlQUFlO1lBQ3RCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNsQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNNLGlEQUFtQixHQUExQixVQUEyQixJQUFTO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQWUsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFuQlEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSwwQ0FBMEM7WUFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7U0FDekQsQ0FBQzt5Q0FJd0MseUJBQWdCLEVBQTBCLGdDQUFjO09BSHJGLG1CQUFtQixDQW9CL0I7SUFBRCwwQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPdmVyZ3J1cHBlIH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnkubW9kZWxcIjtcbmltcG9ydCB7IEdyb2NlcnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2Nlcnkuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZ3ItYmVoYW5kbGluZ1wiLFxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJiZWhhbmRsaW5nZXIvYmVoYW5kbGluZ2VyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJiZWhhbmRsaW5nZXIvYmVoYW5kbGluZ2VyLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIGJlaGFuZGxpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGdyb2NlcnlMaXN0OiBBcnJheTxPdmVyZ3J1cHBlPiA9IFtdO1xuICAgIHByaXZhdGUgX2dydXBwZTogT3ZlcmdydXBwZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgZ3JvY2VyeVNlcnZpY2U6IEdyb2NlcnlTZXJ2aWNlKSB7IH1cbiAgICBnZXQgdmFsZ3RHcnVwcGUoKTogT3ZlcmdydXBwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncnVwcGU7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdyb2NlcnlTZXJ2aWNlLmxvYWQoMClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogYW55KSB7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICB2YXIgdGFwcGVkSXRlbSA9IHRoaXMuZ3JvY2VyeUxpc3RbaXRlbUluZGV4XSBhcyBPdmVyZ3J1cHBlO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2thbGVuZGVyL1wiICsgdGFwcGVkSXRlbS5pZF0pO1xuICAgIH1cbn0iXX0=