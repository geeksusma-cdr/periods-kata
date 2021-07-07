"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appointment_1 = require("./appointment");
var period_1 = require("./period");
var scheduler_impl_1 = require("./scheduler-impl");
describe('Appointments', function () {
    test('Should return empty when no appointments scheduled', function () {
        //given
        var schedule = new scheduler_impl_1.SchedulerImpl();
        //when
        var empty = schedule.empty();
        //then
        expect(empty).toEqual(true);
    });
    test('Should return not empty when appointments scheduled', function () {
        //given
        var schedule = new scheduler_impl_1.SchedulerImpl();
        schedule.add(new appointment_1.Appointment(new period_1.Period(new Date("10-10-2020"), new Date("10-10-2021"))));
        //when
        var empty = schedule.empty();
        //then
        expect(empty).toEqual(true);
    });
});
