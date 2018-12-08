"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("../shared/user/user.model");
var user_service_1 = require("../shared/user/user.service");
var setuptoken_service_1 = require("../shared/setuptoken/setuptoken.service");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var setuptoken_model_1 = require("../shared/setuptoken/setuptoken.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page, createToken) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.createToken = createToken;
        this.isLoggingIn = true;
        this.user = new user_model_1.User();
        this.user.email = "info@jaxweb.dk";
        this.user.password = "2010Thuva";
        //        this.setupToken;
        this.token = new setuptoken_model_1.Token();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.setupToken();
    };
    LoginComponent.prototype.setupToken = function () {
        console.log("Setup Token");
        this.createToken.getToken()
            .subscribe(function () { return console.log("Token created"); }, function (error) { return alert("Kunne ikke kontakte serveren"); });
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "gr-login",
            providers: [user_service_1.UserService, setuptoken_service_1.SetupToken],
            templateUrl: "login/login.component.html",
            styleUrls: ["login/login.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page, setuptoken_service_1.SetupToken])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdEQUFpRDtBQUNqRCw0REFBMEQ7QUFDMUQsOEVBQW9FO0FBQ3BFLDBDQUF5QztBQUN6QyxpREFBZ0Q7QUFDaEQsMEVBQThEO0FBUzlEO0lBS0ksd0JBQW9CLE1BQWMsRUFBVSxXQUF3QixFQUFVLElBQVUsRUFBVSxXQUF1QjtRQUFyRyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFGekgsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUN6QywwQkFBMEI7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHdCQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO2FBQ3RCLFNBQVMsQ0FDTixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBNUIsQ0FBNEIsRUFDbEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsOEJBQThCLENBQUMsRUFBckMsQ0FBcUMsQ0FDbkQsQ0FBQztJQUNWLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUNOLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQS9CLENBQStCLEVBQ3JDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLCtDQUErQyxDQUFDLEVBQXRELENBQXNELENBQ3BFLENBQUM7SUFDVixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ047WUFDSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0RBQXNELENBQUMsRUFBN0QsQ0FBNkQsQ0FDdEUsQ0FBQztJQUNWLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQXhEUSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLCtCQUFVLENBQUM7WUFDcEMsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQU84QixlQUFNLEVBQXVCLDBCQUFXLEVBQWdCLFdBQUksRUFBdUIsK0JBQVU7T0FMaEgsY0FBYyxDQXlEMUI7SUFBRCxxQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNldHVwVG9rZW59IGZyb20gXCIuLi9zaGFyZWQvc2V0dXB0b2tlbi9zZXR1cHRva2VuLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuLi9zaGFyZWQvc2V0dXB0b2tlbi9zZXR1cHRva2VuLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImdyLWxvZ2luXCIsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgU2V0dXBUb2tlbl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIHRva2VuOiBUb2tlbjtcclxuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGNyZWF0ZVRva2VuOiBTZXR1cFRva2VuKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcImluZm9AamF4d2ViLmRrXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCIyMDEwVGh1dmFcIjtcclxuLy8gICAgICAgIHRoaXMuc2V0dXBUb2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuID0gbmV3IFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBUb2tlbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNldHVwIFRva2VuXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVG9rZW4uZ2V0VG9rZW4oKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJUb2tlbiBjcmVhdGVkXCIpLFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIkt1bm5lIGlra2Uga29udGFrdGUgc2VydmVyZW5cIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25VcCgpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgfVxyXG59Il19