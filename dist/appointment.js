"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
var Appointment = /** @class */ (function () {
    function Appointment(period) {
        this.period = period;
    }
    Appointment.prototype.hasConflict = function (appointment) {
        return this.period.isOverlapped(appointment.period);
    };
    return Appointment;
}());
exports.Appointment = Appointment;
