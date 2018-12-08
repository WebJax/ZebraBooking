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
            config_1.Config.jwttoken = data._kmd.authtoken;
        }), operators_1.catchError(this.handleErrors));
    };
    SetupToken.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXB0b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dXB0b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2QkFBa0M7QUFDbEMsNENBQXNEO0FBR3RELG9DQUFtQztBQUduQztJQUNJLG9CQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsNkJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLFFBQVEsRUFDZixFQUFFLEVBQ0YsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxlQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0osZUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QyxDQUFDLENBQUMsRUFDRixzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCxxQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQscURBQXFEO1FBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBM0JRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FFaUIsV0FBSTtPQURyQixVQUFVLENBNEJ0QjtJQUFELGlCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi9zZXR1cHRva2VuLm1vZGVsXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXR1cFRva2VuIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIENvbmZpZy50b2tlblVybCxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIENvbmZpZy5qd3R0b2tlbiA9IGRhdGEuX2ttZC5hdXRodG9rZW5cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTsgICAgICAgIFxuICAgICAgICAvL2hlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBDb25maWcuYXV0aEhlYWRlcik7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59Il19