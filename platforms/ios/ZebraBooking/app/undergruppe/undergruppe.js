"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var grocery_service_1 = require("../shared/grocery/grocery.service");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var undergruppeComponent = /** @class */ (function () {
    function undergruppeComponent(_router, groceryService, pageRoute) {
        var _this = this;
        this._router = _router;
        this.groceryService = groceryService;
        this.pageRoute = pageRoute;
        this.groceryList = [];
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) { _this.id = +params["id"]; });
    }
    Object.defineProperty(undergruppeComponent.prototype, "valgtGruppe", {
        get: function () {
            return this._gruppe;
        },
        enumerable: true,
        configurable: true
    });
    undergruppeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryService.load(this.id)
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
        });
    };
    undergruppeComponent.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this.groceryList[itemIndex];
        this._router.navigateByUrl('undergruppe/undergruppe');
    };
    undergruppeComponent = __decorate([
        core_1.Component({
            selector: "gr-under",
            providers: [grocery_service_1.GroceryService],
            templateUrl: "undergruppe/undergruppe.html",
            styleUrls: ["undergruppe/undergruppe.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router, grocery_service_1.GroceryService, router_2.PageRoute])
    ], undergruppeComponent);
    return undergruppeComponent;
}());
exports.undergruppeComponent = undergruppeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZXJncnVwcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmRlcmdydXBwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFFekMscUVBQW1FO0FBQ25FLHNEQUF3RDtBQUN4RCw0Q0FBMkM7QUFTM0M7SUFLSSw4QkFBb0IsT0FBZSxFQUFVLGNBQThCLEVBQVUsU0FBb0I7UUFBekcsaUJBS0M7UUFMbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIekcsZ0JBQVcsR0FBdUIsRUFBRSxDQUFDO1FBSWpDLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2xDLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ25ELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0Qsc0JBQUksNkNBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM1QixTQUFTLENBQUMsVUFBQSxlQUFlO1lBQ3RCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNsQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVJLGtEQUFtQixHQUExQixVQUEyQixJQUFTO1FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQWdCLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBOUJVLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBTStCLGVBQU0sRUFBMEIsZ0NBQWMsRUFBcUIsa0JBQVM7T0FMaEcsb0JBQW9CLENBZ0NoQztJQUFELDJCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVuZGVyZ3J1cHBlIH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnkubW9kZWxcIjtcbmltcG9ydCB7IEdyb2NlcnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2Nlcnkuc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZ3ItdW5kZXJcIixcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5U2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwidW5kZXJncnVwcGUvdW5kZXJncnVwcGUuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1widW5kZXJncnVwcGUvdW5kZXJncnVwcGUuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyB1bmRlcmdydXBwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBncm9jZXJ5TGlzdDogQXJyYXk8VW5kZXJncnVwcGU+ID0gW107XG4gICAgcHJpdmF0ZSBfZ3J1cHBlOiBVbmRlcmdydXBwZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIGdyb2NlcnlTZXJ2aWNlOiBHcm9jZXJ5U2VydmljZSwgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkgeyBcbiAgICAgICAgLy8gdXNlIHN3aXRjaE1hcCB0byBnZXQgdGhlIGxhdGVzdCBhY3RpdmF0ZWRSb3V0ZSBpbnN0YW5jZVxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHsgdGhpcy5pZCA9ICtwYXJhbXNbXCJpZFwiXTsgfSk7XG4gICAgfVxuICAgIFxuXG4gICAgZ2V0IHZhbGd0R3J1cHBlKCk6IFVuZGVyZ3J1cHBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dydXBwZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VydmljZS5sb2FkKHRoaXMuaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVkR3JvY2VyaWVzLmZvckVhY2goKGdyb2NlcnlPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIHB1YmxpYyBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IGFueSkge1xuICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xuICAgIHZhciB0YXBwZWRJdGVtID0gdGhpcy5ncm9jZXJ5TGlzdFtpdGVtSW5kZXhdIGFzIFVuZGVyZ3J1cHBlO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCd1bmRlcmdydXBwZS91bmRlcmdydXBwZScpOyAgXG4gIH1cblxufSJdfQ==