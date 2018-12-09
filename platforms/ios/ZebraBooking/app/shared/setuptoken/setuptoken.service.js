"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var config_1 = require("../config");
var SetupToken = /** @class */ (function () {
    function SetupToken(http) {
        this.http = http;
    }
    SetupToken.prototype.getToken = function () {
        return this.http.post(config_1.Config.tokenUrl, {}, { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (response) { return response.json(); }), operators_1.tap(function (data) {
            config_1.Config.jwttoken = data.token;
        }), operators_1.catchError(this.handleErrors));
    };
    SetupToken.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        //headers.append("Content-Type", "application/json");        
        //headers.append("Authorization", Config.authHeader);
        return headers;
    };
    SetupToken.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    SetupToken = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SetupToken);
    return SetupToken;
}());
exports.SetupToken = SetupToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXB0b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dXB0b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2QkFBa0M7QUFDbEMsNENBQXNEO0FBR3RELG9DQUFtQztBQUduQztJQUNJLG9CQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsNkJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLFFBQVEsRUFDZixFQUFFLEVBQ0YsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxlQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0osZUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxFQUNGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFDO0lBQ04sQ0FBQztJQUVELHFDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsNkRBQTZEO1FBQzdELHFEQUFxRDtRQUNyRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsaUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTNCUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBRWlCLFdBQUk7T0FEckIsVUFBVSxDQTRCdEI7SUFBRCxpQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4vc2V0dXB0b2tlbi5tb2RlbFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0dXBUb2tlbiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGdldFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICBDb25maWcudG9rZW5VcmwsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSxcbiAgICAgICAgICAgIHRhcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBDb25maWcuand0dG9rZW4gPSBkYXRhLnRva2VuXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAvL2hlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTsgICAgICAgIFxuICAgICAgICAvL2hlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBDb25maWcuYXV0aEhlYWRlcik7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19