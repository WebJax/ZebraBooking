"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var behandlinger_model_1 = require("./behandlinger.model");
var BehandlingService = /** @class */ (function () {
    function BehandlingService(http) {
        this.http = http;
        this.behandlingBaseUrl = "https://zebrafinken.dk/testsite/wp-json/jw_salonbooking/v1/behandlingsliste/";
    }
    BehandlingService.prototype.load = function (gruppe) {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        //let params = new URLSearchParams();
        //params.append("sort", "{\"_kmd.lmt\": 1}");
        return this.http.get(this.behandlingBaseUrl + gruppe, {
            headers: this.getCommonHeaders(),
        }).pipe(operators_1.map(function (res) { return res.json(); }), operators_1.map(function (data) {
            var behandlingsListe = [];
            data.forEach(function (behandling) {
                behandlingsListe.push(new behandlinger_model_1.Behandling(behandling.id, behandling.titel, behandling.pris, behandling.varighed, behandling.beskrivelse));
            });
            return behandlingsListe;
        }), operators_1.catchError(this.handleErrors));
    };
    BehandlingService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        //headers.append("Content-Type", "application/json");
        //headers.append("Authorization", "Kinvey " + Config.token);
        return headers;
    };
    BehandlingService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    BehandlingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BehandlingService);
    return BehandlingService;
}());
exports.BehandlingService = BehandlingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVoYW5kbGluZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZWhhbmRsaW5nZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBeUU7QUFDekUsNkJBQWtDO0FBQ2xDLDRDQUFzRDtBQUV0RCwyREFBa0Q7QUFHbEQ7SUFJSSwyQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFIOUIsc0JBQWlCLEdBQUcsOEVBQThFLENBQUM7SUFHakUsQ0FBQztJQUVuQyxnQ0FBSSxHQUFKLFVBQUssTUFBTTtRQUNQLDBHQUEwRztRQUMxRyxxQ0FBcUM7UUFDckMsNkNBQTZDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxFQUFFO1lBQ2xELE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7U0FFbkMsQ0FBQyxDQUFDLElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLEVBQ3RCLGVBQUcsQ0FBQyxVQUFBLElBQUk7WUFDSixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtnQkFDcEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3pJLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQzVCLENBQUMsQ0FBQyxFQUNGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoQyxDQUFDO0lBQ04sQ0FBQztJQUVELDRDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIscURBQXFEO1FBQ3JELDREQUE0RDtRQUM1RCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsaUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXBDUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FLaUIsV0FBSTtPQUpyQixpQkFBaUIsQ0FxQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBCZWhhbmRsaW5nIH0gZnJvbSBcIi4vYmVoYW5kbGluZ2VyLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCZWhhbmRsaW5nU2VydmljZSB7XG4gICAgYmVoYW5kbGluZ0Jhc2VVcmwgPSBcImh0dHBzOi8vemVicmFmaW5rZW4uZGsvdGVzdHNpdGUvd3AtanNvbi9qd19zYWxvbmJvb2tpbmcvdjEvYmVoYW5kbGluZ3NsaXN0ZS9cIjtcbiAgICBncnVwcGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBsb2FkKGdydXBwZSkge1xuICAgICAgICAvLyBLaW52ZXktc3BlY2lmaWMgc3ludGF4IHRvIHNvcnQgdGhlIGdyb2NlcmllcyBieSBsYXN0IG1vZGlmaWVkIHRpbWUuIERvbuKAmXQgd29ycnkgYWJvdXQgdGhlIGRldGFpbHMgaGVyZS5cbiAgICAgICAgLy9sZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAvL3BhcmFtcy5hcHBlbmQoXCJzb3J0XCIsIFwie1xcXCJfa21kLmxtdFxcXCI6IDF9XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJlaGFuZGxpbmdCYXNlVXJsICsgZ3J1cHBlLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSxcbiAgICAgICAgICAgIC8vcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLmpzb24oKSksXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJlaGFuZGxpbmdzTGlzdGUgPSBbXTtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGJlaGFuZGxpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYW5kbGluZ3NMaXN0ZS5wdXNoKG5ldyBCZWhhbmRsaW5nKGJlaGFuZGxpbmcuaWQsIGJlaGFuZGxpbmcudGl0ZWwsIGJlaGFuZGxpbmcucHJpcywgYmVoYW5kbGluZy52YXJpZ2hlZCwgYmVoYW5kbGluZy5iZXNrcml2ZWxzZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBiZWhhbmRsaW5nc0xpc3RlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgLy9oZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIC8vaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiS2ludmV5IFwiICsgQ29uZmlnLnRva2VuKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=