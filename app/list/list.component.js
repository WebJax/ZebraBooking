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
            this._router.navigateByUrl('undergruppe/undergruppe/' + tappedItem.id);
        }
        else {
            this._router.navigateByUrl('behandlinger/behandlinger' + tappedItem.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFFekMscUVBQW1FO0FBU25FO0lBSUksdUJBQW9CLE9BQWUsRUFBVSxjQUE4QjtRQUF2RCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSDNFLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztJQUcyQyxDQUFDO0lBRWhGLHNCQUFJLHNDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0QixTQUFTLENBQUMsVUFBQSxlQUFlO1lBQ3RCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNsQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVJLDJDQUFtQixHQUExQixVQUEyQixJQUFTO1FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQWUsQ0FBQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDBCQUEwQixHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNILENBQUM7SUEzQlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBSytCLGVBQU0sRUFBMEIsZ0NBQWM7T0FKbEUsYUFBYSxDQTZCekI7SUFBRCxvQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPdmVyZ3J1cHBlIH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnkubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJnci1saXN0XCIsXHJcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5U2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0L2xpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wibGlzdC9saXN0LmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGdyb2NlcnlMaXN0OiBBcnJheTxPdmVyZ3J1cHBlPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfZ3J1cHBlOiBPdmVyZ3J1cHBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIGdyb2NlcnlTZXJ2aWNlOiBHcm9jZXJ5U2VydmljZSkgeyB9XHJcblxyXG4gICAgZ2V0IHZhbGd0R3J1cHBlKCk6IE92ZXJncnVwcGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncnVwcGU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5U2VydmljZS5sb2FkKDApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBhbnkpIHtcclxuICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xyXG4gICAgdmFyIHRhcHBlZEl0ZW0gPSB0aGlzLmdyb2NlcnlMaXN0W2l0ZW1JbmRleF0gYXMgT3ZlcmdydXBwZTtcclxuICAgIGlmICh0YXBwZWRJdGVtLmhhcl91bmRlcmdydXBwZXIpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgndW5kZXJncnVwcGUvdW5kZXJncnVwcGUvJyArIHRhcHBlZEl0ZW0uaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnYmVoYW5kbGluZ2VyL2JlaGFuZGxpbmdlcicgKyB0YXBwZWRJdGVtLmlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19