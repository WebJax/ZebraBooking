"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var behandlinger_service_1 = require("../shared/behandlinger/behandlinger.service");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var behandlingComponent = /** @class */ (function () {
    function behandlingComponent(routerExtensions, behandlingService, pageRoute) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.behandlingService = behandlingService;
        this.pageRoute = pageRoute;
        this.behandlingsListe = [];
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) { _this.id = +params["id"]; });
    }
    behandlingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.behandlingService.load(this.id)
            .subscribe(function (hentedeBehandlinger) {
            hentedeBehandlinger.forEach(function (behandlingsObjekt) {
                _this.behandlingsListe.unshift(behandlingsObjekt);
            });
        });
    };
    behandlingComponent.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this.behandlingsListe[itemIndex];
        this.routerExtensions.navigate(["/kalender/" + tappedItem.id]);
    };
    behandlingComponent = __decorate([
        core_1.Component({
            selector: "gr-behandling",
            providers: [behandlinger_service_1.BehandlingService],
            templateUrl: "behandlinger/behandlinger.component.html",
            styleUrls: ["behandlinger/behandlinger.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, behandlinger_service_1.BehandlingService, router_2.PageRoute])
    ], behandlingComponent);
    return behandlingComponent;
}());
exports.behandlingComponent = behandlingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVoYW5kbGluZ0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJlaGFuZGxpbmdDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBRS9ELG9GQUFnRjtBQUNoRixzREFBd0Q7QUFDeEQsNENBQTJDO0FBUzNDO0lBSUksNkJBQW9CLGdCQUFrQyxFQUFVLGlCQUFvQyxFQUFVLFNBQW9CO1FBQWxJLGlCQUtDO1FBTG1CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUhsSSxxQkFBZ0IsR0FBc0IsRUFBRSxDQUFDO1FBSXJDLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzlCLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ2pELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLG1CQUFtQjtZQUMxQixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxpQkFBaUI7Z0JBQzFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLGlEQUFtQixHQUExQixVQUEyQixJQUFTO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBZSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQXhCUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLHdDQUFpQixDQUFDO1lBQzlCLFdBQVcsRUFBRSwwQ0FBMEM7WUFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7U0FDekQsQ0FBQzt5Q0FLd0MseUJBQWdCLEVBQTZCLHdDQUFpQixFQUFxQixrQkFBUztPQUp6SCxtQkFBbUIsQ0F5Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmVoYW5kbGluZyB9IGZyb20gXCIuLi9zaGFyZWQvYmVoYW5kbGluZ2VyL2JlaGFuZGxpbmdlci5tb2RlbFwiO1xuaW1wb3J0IHsgQmVoYW5kbGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2JlaGFuZGxpbmdlci9iZWhhbmRsaW5nZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZ3ItYmVoYW5kbGluZ1wiLFxuICAgIHByb3ZpZGVyczogW0JlaGFuZGxpbmdTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJiZWhhbmRsaW5nZXIvYmVoYW5kbGluZ2VyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJiZWhhbmRsaW5nZXIvYmVoYW5kbGluZ2VyLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIGJlaGFuZGxpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGJlaGFuZGxpbmdzTGlzdGU6IEFycmF5PEJlaGFuZGxpbmc+ID0gW107XG4gICAgaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBiZWhhbmRsaW5nU2VydmljZTogQmVoYW5kbGluZ1NlcnZpY2UsIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHsgXG4gICAgICAgIC8vIHVzZSBzd2l0Y2hNYXAgdG8gZ2V0IHRoZSBsYXRlc3QgYWN0aXZhdGVkUm91dGUgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICAgICAgICApLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdOyB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iZWhhbmRsaW5nU2VydmljZS5sb2FkKHRoaXMuaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGhlbnRlZGVCZWhhbmRsaW5nZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhlbnRlZGVCZWhhbmRsaW5nZXIuZm9yRWFjaCgoYmVoYW5kbGluZ3NPYmpla3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWhhbmRsaW5nc0xpc3RlLnVuc2hpZnQoYmVoYW5kbGluZ3NPYmpla3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogYW55KSB7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICB2YXIgdGFwcGVkSXRlbSA9IHRoaXMuYmVoYW5kbGluZ3NMaXN0ZVtpdGVtSW5kZXhdIGFzIEJlaGFuZGxpbmc7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIva2FsZW5kZXIvXCIgKyB0YXBwZWRJdGVtLmlkXSk7XG4gICAgfVxufSJdfQ==