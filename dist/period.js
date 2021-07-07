"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Period = void 0;
var Period = /** @class */ (function () {
    function Period(start, end) {
        this.start = start;
        this.end = end;
    }
    Period.prototype.isOverlapped = function (period) {
        if (this.end < this.start) {
            throw new RangeError("End date must be after Start date");
        }
        return this.equals(period) || this.isBetween(period.start) || this.isBetween(period.end) || this.isWithinPeriod(period);
    };
    Period.prototype.equals = function (obj) {
        return this.start === obj.start && this.end === obj.end;
    };
    Period.prototype.isWithinPeriod = function (obj) {
        return this.start < obj.start && this.end > obj.end;
    };
    Period.prototype.isBetween = function (dateToCheck) {
        return this.start < dateToCheck && this.end > dateToCheck;
    };
    return Period;
}());
exports.Period = Period;
