"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerImpl = void 0;
var SchedulerImpl = /** @class */ (function () {
    function SchedulerImpl() {
    }
    SchedulerImpl.prototype.empty = function () {
        return true;
    };
    SchedulerImpl.prototype.add = function (appointment) {
        this.appointments = appointment;
    };
    return SchedulerImpl;
}());
exports.SchedulerImpl = SchedulerImpl;
