"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var grocery_model_1 = require("./grocery.model");
var GroceryService = /** @class */ (function () {
    function GroceryService(http) {
        this.http = http;
        this.overGruppeBaseUrl = "https://zebrafinken.dk/testsite/wp-json/jw_salonbooking/v1/behandlingsovergruppe";
        this.underGruppeBaseUrl = "https://zebrafinken.dk/testsite/wp-json/jw_salonbooking/v1/behandlingsundergruppe";
    }
    GroceryService.prototype.load = function (gruppe) {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        //let params = new URLSearchParams();
        //params.append("sort", "{\"_kmd.lmt\": 1}");
        if (gruppe === 0) {
            return this.http.get(this.overGruppeBaseUrl, {
                headers: this.getCommonHeaders(),
            }).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.map(function (data) {
                var groceryList = [];
                data.forEach(function (gruppe) {
                    groceryList.push(new grocery_model_1.Overgruppe(gruppe.id, gruppe.titel, gruppe.beskrivelse, gruppe.billede, gruppe.undergrupper));
                });
                return groceryList;
            }), operators_1.catchError(this.handleErrors));
        }
        else {
            return this.http.get(this.underGruppeBaseUrl + '/' + gruppe, {
                headers: this.getCommonHeaders(),
            }).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.map(function (data) {
                var groceryList = [];
                data.forEach(function (gruppe) {
                    groceryList.push(new grocery_model_1.Undergruppe(gruppe.id, gruppe.titel));
                });
                return groceryList;
            }), operators_1.catchError(this.handleErrors));
        }
    };
    GroceryService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        //headers.append("Content-Type", "application/json");
        //headers.append("Authorization", "Kinvey " + Config.token);
        return headers;
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    GroceryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GroceryService);
    return GroceryService;
}());
exports.GroceryService = GroceryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvY2VyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF5RTtBQUN6RSw2QkFBa0M7QUFDbEMsNENBQXNEO0FBRXRELGlEQUEwRDtBQUcxRDtJQUtJLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5QixzQkFBaUIsR0FBRyxrRkFBa0YsQ0FBQztRQUN2Ryx1QkFBa0IsR0FBRyxtRkFBbUYsQ0FBQztJQUd2RSxDQUFDO0lBRW5DLDZCQUFJLEdBQUosVUFBSyxNQUFNO1FBQ1AsMEdBQTBHO1FBQzFHLHFDQUFxQztRQUNyQyw2Q0FBNkM7UUFDN0MsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUN6QyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBRW5DLENBQUMsQ0FBQyxJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxFQUN0QixlQUFHLENBQUMsVUFBQSxJQUFJO2dCQUNKLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07b0JBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZILENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdkIsQ0FBQyxDQUFDLEVBQ0Ysc0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUU7Z0JBQ3pELE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7YUFFbkMsQ0FBQyxDQUFDLElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLEVBQ3RCLGVBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ0osSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtvQkFDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUN2QixDQUFDLENBQUMsRUFDRixzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixxREFBcUQ7UUFDckQsNERBQTREO1FBQzVELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdERRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FNaUIsV0FBSTtPQUxyQixjQUFjLENBdUQxQjtJQUFELHFCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBPdmVyZ3J1cHBlLCBVbmRlcmdydXBwZSB9IGZyb20gXCIuL2dyb2NlcnkubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyb2NlcnlTZXJ2aWNlIHtcbiAgICBvdmVyR3J1cHBlQmFzZVVybCA9IFwiaHR0cHM6Ly96ZWJyYWZpbmtlbi5kay90ZXN0c2l0ZS93cC1qc29uL2p3X3NhbG9uYm9va2luZy92MS9iZWhhbmRsaW5nc292ZXJncnVwcGVcIjtcbiAgICB1bmRlckdydXBwZUJhc2VVcmwgPSBcImh0dHBzOi8vemVicmFmaW5rZW4uZGsvdGVzdHNpdGUvd3AtanNvbi9qd19zYWxvbmJvb2tpbmcvdjEvYmVoYW5kbGluZ3N1bmRlcmdydXBwZVwiO1xuICAgIGdydXBwZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGxvYWQoZ3J1cHBlKSB7XG4gICAgICAgIC8vIEtpbnZleS1zcGVjaWZpYyBzeW50YXggdG8gc29ydCB0aGUgZ3JvY2VyaWVzIGJ5IGxhc3QgbW9kaWZpZWQgdGltZS4gRG9u4oCZdCB3b3JyeSBhYm91dCB0aGUgZGV0YWlscyBoZXJlLlxuICAgICAgICAvL2xldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIC8vcGFyYW1zLmFwcGVuZChcInNvcnRcIiwgXCJ7XFxcIl9rbWQubG10XFxcIjogMX1cIik7XG4gICAgICAgIGlmIChncnVwcGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMub3ZlckdydXBwZUJhc2VVcmwsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSxcbiAgICAgICAgICAgICAgICAvL3BhcmFtczogcGFyYW1zXG4gICAgICAgICAgICB9KS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChncnVwcGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb2NlcnlMaXN0LnB1c2gobmV3IE92ZXJncnVwcGUoZ3J1cHBlLmlkLCBncnVwcGUudGl0ZWwsIGdydXBwZS5iZXNrcml2ZWxzZSwgZ3J1cHBlLmJpbGxlZGUsIGdydXBwZS51bmRlcmdydXBwZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudW5kZXJHcnVwcGVCYXNlVXJsICsgJy8nICsgZ3J1cHBlLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCksXG4gICAgICAgICAgICAgICAgLy9wYXJhbXM6IHBhcmFtc1xuICAgICAgICAgICAgfSkucGlwZShcbiAgICAgICAgICAgICAgICBtYXAocmVzID0+IHJlcy5qc29uKCkpLFxuICAgICAgICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb2NlcnlMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZ3J1cHBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5wdXNoKG5ldyBVbmRlcmdydXBwZShncnVwcGUuaWQsIGdydXBwZS50aXRlbCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyb2NlcnlMaXN0O1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAvL2hlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgLy9oZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJLaW52ZXkgXCIgKyBDb25maWcudG9rZW4pO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufSJdfQ==