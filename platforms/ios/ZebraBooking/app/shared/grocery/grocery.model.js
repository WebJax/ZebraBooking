"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Overgruppe = /** @class */ (function () {
    function Overgruppe(id, titel, beskrivelse, image_url, har_undergrupper) {
        this.id = id;
        this.titel = titel;
        this.beskrivelse = beskrivelse;
        this.image_url = image_url;
        this.har_undergrupper = har_undergrupper;
    }
    return Overgruppe;
}());
exports.Overgruppe = Overgruppe;
var Undergruppe = /** @class */ (function () {
    function Undergruppe(id, titel) {
        this.id = id;
        this.titel = titel;
    }
    return Undergruppe;
}());
exports.Undergruppe = Undergruppe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2NlcnkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNJLG9CQUNXLEVBQVUsRUFDVixLQUFhLEVBQ2IsV0FBbUIsRUFDbkIsU0FBaUIsRUFDakIsZ0JBQXdCO1FBSnhCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7SUFDL0IsQ0FBQztJQUNULGlCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxnQ0FBVTtBQVV2QjtJQUNJLHFCQUNXLEVBQVUsRUFDVixLQUFhO1FBRGIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQVE7SUFDcEIsQ0FBQztJQUNULGtCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBPdmVyZ3J1cHBlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLCBcclxuICAgICAgICBwdWJsaWMgdGl0ZWw6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgYmVza3JpdmVsc2U6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaW1hZ2VfdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGhhcl91bmRlcmdydXBwZXI6IHN0cmluZyxcclxuICAgICkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmRlcmdydXBwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZywgXHJcbiAgICAgICAgcHVibGljIHRpdGVsOiBzdHJpbmcsXHJcbiAgICApIHsgfVxyXG59Il19