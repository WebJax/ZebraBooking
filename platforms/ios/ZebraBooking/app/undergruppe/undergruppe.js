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
        this._router.navigateByUrl('/behandlingComponent/' + tappedItem.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZXJncnVwcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmRlcmdydXBwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFFekMscUVBQW1FO0FBQ25FLHNEQUF3RDtBQUN4RCw0Q0FBMkM7QUFTM0M7SUFLSSw4QkFBb0IsT0FBZSxFQUFVLGNBQThCLEVBQVUsU0FBb0I7UUFBekcsaUJBS0M7UUFMbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIekcsZ0JBQVcsR0FBdUIsRUFBRSxDQUFDO1FBSWpDLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2xDLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ25ELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0Qsc0JBQUksNkNBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM1QixTQUFTLENBQUMsVUFBQSxlQUFlO1lBQ3RCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNsQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVJLGtEQUFtQixHQUExQixVQUEyQixJQUFTO1FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQWdCLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUE5QlUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDN0MsQ0FBQzt5Q0FNK0IsZUFBTSxFQUEwQixnQ0FBYyxFQUFxQixrQkFBUztPQUxoRyxvQkFBb0IsQ0FnQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5kZXJncnVwcGUgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbFwiO1xuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJnci11bmRlclwiLFxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJ1bmRlcmdydXBwZS91bmRlcmdydXBwZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJ1bmRlcmdydXBwZS91bmRlcmdydXBwZS5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIHVuZGVyZ3J1cHBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGdyb2NlcnlMaXN0OiBBcnJheTxVbmRlcmdydXBwZT4gPSBbXTtcbiAgICBwcml2YXRlIF9ncnVwcGU6IFVuZGVyZ3J1cHBlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZ3JvY2VyeVNlcnZpY2U6IEdyb2NlcnlTZXJ2aWNlLCBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7IFxuICAgICAgICAvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICApLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdOyB9KTtcbiAgICB9XG4gICAgXG5cbiAgICBnZXQgdmFsZ3RHcnVwcGUoKTogVW5kZXJncnVwcGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3J1cHBlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdyb2NlcnlTZXJ2aWNlLmxvYWQodGhpcy5pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgcHVibGljIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogYW55KSB7XG4gICAgdmFyIGl0ZW1JbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgdmFyIHRhcHBlZEl0ZW0gPSB0aGlzLmdyb2NlcnlMaXN0W2l0ZW1JbmRleF0gYXMgVW5kZXJncnVwcGU7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9iZWhhbmRsaW5nQ29tcG9uZW50LycgKyB0YXBwZWRJdGVtLmlkKTsgIFxuICB9XG5cbn0iXX0=